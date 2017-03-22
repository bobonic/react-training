'use strict';

var React = require('react');
var TaskList = require('./TaskList.jsx');
var _ = require('lodash');

var data = [
    { 
        TaskId: 1, 
        Name: 'Task 1',
        Description: 'Add Login Page',
        Priority: 'Low',
        Status: 'Not yet started',
        TimerConfig: 15
    },
    { 
        TaskId: 2, 
        Name: 'Task 2',
        Description: 'Add User Profile Admin',
        Priority: 'Medium',
        Status: 'Not yet started',
        TimerConfig: 12
    },
    { 
        TaskId: 3, 
        Name: 'Task 3',
        Description: 'Edit User Profile Admin',
        Priority: 'High',
        Status: 'Not yet started',
        TimerConfig: 14

    }
];

var TaskContainer = React.createClass({
    getInitialState: function () {
        return {
            newTaskName: '',
            newTaskDescription: '',
            newTaskPriority: '',
            newTaskStatus: '',
            newTimerConfig: '',
            taskId: 0,
            editMode: '0',
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
    handleNewTimerConfigTextChange: function (event) {
        var value = event.target.value;

        this.setState({
            newTimerConfig: value
        });
    },
    handleEditTaskRow: function( taskId ) {

        var curRow = _.find(this.state.taskData, function(obj) {
            return obj.TaskId === taskId;
        });
        
        this.setState( {editMode: '1'} );

        this.setState({
            taskId: curRow.TaskId,
            newTaskName: curRow.Name,
            newTaskDescription: curRow.Description,
            newTaskPriority: curRow.Priority,
            newTaskStatus: curRow.Status,
            newTimerConfig: curRow.TimerConfig
        });
    },
    handleDeleteTaskRow: function( taskId ) {
        var index = _.findIndex(this.state.taskData, { TaskId: taskId });
        this.state.taskData.splice( index, 1 );	
        this.setState( {taskData: this.state.taskData} );
    },
    handleSaveButtonClick: function () {
        
        if (this.state.editMode == '1')
        {
            var index = _.findIndex(this.state.taskData, { TaskId: this.state.taskId });
            this.state.taskData.splice( index, 1 );	
            this.setState( {taskData: this.state.taskData} );
            
            var newTask = {
                TaskId: this.state.taskId,
                Name: this.state.newTaskName,
                Description: this.state.newTaskDescription,
                Priority: this.state.newTaskPriority,
                Status: this.state.newTaskStatus,
                TimerConfig: this.state.newTimerConfig,
            };

            var newTaskData = this.state.taskData.concat(newTask);

        }
        else
        {
            var newTask = {
                TaskId: this.generateId(),
                Name: this.state.newTaskName,
                Description: this.state.newTaskDescription,
                Priority: this.state.newTaskPriority,
                Status: this.state.newTaskStatus,
                TimerConfig: this.state.newTimerConfig
            };

            var newTaskData = this.state.taskData.concat(newTask);
        }
            this.setState({
                taskData: newTaskData,
                taskId: 0,
                newTaskName: '',
                newTaskDescription: '',
                newTaskPriority: '',
                newTaskStatus: '',
                newTimerConfig: '',
                editMode: '0'
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
                    taskId={this.state.taskId}
                    newTaskName={this.state.newTaskName}
                    newTaskDescription={this.state.newTaskDescription}
                    newTaskPriority={this.state.newTaskPriority}
                    newTaskStatus={this.state.newTaskStatus}
                    newTimerConfig={this.state.newTimerConfig}
                    handleNewTaskNameChange={this.handleNewTaskNameTextChange}
                    handleNewTaskDescriptionChange={this.handleNewTaskDescriptionTextChange}
                    handleNewTaskPriorityChange={this.handleNewTaskPriorityTextChange}
                    handleNewTaskStatusChange={this.handleNewTaskStatusTextChange}
                    handleNewTimerConfigChange={this.handleNewTimerConfigTextChange}
                    onSaveButtonClick={this.handleSaveButtonClick}
                    onTaskDeleteButtonClick={this.handleDeleteTaskRow}
                    onTaskEditButtonClick={this.handleEditTaskRow}
                    editMode={this.state.editMode}
                    />
            </div>
        );
    }
});

module.exports = TaskContainer;