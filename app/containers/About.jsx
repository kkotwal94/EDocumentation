import React, {Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class About extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  _handleTabChange = (value, e, tab) => {
    //console.log(this.context.history);
    console.log("Tab changed");
  }

  render() {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About Ninja Ocean</h1>
      <div className={cx('description')}>
        <p>Imagine an ocean of ninjas. Now think of it as a metaphor.<br />
          Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!
          Drakes new album is kinda LIT!
        </p>
      </div>
      <div className={cx('contribute')}>
        <RaisedButton
          label="Test button"
          primary={true}/>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target="_blank" href="https://github.com/choonkending/react-webpack-node">this repo</a>
        &nbsp;could be improved, please create an issue&nbsp;
          <a target="_blank" href="https://github.com/choonkending/react-webpack-node/issues">here</a>!
        </p>
      </div>
      <Tabs
        value={"1"}
        onChange={this._handleTabChange}
        inkBarStyle={{backgroundColor:"#FFC107"}} >
        <Tab
          value="1"
          label="Tab1" />
        <Tab
          value="2"
          label="Tab2" />
      </Tabs>
    </div>
  );
}
}
export default About;
