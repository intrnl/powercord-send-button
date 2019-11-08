const { React, getModule } = require('powercord/webpack');

const cn = require('../utils/classnames');
const buttonCN = getModule(['button', 'lookBlank'], false);
const buttonWrapperCN = getModule(['buttonWrapper', 'pulseButton'], false);
const textAreaCN = getModule(['attachButton', 'button'], false);


class SendBtn extends React.PureComponent {
  render () {
    return (
      <button
        aria-label='Send message'
        tabIndex={6}
        type='button'
        className={cn([
          buttonWrapperCN.buttonWrapper,
          buttonCN.button,
          buttonCN.lookBlank,
          buttonCN.colorBrand,
          buttonCN.grow,
        ])}
        onClick={this.props.onClick}
      >
        <div
          className={cn([
            buttonCN.contents,
            buttonWrapperCN.button,
            textAreaCN.button,
          ])}
        >
          <svg
            aria-hidden={false}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn([
              buttonWrapperCN.icon,
            ])}
          >
            <path fill='currentColor' d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'/>
            <path d='M0 0h24v24H0z' fill='none'/>
          </svg>
        </div>
      </button>
    );
  }
}

module.exports = SendBtn;
