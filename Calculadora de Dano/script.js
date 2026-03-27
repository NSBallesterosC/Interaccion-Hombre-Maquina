const estado = {
  chunli: { hp: 320, maxHp: 320, ki: 100, maxKi: 100 },
  ryu: { hp: 280, maxHp: 280, ki: 100, maxKi: 100 },
  turnoChunli: true,
  bloqueado: false
};


const ataques = {
  'patada-luz': { dmg: 28, costo: 18, n: "Patada Luz" },
  'patada-media': { dmg: 35, costo: 22, n: "Patada Media" },
  'spinning': { dmg: 42, costo: 28, n: "Spinning Bird Kick" },
};

function log(msg) {
  const el = document.createElement("div");
  el.textContent = msg;
  const logEl = document.getElementById("log");
  logEl.appendChild(el);
  logEl.scrollTop = logEl.scrollHeight;
}

function actualizarUI() {
  ["chunli", "ryu"].forEach(nombre => {
    const p = estado[nombre];
    document.getElementById(nombre + "-hp").textContent = Math.max(0, p.hp);
    document.getElementById(nombre + "-ki").textContent = Math.max(0, p.ki);
    document.getElementById(nombre + "-hp-barra").style.width = Math.max(0, p.hp / p.maxHp * 100) + "%";
    document.getElementById(nombre + "-ki-barra").style.width = Math.max(0, p.ki / p.maxKi * 100) + "%";
  });
  document.querySelectorAll("#acciones button").forEach(b => b.disabled = !estado.turnoChunli || estado.bloqueado);
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

function atacar(tipo) {
  if (!estado.turnoChunli || estado.bloqueado) return;

  const c = estado.chunli, r = estado.ryu;
  estado.bloqueado = true;

  if (tipo === "cargar") {
    c.ki = Math.min(c.maxKi, c.ki + 45);
    log("Chun-Li cargó Ki +45");
    actualizarUI();
    finTurnoChunli();
    return;
  }

  const ataque = ataques[tipo];
  if (c.ki < ataque.costo) {
    estado.bloqueado = false;
    return;
  }

  c.ki -= ataque.costo;
  r.hp = Math.max(0, r.hp - ataque.dmg);
  log(`Chun-Li — ${ataque.n}: ${ataque.dmg} daño`);
  actualizarUI();

  if (r.hp > 0) finTurnoChunli();
  else log("¡CHUN-LI GANA! KIKOHOOO!");
}

function turnoRyu() {
  const r = estado.ryu, c = estado.chunli;


  if (r.ki < 20) {
    r.ki = Math.min(r.maxKi, r.ki + 50);
    log("Ryu cargó Ki +50");
    actualizarUI();
    finTurnoRyu();
    return;
  }


  const opciones = [
    { dmg: 38, costo: 30, n: "Hadoken" },
    { dmg: 25, costo: 20, n: "Shoryuken" },
    { dmg: 18, costo: 15, n: "Puño" },
    { dmg: 32, costo: 25, n: "Tatsumaki" }
  ];
  
  let ataque = opciones[Math.floor(Math.random() * opciones.length)];

  if (r.ki < ataque.costo) {
    ataque = { dmg: 12, costo: 0, n: "Golpe débil" };
  } else {
    r.ki -= ataque.costo;
  }
  
  c.hp = Math.max(0, c.hp - ataque.dmg);
  log(`Ryu — ${ataque.n}: ${ataque.dmg} daño`);
  actualizarUI();

  if (c.hp > 0) finTurnoRyu();
  else log("¡RYU GANA! SHORYUKEN!");
}

actualizarUI();
window.atacar = atacar;