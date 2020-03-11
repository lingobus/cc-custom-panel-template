const { read, pkgName } = require_('utils.js');

const vm = (el) => {
  return new Vue({
    el,
    name: '{{name}}-panel',
    template: read('panel/panel.html'),
    data () {
      return {
        text: 'hello!'
      }
    },
    created() {
        window["{{name}}".replace(/-([a-z])/g, function(all, match){return match[0].toUpperCase()})] = this;
    },
    compiled(){

    },
    methods: {
      $t(key) {
        return Editor.T(key);
      },
      onConfirm() {
        Editor.Ipc.sendToMain(`${pkgName}:clicked`);
      }
    }
  })
};

Editor.Panel.extend({
  style: read('panel/style.css'),
  template: read('panel/index.html'),
  $: {
    root: '#{{name}}-panel'
  },
  ready () {
    this.vm = vm(this.$root);
  },
  messages: {
    changeText(sender, text) {
      this.vm.text = text;
    }
  }
});

function require_(relativePath) {
  return Editor.require(`packages://{{name}}/${relativePath}`);
}
