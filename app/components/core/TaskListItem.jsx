'use strict';

var React = require('react');

var TaskListItem = React.createClass({
    propTypes: {
        taskName: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <tr>
                <td>
                    <div className="form-group">
                        <label>{this.props.taskName} </label>
                    </div>
                    <div className="form-group">
                        <label>{this.props.taskDescription} </label>
                    </div>
                    
                </td>
                <td>{this.props.taskPriority}</td>
                <td>{this.props.taskStatus}</td>
                <td>
                    <button type="button" className="btn btn-success">Edit</button>&nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
});

module.exports = TaskListItem;