const { Plugin } = require('powercord/entities');
const { React, getModuleByDisplayName } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');
const { findInReactTree } = require('powercord/util');

const SendBtn = require('./components/SendBtn');


class SendButton extends Plugin {
  startPlugin () {
    this._patchButton();
  }

  pluginWillUnload () {
    uninject('powercord-send-button_cta');
  }

  async _patchButton () {
    const ChannelTextArea = await getModuleByDisplayName('ChannelTextArea');

    inject('powercord-send-button_cta', ChannelTextArea.prototype, 'render', (_, res) => {
      const ButtonContainer = findInReactTree(res, (o) => (
        typeof o.className === 'string' && o.className.startsWith('buttons-')
      ));

      const textArea = findInReactTree(res, (o) => (
        typeof o.className === 'string' && o.className.startsWith('textArea-') &&
        o.onSubmit
      ));

      if (!textArea.onSubmit) return res;

      ButtonContainer.children.push(
        React.createElement(SendBtn, {
          onClick: () => {
            textArea.onSubmit();
          },
        }),
      );

      return res;
    });
  }
}

module.exports = SendButton;
