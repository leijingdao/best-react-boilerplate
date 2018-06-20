import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Animate from 'rc-animate';
import PanelList from './PanelList';

class CollapsePanel extends Component {
  handleItemClick = () => {
    if (this.props.onItemClick) {
      this.props.onItemClick();
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick();
    }
  }

  render() {
    const {
      className,
      id,
      style,
      prefixCls,
      header,
      headerClass,
      children,
      isActive,
      showArrow,
      destroyInactivePanel,
      disabled,
      accordion,
      forceRender,
      child
    } = this.props;
    let Header = header;
    // console.log(header);
    const headerCls = classNames(`${prefixCls}-header`, {
      [headerClass]: headerClass,
    });
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive && !child,
      [`${prefixCls}-item-disabled`]: disabled,
    }, className);
    return (
      <div className={itemCls} style={style} id={id}>
        <div
          className={headerCls}
          style={{
            marginTop: child ? 0 : '.16rem'
          }}
          onClick={this.handleItemClick}
          role={accordion ? 'tab' : 'button'}
          tabIndex={disabled ? -1 : 0}
          aria-expanded={`${isActive}`}
          onKeyPress={this.handleKeyPress}
        >
          {showArrow && <i className="arrow" />}
          {/* {header(1)} */}
          <Header  isActive={isActive} />
          {/* {header} */}
        </div>
        <Animate
          showProp="isActive"
          exclusive
          component=""
          animation={this.props.openAnimation}
        >
          <PanelContent
            style={{
             paddingLeft:!child&&'.24rem',
             paddingRight:!child&&'.24rem'
            }}
            prefixCls={prefixCls}
            isActive={isActive}
            destroyInactivePanel={destroyInactivePanel}
            forceRender={forceRender}
            role={accordion ? 'tabpanel' : null}
          >
            {children}
          </PanelContent>
        </Animate>
      </div>
    );
  }
}

CollapsePanel.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  id: PropTypes.string,
  children: PropTypes.any,
  openAnimation: PropTypes.object,
  prefixCls: PropTypes.string,
  // header: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.node,
  // ]),
  headerClass: PropTypes.string,
  showArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  onItemClick: PropTypes.func,
  style: PropTypes.object,
  destroyInactivePanel: PropTypes.bool,
  disabled: PropTypes.bool,
  accordion: PropTypes.bool,
  forceRender: PropTypes.bool,
};

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick() { },
  headerClass: '',
  forceRender: false,
};
CollapsePanel.PanelList = PanelList;
export default CollapsePanel;
