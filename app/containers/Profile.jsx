import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from 'css/components/profile';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {fetchProfileData, updateProfileData} from '../actions/users';

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
       editable: false,
       profile: this.props.profile,
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
     let dataObjToCopy = this.props.profile;
     const name = this.name;
     dataObjToCopy.profile.name = name.input.value;
     console.log(dataObjToCopy._id);
     this.props.updateProfileData(dataObjToCopy, dataObjToCopy._id);
     this._setEditMode();
   }

    _occupationMessage(company, jobtitle) {
      if(company === '' && jobtitle === '') {
        return 'No Current Occupation';
      } else if (jobtitle === '') {
          return 'Works at ' + company;
      } else if (company === '') {
          return 'Works as a ' + jobtitle;
      }
        return 'Works at ' + company + ' as a ' + jobtitle;
   }

ProfileCard = (
    <Paper zDepth={2} style={{height: '205px', width: '205px', position: 'relative', backgroundColor: '#4a8bc3'}}>
      <img  role="presentation" style={{width: '200px', height: '200px', top: '2.5px', margin: '0 auto', display: 'block', position: 'relative'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwKu_UngLvQ53YxfyJ4k35anZpAMTveT7fpZRb5zWYDRKi-Wo6aJvEA"/>
    </Paper>
   );

_markup() {
let renderedResult;
const isEditable = this.state.editable;
const profileData = this.props.profile;
let occupation = '';
let name = '';
let description = '';
let website = '';
let github = '';
let jobtitle = '';
let company = '';
let githubData = '';
let websiteData = '';
if (profileData.profile === undefined) {
  occupation = '';
  name = '';
  description = '';
  website = '';
  github = '';
  jobtitle = '';
  githubData = '';
  websiteData = '';
  company = '';
  } else {
occupation = this._occupationMessage(profileData.profile.company, profileData.profile.jobtitle);
name = profileData.profile.name === '' ? 'Name not currently set' : profileData.profile.name;
description = profileData === '' ? 'No Description set' : profileData.profile.description;
website = profileData === '' ? null : <div>{profileData.profile.website}</div>
github = profileData === '' ? null : <div>{profileData.profile.github}</div>
websiteData = profileData === '' ? null : profileData.profile.website;
githubData = profileData === '' ? null : profileData.profile.github;
company = profileData === '' ? null : profileData.profile.company;
jobtitle = profileData === '' ? null : profileData.profile.jobtitle;

}
if (!isEditable) {
  renderedResult = (
    <div className={cx('row')}>
      <div className={cx('avatarBadge')}>
        {this.ProfileCard}
        <RaisedButton primary={true} style={{position: 'relative', top: '10px'}}label="Update Profile" onTouchTap={this._setEditMode}/>
      </div>
      <div style={{float: 'left', width: 'calc(100% - 220px)'}}>
      <div className={cx('col-8')}>
      <h2 className={cx('txtName')}>{name}</h2>

    <span className={cx('txtCurrentPosition')}>{occupation}</span>
  <p className={cx('txtDescription')}>{description}</p>
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
      {website}
      {github}
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
      <TextField ref={(input) => { this.name = input; }} className={cx('txtName')} floatingLabelText="Name" defaultValue={name} />
    <br/>
  <TextField ref="jobtitle" className={cx('txtName')} floatingLabelText="Job Title" defaultValue={jobtitle} />
  <br/>
<TextField ref="companyname" className={cx('txtName')} floatingLabelText="Company Name" defaultValue={company} />
<br/>
<TextField ref="description" className={cx('txtName')} floatingLabelText="Description" defaultValue={description} multiLine={true} rows={2} rowsMax={5}/>      </div>
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
    <TextField ref="personalweb" className={cx('txtName')} hintText="Personal Web Site" defaultValue={websiteData} />
  <TextField ref="github" className={cx('txtName')} hintText="Github site" defaultValue={githubData} />
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
  fetchProfileData: PropTypes.func.isRequired,
  updateProfileData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
  };
}

export default connect(mapStateToProps, { fetchProfileData, updateProfileData })(Profile);
