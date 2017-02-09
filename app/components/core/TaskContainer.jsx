'use strict';

var React = require('react');
var TaskList = require('./TaskList.jsx');
var _ = require('lodash');

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
            newTaskName: '',
            newTaskDescription: '',
            newTaskPriority: '',
            newTaskStatus: '',
            taskData: data
        };
    },
    handleNewTaskNameTextChange: function (event) {
        var value = event.target.value;

        this.setState({
            newTaskName: value
        });
    },
    handleNewTaskDescriptionTextChange: function (event) {
        var value = event.target.value;

        this.setState({
            newTaskDescription: value
        });
    },
    handleNewTaskPriorityTextChange: function (event) {
        var value = event.target.value;

        this.setState({
            newTaskPriority: value
        });
    },
    handleNewTaskStatusTextChange: function (event) {
        var value = event.target.value;

        this.setState({
            newTaskStatus: value
        });
    },
    handleAddButtonClick: function () {
        var newTask = {
            TaskId: this.generateId(),
            Name: this.state.newTaskName,
            Description: this.state.newTaskDescription,
            Priority: this.state.newTaskPriority,
            Status: this.state.newTaskStatus
        };

        var newTaskData = this.state.taskData.concat(newTask);

        this.setState({
            taskData: newTaskData,
            newTaskName: '',
            newTaskDescription: '',
            newTaskPriority: '',
            newTaskStatus: ''
        });
    },
    generateId: function () {
        var max = _.maxBy(this.state.taskData, function (d) {
            return d.TaskId;
        });

        return max.TaskId + 1;
    },
    render: function () {
        return (
            <div>
                <TaskList
                    taskData={this.state.taskData} 
                    newTaskName={this.state.newTaskName}
                    newTaskDescription={this.state.newTaskDescription}
                    newTaskPriority={this.state.newTaskPriority}
                    newTaskStatus={this.state.newTaskStatus}
                    handleNewTaskNameChange={this.handleNewTaskNameTextChange}
                    handleNewTaskDescriptionChange={this.handleNewTaskDescriptionTextChange}
                    handleNewTaskPriorityChange={this.handleNewTaskPriorityTextChange}
                    handleNewTaskStatusChange={this.handleNewTaskStatusTextChange}
                    onAddButtonClick={this.handleAddButtonClick}/>
            </div>
        );
    }
});

module.exports = TaskContainer;