'use strict';

var React = require('react');
var TaskList = require('./TaskList.jsx');

var data = [
    { 
        TaskId: 1, 
        Name: 'Task 1',
        Description: 'Add Login Page',
        Priority: 1,
        Status: 1
    },
    { 
        TaskId: 2, 
        Name: 'Task 2',
        Description: 'Add User Profile Admin',
        Priority: 2,
        Status: 1
    },
    { 
        TaskId: 3, 
        Name: 'Task 3',
        Description: 'Edit User Profile Admin',
        Priority: 3,
        Status: 1
    }
];

var TaskContainer = React.createClass({
    getInitialState: function () {
        return {
            taskData: data
        };
    },
    render: function () {
        return (
            <div>
                <TaskList
                    taskData={this.state.taskData} />
            </div>
        );
    }
});

module.exports = TaskContainer;