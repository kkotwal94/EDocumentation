import React, {Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import { withRouter } from 'react-router';
//Material Ui stuff
import {
      IconButton,
      Drawer,
      Divider,
      RaisedButton,
      FlatButton,
      Paper} from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem, makeSelectable  } from 'material-ui/List'
import {Tabs, Tab} from 'material-ui/Tabs';
import EnhancedButton from 'material-ui/internal/EnhancedButton'
import Spacing from 'material-ui/styles/spacing';
import {white} from 'material-ui/styles/colors';

let SelectableList = makeSelectable(List);

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      open : false,
      leftNavOpen : false,
      renderTabs : true,
      tabIndex : null
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log(this._getSelectedIndex());
    this.setState({ tabIndex : this._getSelectedIndex()});
    let setTabsState = function() {
      this.setState({renderTabs: !(document.body.clientWidth <= 871)});
    }.bind(this);
    setTabsState();
    window.onresize = setTabsState;
  }

  componentWillReceiveProps(nextProps, nextContent) {

     this.setState({
      tabIndex: this._getSelectedIndex()
    });
  }
  //toggle left nav
  toggle = () => {
    this.setState({leftNavOpen: !this.state.leftNavOpen});
  }

  //opening our login dialog
  handleDialogOpen = () => {
    this.setState({open: true});
  }

  //closing our login dialog

  handleDialogClose = () => {
    this.setState({open: false});
  }

  //On the hamburger button click

  _onLeftIconButtonTouchTap = () => {
     this.refs.leftNav.toggle();
  }

  //On closing side nav
  handleClose = () => this.setState({leftNavOpen: false});

  //On handling left nav change
  handleChangeRequestLeftNav = (open) => {
    this.setState({
      leftNavOpen: open
    });
  }

  //get our selected index/tab

 _getSelectedIndex() {
   if (this.props.router.isActive('/dashboard')){
     return 9;
   }
   else if (this.props.router.isActive('/profile')){
     return 7;
   }
   else if(this.props.router.isActive('/documents')){
     return 10;
   }
   else if(this.props.router.isActive('/create')){
     return 12;
   }
   else if(this.props.router.isActive('/about')){
     return 5;
   } else if(this.props.router.isActive('/login')) {
     return 8;
   } else {
     return 1;
   }
  }


  //for when we change tabs on our navbar
  _handleTabChange = (value, e, tab) => {
    let route;
    if(value == 7) {
      route = '/profile';
    }
    if(value == 9) {
      route = '/dashboard';
    }
    if(value == 10){
      route = "/documents";
    }
    if(value == 12){
      route = "/create";
    }
    if(value == 8){
      route = '/login';
    }
    if(value == 5) {
      route = '/about';
    }
      this.props.router.push(route);
      this.setState({tabIndex: this._getSelectedIndex()});

  }

  _returnHome = () => {
      this.props.router.push('/');
      this.setState({tabIndex: this._getSelectedIndex()});
  }

  //method for handling logout
  _onLogout = () => {

  }

  //creating our tabs
  _getTabs() {


  let styles = {
      root: {
        backgroundColor: '#8BC34A',
        position: 'fixed',
        height: 64,
        top: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
      },
      container: {
        position: 'absolute',
        right: (Spacing.desktopGutter/2) + 48,
        bottom: 0,
      },
      span: {
        color: white,
        left: 65,
        top: 18,
        position: 'absolute',
        fontSize: 26,
      },
      svgLogoContainer: {
        position: 'fixed',
        width: 300,
        left: Spacing.desktopGutter,
      },
      svgLogo: {
        width: 65,
        height: 65,
        backgroundColor: '#8BC34A',
        position: 'absolute',
        top: 0,
      },
      tabs: {
        width: 600,
        bottom:0,
        height: 64
      },
      tab: {
        height: 64,
        backgroundColor: '#8BC34A'
      },

    };
    let renderedResult;
    let loggedIn = true

    let materialIcon = this.state.tabIndex !== '0' ? (
     <EnhancedButton
        style={styles.svgLogoContainer}
        onClick={this._returnHome}>
        <span style={styles.span}>E-Docs</span>
    </EnhancedButton>) : null;

    if (loggedIn) {
    renderedResult = (

        <Paper zDepth={0}
             rounded={false}
             style={styles.root}
        >
          {materialIcon}

          <div style={styles.container}>
            <Tabs
              style={styles.tabs}
              value={this.state.tabIndex}
              onChange={this._handleTabChange}
              inkBarStyle={{backgroundColor:"#E91E63"}}>
              <Tab
                value={9}
                label="DASHBOARD"
                style={styles.tab} />
                <Tab
                  value={10}
                  label="DOCS"
                  style={styles.tab} />
                <Tab
                  value={12}
                  label="CREATE"
                  style={styles.tab} />
                <Tab
                  value={7}
                  label="PROFILE"
                  style={styles.tab}/>
                <Tab
                  value={99}
                  label="LOGOUT"
                  style={styles.tab} />
                <Tab
                value={5}
                label="ABOUT"
                style={styles.tab} />
            </Tabs>


          </div>

        </Paper>


    );
}

else {
  renderedResult = (

        <Paper zDepth={0}
             rounded={false}
             style={styles.root}
        >
          {materialIcon}
          <div style={styles.container}>
            <Tabs
              style={styles.tabs}
              value={this.state.tabIndex}
              onChange={this._handleTabChange}
              inkBarStyle={{backgroundColor:"#E91E63"}}>
                 <Tab
                   value={10}
                   label="DOCUMENTS"
                   style={styles.tab} />
                   <Tab
                     value={8}
                     label="LOGIN / SIGNUP"
                     style={styles.tab} />
                <Tab
                value={5}
                label="ABOUT"
                style={styles.tab}
                />
            </Tabs>


          </div>

        </Paper>

    );
}
return (
      <div>
        {renderedResult}
      </div>

    );
}

  //Our appbar for when window width is too small
  _getAppBar() {
    let title =
      this.props.router.isActive('/dashboard') ? 'Dashboard' :
      this.props.router.isActive('/profile') ? 'Profile' :
      this.props.router.isActive('/about') ? 'About' :
      this.props.router.isActive('/login') ? 'Login' :
      this.props.router.isActive('/documents') ? 'Documents' :
      this.props.router.isActive('/create') ? 'Create Documents' :
      'E-Docs';



      let style = {
        title : {
          float: 'left',
          color: 'white'
        },

        icon : {
          float: 'left'
        }
      };

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.toggle}
          title={title}
          titleStyle={style.title}
          iconStyleLeft={style.icon}
          zDepth={0}
          style={{position: 'fixed', height: '64px', top: 0, backgroundColor: '#8BC34A', top: 0, right: 0  }}/>
      </div>);
  }


  render() {
    let renderedresult;
    let loggedIn = true;
    let renderTabs = this.state.renderTabs;
    if(renderTabs == true){
    renderTabs = this._getTabs();
    }
    else {
      renderTabs = this._getAppBar();
    }

    let header = {

         root: { cursor: 'pointer',
          fontSize: 24,
          lineHeight: Spacing.desktopKeylineIncrement + 'px',
          backgroundColor: "#8BC34A",
          paddingLeft: Spacing.desktopGutter,
          marginBottom: 8 }
        };

    let dialogStyle = {

      root: {
        width: '100%'
      },

      mainDialog: {
        backgroundColor: "#2F2F2F"
      }

    };
      if (loggedIn) {
      renderedresult = (
<Drawer width={300} docked = {false} open={this.state.leftNavOpen} onRequestChange={this.handleChangeRequestLeftNav}>
        <div style = {header.root}>
        E-Docs
        </div>
          <SelectableList
            value = {this._getSelectedItem}
            onChange = {this.handleRequestChangeList}
          >
          <ListItem
            value="/dashboard"
            primaryText="Dashboard"/>
            <ListItem
              value="/profile"
              primaryText="Profile"/>
              <ListItem
                value="/documents"
                primaryText="Docs"/>
                <ListItem
                  value="/create"
                  primaryText="Create"/>
          <ListItem
            value="/about"
            primaryText="About"/>
            <ListItem
              value="/logout"
              primaryText="Log out"/>
          </SelectableList>
        </Drawer>
        );
    }

    else {
      renderedresult = (
        <Drawer width={300} docked = {false} open={this.state.leftNavOpen} onRequestChange={this.handleChangeRequestLeftNav}>
        <div style = {header.root}>
        <Link to="/">E-Docs</Link>
        </div>
          <SelectableList
            value = {this._getSelectedItem}
            onChange = {this.handleRequestChangeList}
          >

            <ListItem
              value="/documents"
              primaryText="Documents"/>
            <ListItem
              value="/login"
              primaryText="Login / Sign-up"/>
          <ListItem
            value="/about"
            primaryText="About"/>
          </SelectableList>
        </Drawer>
        );
    }

    return (
      <div>
        {renderTabs}
        {renderedresult}
        </div>

    );
  };

  //get selected item
  _getSelectedItem = () => {
     return this.props.router.isActive('/dashboard') ? 'Dashboard' :
     this.props.router.isActive('/profile') ? 'Profile' :
     this.props.router.isActive('/about') ? 'About' :
     this.props.router.isActive('/login') ? 'Login' :
     this.props.router.isActive('/document') ? 'Documents' :
     this.props.router.isActive('/create') ? 'Create Documents' : "";

  }

   handleRequestChangeList = (event, value) => {
     console.log(value);
    if(value == "null") {
        this.setState({
        leftNavOpen: false,
      });
    }
    else {
        this.props.router.push(value);
        this.setState({tabIndex: this._getSelectedIndex()});
        this.setState({
          leftNavOpen: false,
        });
    }

  }


}

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

Navigation = connect(mapStateToProps, { logOut })(Navigation);
export default withRouter(Navigation);
