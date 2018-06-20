import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import Animate from 'rc-animate';
import toArray from 'rc-util/lib/Children/toArray';
import { contextTypes } from './Tree';
import {
  getNodeChildren,
  mapChildren,
} from './util';

import styles from './treenode.scss';
console.log(styles);

let onlyTreeNodeWarned = false; // Only accept TreeNode

export const nodeContextTypes = {
  ...contextTypes,
  rcTreeNode: PropTypes.shape({
    onUpCheckConduct: PropTypes.func,
  }),
};

class TreeNode extends React.Component {

  static contextTypes = nodeContextTypes;

  static childContextTypes = nodeContextTypes;

  static defaultProps = {
    // title: defaultTitle,
  };

  constructor(props) {
    super(props);

    this.state = {
      dragNodeHighlight: false,
    };
  }

  getChildContext() {
    return {
      ...this.context,
    };
  }


  onExpand = (e) => {
    const { rcTree: { onNodeExpand } } = this.context;
    onNodeExpand(e, this);
  };


  getNodeChildren = () => {
    const { children } = this.props;
    const originList = toArray(children).filter(node => node);
    const targetList = getNodeChildren(originList);

    if (originList.length !== targetList.length && !onlyTreeNodeWarned) {
      onlyTreeNodeWarned = true;
      warning(false, 'Tree only accept TreeNode as children.');
    }

    return targetList;
  };

  renderSelector = () => {
    const { title } = this.props;
    return (
      <div
        title={typeof title === 'string' ? title : ''}
        onClick={this.onExpand}
        className={styles.row}
      >
        {title}
      </div>
    );
  };

  // Children list wrapped with `Animation`
  renderChildren = () => {
    const { expanded, pos } = this.props;
    const { rcTree: {
      prefixCls,
      openTransitionName, openAnimation,
      renderTreeNode,
    } } = this.context;

    // [Legacy] Animation control
    const renderFirst = this.renderFirst;
    this.renderFirst = 1;
    let transitionAppear = true;
    if (!renderFirst && expanded) {
      transitionAppear = false;
    }

    const animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = { ...openAnimation };
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }

    // Children TreeNode
    const nodeList = this.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    let $children;
    if (expanded) {
      $children = (
        <ul
          className={classNames(
            `${prefixCls}-child-tree`,
            expanded && `${prefixCls}-child-tree-open`,
          )}
          data-expanded={expanded}
        >
          {mapChildren(nodeList, (node, index) => (
            renderTreeNode(node, index, pos)
          ))}
        </ul>
      );
    }

    return (
      <Animate
        {...animProps}
        showProp="data-expanded"
        transitionAppear={transitionAppear}
        component=""
      >
        {$children}
      </Animate>
    );
  };

  render() {
    return (
      <li>
        {this.renderSelector()}
        {this.renderChildren()}
      </li>
    );
  }
}

TreeNode.isTreeNode = 1;

export default TreeNode;
