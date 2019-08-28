'use strict';
/**
 * Package Entry
 * @see https://docs.cocos.com/creator/manual/zh/extension/your-first-extension.html
 */
module.exports = {
  load() {
    Editor.log(`Loading Package "{{name}}" from ${__dirname}`);
  },
  unload() {
    Editor.log('Unloading Package "{{name}}"');
  },
  /**
   * Package Message Handlers
   * @see https://docs.cocos.com/creator/manual/zh/extension/entry-point.html#ipc-消息注册
   */
  messages: {
    ['{{name}}:clicked']() {
      Editor.log('{{name}}:clicked'); // Printed in Cocos Creator Console
      Editor.Ipc.sendToPanel('{{name}}', 'changeText', 'Wow!');
    }
  }
};