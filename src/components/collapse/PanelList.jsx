import React, { Component } from 'react';
import styles from './panelList.scss';
import Animate from 'rc-animate';
import openAnimationFactory from './openAnimationFactory';
import classnames from 'classnames';
console.log(styles);
export default class PanelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  handleItemClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    console.log(this.state.active);
    const panelList = classnames({
      'content': true,
      'hide': this.state.active ? false : true
    })
    return (
      <div className={styles.panelList}>
        <div className='header' style={{
          borderBottom: this.props.last && 'none'
        }}
          onClick={this.handleItemClick}
        >
          {this.props.txt}
        </div>
        <Animate
          showProp='hide'
          exclusive
          component=""
          animation={openAnimationFactory('rc-collapse')}
        >
          <div className={panelList}>
            {this.props.children}
          </div>
        </Animate>

      </div>

    )
  }
}
