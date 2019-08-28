const { read, pkgName } = require_('utils.js');

Editor.Panel.extend({
  style: read('panel/style.css'),
  template: read('panel/index.html'),
  $: {
    btn: '#btn',
    text: '#text'
  },
  ready () {
    this.$btn.addEventListener('confirm', () => {
      Editor.Ipc.sendToMain(`${pkgName}:clicked`);
    });
  },
  messages: {
    changeText(sender, text) {
      this.$text.innerHTML = text;
    }
  }
});

function require_(relativePath) {
  return Editor.require(`packages://{{name}}/${relativePath}`);
}