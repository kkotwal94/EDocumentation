import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from 'css/components/profile';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {fetchProfileData} from '../actions/users';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

 class Profile extends Component {
   constructor(props) {
     super(props);
     this.state = {
       editable: false
     };
   }
   componentDidMount() {
     document.body.style.backgroundColor = '#fff';
     //fetch data on pageload
     this.props.fetchProfileData();
   }

   _setEditMode = () => {
     if (!this.state.editable) {
       this.setState({ editable: true});
     } else {
       this.setState({ editable: false});
     }
   }

   _handleSubmit = () => {
     console.log('saved');
     this._setEditMode();
   }

ProfileCard = (
    <Paper zDepth={2} style = {{height: '205px', width: '205px',position: 'relative', backgroundColor: '#4a8bc3'}}>
      <img style={{width: '200px', height:'200px', top: '2.5px', margin: '0 auto', display: 'block', position: 'relative'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwKu_UngLvQ53YxfyJ4k35anZpAMTveT7fpZRb5zWYDRKi-Wo6aJvEA"/>
    </Paper>
   );

_markup() {
let renderedResult;
let isEditable = this.state.editable;

if (!isEditable) {
  renderedResult = (
    <div className={cx('row')}>
      <div className={cx('avatarBadge')}>
        {this.ProfileCard}
        <RaisedButton primary={true} style={{position: 'relative', top: '10px'}}label="Update Profile" onTouchTap={this._setEditMode}/>
      </div>
      <div style={{float: 'left', width: 'calc(100% - 220px)'}}>
      <div className={cx('col-8')}>
      <h2 className={cx('txtName')}>Karan Kotwal</h2>

    <span className={cx('txtCurrentPosition')}>Works at Endevor as Application Developer</span>
  <p className={cx('txtDescription')}> This is a page about me and my shenanigans, like creating this application </p>
      </div>
      <div className={cx('col-4')} style={{margin: '10px 0 6px 0 !important', maxWidth: '300px', float: 'right'}}>
        <div className= {cx('col-4')}>
          <span className={cx('txtProfileNumber')}>10</span>
        <span className={cx('txtNumberSubHeader')}>Docs </span>
        </div>

      <div className={cx('col-4')}>
        <div className= {cx('col-4')}>
          <span className={cx('txtProfileNumber')}>6,399</span>
        <span className={cx('txtNumberSubHeader')}>Contributions </span>
        </div>
      </div>
      <div className={cx('col-4')}>
        <div className= {cx('col-4')}>
          <span className={cx('txtProfileNumber')}>33</span>
        <span className={cx('txtNumberSubHeader')}>Organizations </span>
        </div>
      </div>
    <div className={cx('row')} style={{marginTop:"60px"}}>
      <div>kkotwal.me</div>
    <div>github.com/kkotwal94</div>
  <div>Member for this many years</div>
    </div>
      </div>
    </div>
  </div>
);
}
else {
  renderedResult = (
    <div className={cx('row')}>
      <div className={cx('avatarBadge')}>
        {this.ProfileCard}
      <RaisedButton primary={true} style={{position: 'relative', top: '10px'}}label="Save Changes" onTouchTap={this._handleSubmit} />
      </div>
      <div style={{float: 'left', width: 'calc(100% - 220px)'}}>
      <div className={cx('col-8')}>
      <TextField ref="name" className={cx('txtName')} floatingLabelText="Name" defaultValue="Karan Kotwal" />
    <br/>
  <TextField ref="jobtitle" className={cx('txtName')} floatingLabelText="Job Title" defaultValue="Application Developer" />
  <br/>
<TextField ref="companyname" className={cx('txtName')} floatingLabelText="Company Name" defaultValue="Endevor" />
<br/>
<TextField ref="description" className={cx('txtName')} floatingLabelText="Description" defaultValue="This is a page about me and my shenanigans, like creating this application" multiLine={true} rows={2} rowsMax={5}/>      </div>
      <div className={cx('col-4')} style={{margin: '10px 0 6px 0 !important', maxWidth: '300px', float: 'right'}}>
        <div className= {cx('col-4')}>
          <span className={cx('txtProfileNumber')}>10</span>
        <span className={cx('txtNumberSubHeader')}>Docs </span>
        </div>

      <div className={cx('col-4')}>
        <div className= {cx('col-4')}>
          <span className={cx('txtProfileNumber')}>6,399</span>
        <span className={cx('txtNumberSubHeader')}>Contributions </span>
        </div>
      </div>
      <div className={cx('col-4')}>
        <div className= {cx('col-4')}>
          <span className={cx('txtProfileNumber')}>33</span>
        <span className={cx('txtNumberSubHeader')}>Organizations </span>
        </div>
      </div>
    <div className={cx('row')} style={{marginTop:"60px"}}>
    <TextField ref="personalweb" className={cx('txtName')} hintText="Personal Web Site" defaultValue="kkotwal.me" />
    <TextField ref="github" className={cx('txtName')} hintText="Github site" defaultValue="github.com/kkotwal94" />
    <div>Member for this many years</div>
    </div>
      </div>
    </div>
  </div>
  );
}
return (
      <div>
        {renderedResult}
      </div>

    );
}

render() {
  console.log(this.props.profile);
  console.log(this.state.profile);
  let markup = this._markup();
  return (
    <div style={{position:'relative', top:'68px', margin: '0 auto'}}>
      {markup}

    </div>
    );
}

}

Profile.propTypes = {
  profile: PropTypes.object,
  fetchProfileData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps, { fetchProfileData })(Profile);
