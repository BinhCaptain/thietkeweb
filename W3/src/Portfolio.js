import React, { Component } from 'react';
import Introduction from './components/introduction'
import Sidebar from './components/sidebar'
import About from './components/about'
import Timeline from './components/timeline'


class Portfolio extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default Portfolio;
