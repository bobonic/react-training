'use strict';

var React = require('react');
var TaskListItem = require('./TaskListItem.jsx');

var TaskList = React.createClass({
    propTypes: {
        taskData: React.PropTypes.array.isRequired
    },
    renderItems: function () {
        return this.props.taskData.map(function (item) {
            return (
                <TaskListItem
                    key={item.TaskId}
                    taskName={item.Name} 
                    taskDescription={item.Description} 
                    taskPriority={item.Priority} 
                    taskStatus={item.Status} 

                    />
            );
        }, this);
    },
    render: function () {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr className="info">
                    <th>Task Details</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
});

module.exports = TaskList;