import { loadExtendscript, getHostEnvironment, RGBColor } from 'cep-interface'

loadExtendscript('index.js');

const host = getHostEnvironment();
if (host) {
  const skin = host.appSkinInfo;
  const bgColor = skin.panelBackgroundColor.color as RGBColor;
  document.body.style.backgroundColor = `rgba(${Math.round(bgColor.red)},${Math.round(bgColor.green)},${Math.round(bgColor.blue)},${bgColor.alpha})`
}
