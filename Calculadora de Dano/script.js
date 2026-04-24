const estado = {
  chunli: { vida: 10000, maxVida: 10000, ataqueFinal: 0, maxAtaqueFinal: 100 },
  ryu: { vida: 10000, maxVida: 10000, ataqueFinal: 0, maxAtaqueFinal: 100 },
  turnoChunli: true,
  bloqueado: false,
  potenciador: 0
};

const ataques = {
  'spinning': { dano: 350, n: "Spinning Bird Kick" },
  'kikoken': { dano: 420, n: "Kikoken" },
  'senretsu': { dano: 480, n: "Senretsukyaku" },
  'tensho': { dano: 390, n: "Tenshokyaku" }
};

function log(msg) {
  const el = document.createElement("div");
  el.textContent = msg;
  const logEl = document.getElementById("registroPelea");
  logEl.appendChild(el);
  logEl.scrollTop = logEl.scrollHeight;
}

function actualizarUI() {
  ["chunli", "ryu"].forEach(nombre => {
    const p = estado[nombre];
    document.getElementById("vida" + nombre.charAt(0).toUpperCase() + nombre.slice(1)).textContent = Math.max(0, p.vida);
    document.getElementById("ataqueFinal" + nombre.charAt(0).toUpperCase() + nombre.slice(1)).textContent = Math.max(0, p.ataqueFinal);
    document.getElementById("barraVida" + nombre.charAt(0).toUpperCase() + nombre.slice(1)).style.width = Math.max(0, p.vida / p.maxVida * 100) + "%";
    document.getElementById("barraAtaqueFinal" + nombre.charAt(0).toUpperCase() + nombre.slice(1)).style.width = Math.max(0, p.ataqueFinal / p.maxAtaqueFinal * 100) + "%";
    
    const barraVida = document.getElementById("barraVida" + nombre.charAt(0).toUpperCase() + nombre.slice(1));
    const porcentaje = p.vida / p.maxVida;
    barraVida.className = "barra barraVida";
    if (porcentaje <= 0.1) barraVida.classList.add("rojo");
    else if (porcentaje <= 0.25) barraVida.classList.add("amarillo");
    else if (porcentaje <= 0.5) barraVida.classList.add("naranja");
    
    const barraAtaque = document.getElementById("barraAtaqueFinal" + nombre.charAt(0).toUpperCase() + nombre.slice(1));
    if (p.ataqueFinal >= p.maxAtaqueFinal) {
      barraAtaque.classList.add("ataqueListo");
    } else {
      barraAtaque.classList.remove("ataqueListo");
    }
  });
  document.querySelectorAll(".botonesAtaque button").forEach(b => b.disabled = !estado.turnoChunli || estado.bloqueado);
}

function finTurnoChunli() {
  estado.turnoChunli = false;
  estado.bloqueado = true;
  actualizarUI();
  setTimeout(turnoRyu, 600);
}

function finTurnoRyu() {
  estado.turnoChunli = true;
  estado.bloqueado = false;
  actualizarUI();
}

function golpear(tipo) {
  if (!estado.turnoChunli || estado.bloqueado) return;

  const c = estado.chunli, r = estado.ryu;
  estado.bloqueado = true;

  c.ataqueFinal = Math.min(c.maxAtaqueFinal, c.ataqueFinal + 25);
  if (c.ataqueFinal >= c.maxAtaqueFinal) {
    c.ataqueFinal = 0;
    estado.potenciador = 3;
    log("¡CHUN-LI ATAQUE FINAL! x2 por 3 turnos!");
  }

  const ataque = ataques[tipo];
  let dano = ataque.dano;
  
  if (estado.potenciador > 0) {
    dano = dano * 2;
    estado.potenciador--;
    log("¡ATAQUE POTENCIADO x2!");
  }

  r.vida = Math.max(0, r.vida - dano);
  log(`Chun-Li — ${ataque.n}: ${dano} daño`);
  actualizarUI();

  if (r.vida > 0) finTurnoChunli();
  else log("¡CHUN-LI GANA! SPINNING BIRD KICK!");
}

function turnoRyu() {
  const r = estado.ryu, c = estado.chunli;

  r.ataqueFinal = Math.min(r.maxAtaqueFinal, r.ataqueFinal + 20);
  if (r.ataqueFinal >= r.maxAtaqueFinal) {
    r.ataqueFinal = 0;
    log("¡RYU ATAQUE FINAL! x2 por 3 turnos!");
  }

  const opciones = [
    { dmg: 320, n: "Hadoken" },
    { dmg: 280, n: "Shoryuken" },
    { dmg: 250, n: "Tatsumaki" },
    { dmg: 300, n: "Puño fuerte" }
  ];
  
  let ataque = opciones[Math.floor(Math.random() * opciones.length)];
  let dano = ataque.dmg;
  
  if (estado.potenciador > 0) {
    dano = dano * 2;
    estado.potenciador--;
  }

  c.vida = Math.max(0, c.vida - dano);
  log(`Ryu — ${ataque.n}: ${dano} daño`);
  actualizarUI();

  if (c.vida > 0) finTurnoRyu();
  else log("¡RYU GANA! SHORYUKEN!");
}

actualizarUI();
window.golpear = golpear;