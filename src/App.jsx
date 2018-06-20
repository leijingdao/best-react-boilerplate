import React, { Component } from 'react';
import styles from './App.scss';
import Page from './components/Page';
import './fonts/iconfont.g.css';
// import 'rc-tree/assets/index.css';
import classnames from 'classnames';
console.log(styles);
class App extends Component {
  componentWillMount() {

  }
  componentDidMount() {
      // console.dir(this.app);
      // alert(this.app.clientWidth)
    // console.log(this.refs);
  }
  render() {
    return (
      <div className={styles.App} ref='app'>
        <Page/>
      </div>
    );
  }
}

export default App;
