import React, { Component } from 'react';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

 class Dashboard extends Component {
   componentDidMount() {
     document.body.style.backgroundColor = 'white';
   }

   render() {
      return (
        <div>Welcome to the Dasboard. Stay tuned...</div>
      );
   }
 }
export default Dashboard;
