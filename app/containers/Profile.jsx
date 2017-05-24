import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
import RaisedButton from 'material-ui/RaisedButton';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Profile = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>Profile</h1>
      <div className={cx('description')}>
        <p>The Profile page
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
    </div>
  );
};

export default Profile;
