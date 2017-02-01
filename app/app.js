'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header.jsx');
var Footer = require('./components/footer.jsx');
var Content = require('./components/content.jsx');

var LayoutHeader = React.createClass({
  render: function() { 
    return <Header />;
  }
});

var LayoutContent = React.createClass({
  render: function() { 
    return <Content />;
  }
});

var LayoutFooter = React.createClass({
  render: function() { 
    return <Footer />;
  }
});

ReactDOM.render(<LayoutHeader />, document.getElementById('header'));
ReactDOM.render(<LayoutContent />, document.getElementById('content'));
ReactDOM.render(<LayoutFooter />, document.getElementById('footer'));