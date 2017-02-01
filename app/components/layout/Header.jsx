'use strict';

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse"> 
                <div className="container-fluid"> 
                    <div className="navbar-header"> 
                        <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false"> 
                            <span className="sr-only">Toggle navigation</span> 
                            <span className="icon-bar"></span> 
                            <span className="icon-bar"></span> 
                            <span className="icon-bar"></span> 
                        </button> 
                        <a href="#" className="navbar-brand">Magenic Masters</a> 
                    </div> 
                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9"> 
                        <ul className="nav navbar-nav"> 
                            <li className="active"><a href="#">Task List</a></li> 
                            <li><a href="#">Kanban</a></li> 
                        </ul> 
                    </div> 
                </div> 
            </nav>
        );
    }
});

module.exports = Header;