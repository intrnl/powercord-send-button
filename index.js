const { Plugin } = require('powercord/entities')
const { React, getModuleByDisplayName } = require('powercord/webpack')
const { inject, uninject } = require('powercord/injector')

const SendBtn = require('./components/SendBtn')

const event = new KeyboardEvent('keypress', {
  key: 'Enter',
  code: 'Enter',
  which: 13,
  keyCode: 13,
  bubbles: true,
})


class SendButton extends Plugin {
  startPlugin () {
    this._patchButton()
  }

  pluginWillUnload () {
    uninject('powercord-send-button_cta')
  }

  async _patchButton () {
    const ChannelTextArea = await getModuleByDisplayName('ChannelTextArea')

    inject('powercord-send-button_cta', ChannelTextArea.prototype, 'render', (_, res) => {
      res.props.children.props.children[3].props.children.push(
        React.createElement(SendBtn, {
          onClick: () => {
            res.props.children.props.children[2].props.onKeyPress(event)
          },
        }),
      )

      return res
    })
  }
}

module.exports = SendButton
