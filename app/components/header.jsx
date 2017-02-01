'use strict';

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
          <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Kanban ReactJS App</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                    </ul>
                </div>
            </div>
          </div>
        );
    }
});

module.exports = Header;