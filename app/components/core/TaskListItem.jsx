'use strict';

var React = require('react');

var TaskListItem = React.createClass({
    propTypes: {
        taskName: React.PropTypes.string.isRequired
    },
    handleDeleteTaskRow: function() {
        this.props.taskDeleteButtonClick( this.props.taskId );
    },
    handleEditTaskRow: function() {
        this.props.taskEditButtonClick( this.props.taskId );
    },
    handleSelectRow: function() {
            
    },
    render: function () {
        return (
            <tr>
                <td>
                    <div className="form-group" >
                        <label>{this.props.taskName} </label>
                    </div>
                    <div className="form-group">
                        <label>{this.props.taskDescription} </label>
                    </div>
                    
                </td>
                <td>{this.props.taskPriority}</td>
                <td>{this.props.taskStatus}</td>
                <td>{this.props.taskDuration}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={this.handleEditTaskRow} >Edit</button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.handleDeleteTaskRow}>Delete</button>&nbsp;
                    <button type="button" className="btn btn-info" onClick={this.handleSelectRow}>Select</button>
                </td>
            </tr>
        );
    }
});

module.exports = TaskListItem;