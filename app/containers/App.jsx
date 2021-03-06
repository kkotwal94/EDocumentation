import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router';
import Navigation from '../containers/Navigation';
import styles from '../css/main';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
 class App extends React.Component {
 	constructor(props) {
 		super(props);
 	}
  render() {
  return (
     <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme, { userAgent: 'all' })}>
     <div className={cx('app')}>
       <Navigation />

         {this.props.children}
     </div>
     </MuiThemeProvider>
   );
};
}

App.propTypes = {
  children: PropTypes.object
};

export default withRouter(App);
