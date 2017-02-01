'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/layout/Header.jsx');
var Footer = require('./components/layout/Footer.jsx');
var Content = require('./components/layout/Content.jsx');
var TaskContainer = require('./components/core/TaskContainer.jsx');

var LayoutHeader = React.createClass({
  render: function() { 
    return <Header />;
  }
});

var LayoutFooter = React.createClass({
  render: function() { 
    return <Footer />;
  }
});

var TaskListContainer = React.createClass({
  render: function() { 
    return <TaskContainer />;
  }
});

ReactDOM.render(<LayoutHeader />, document.getElementById('header'));
ReactDOM.render(<TaskListContainer />, document.getElementById('content'));
ReactDOM.render(<LayoutFooter />, document.getElementById('footer'));
