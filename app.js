const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const scenarios = {
  equilibrado: 'Una ciudad más conectada y profesionalizada, con crecimiento acompañado por inversión en infraestructura y conservación.',
  acelerado: 'Más inversión y empleo, junto con mayor densidad, competencia inmobiliaria y presión sobre los servicios urbanos.',
  presion: 'El crecimiento rebasa la infraestructura; la calidad de vida dependerá de decisiones firmes sobre agua, movilidad y medio ambiente.'
};
document.querySelectorAll('[data-scenario]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-scenario]').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  document.querySelector('#scenario-text').textContent = scenarios[button.dataset.scenario];
}));

document.querySelector('#newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-message').textContent = '¡Gracias! El diseño funciona; falta conectarlo con tu plataforma de correo.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
