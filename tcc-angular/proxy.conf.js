// PROXY QUE PEGA QQR COISA DO /api E REDIRECIONA PARA O 8080

const PROXY_CONFIG = [
{
  context: ['/api'],
  target: 'htpp://localhost:8080/',
  secure: false,
  logLevel: 'debug'

}
];

module.exports = PROXY_CONFIG;
