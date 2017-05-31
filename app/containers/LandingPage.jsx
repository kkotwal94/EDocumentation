import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
import RaisedButton from 'material-ui/RaisedButton';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
 class LandingPage extends Component {
   componentDidMount() {
      document.body.style.backgroundColor = "white";
   }
   render() {
     return (
       <div className={cx('about')}>
         <h1 className={cx('header')}>Home Page</h1>
         <div className={cx('description')}>
           <p>Landing Page
           </p>
         </div>
       </div>
     );
   }
}

export default LandingPage;
