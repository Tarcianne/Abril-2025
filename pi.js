// scripts.js
function openApp(appName) {
    const appContent = document.getElementById('app-content');
    switch (appName) {
      case 'messages':
        appContent.innerHTML = '<h2>Mensagens</h2><p>Envie e receba mensagens aqui!</p>';
        break;
      case 'alarm':
        appContent.innerHTML = '<h2>Alarme</h2><p>Configure alarmes para não perder nada!</p>';
        break;
      case 'camera':
        appContent.innerHTML = '<h2>Câmera</h2><p>Simule tirar fotos!</p>';
        break;
      case 'music':
        appContent.innerHTML = '<h2>Música</h2><p>Reproduza suas músicas favoritas!</p>';
        break;
      default:
        appContent.innerHTML = '<p>Escolha uma funcionalidade acima.</p>';
    }
  }
  