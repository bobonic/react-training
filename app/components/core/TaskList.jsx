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
                    <tr className="success">
                        <th>Task Details</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
                <tfoot>
                    <tr className="info">
                        <th>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Task Name" 
                                    onChange={this.props.handleNewTaskNameChange} 
                                    value={this.props.newTaskName} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Task Description" 
                                    onChange={this.props.handleNewTaskDescriptionChange}
                                    value={this.props.newTaskDescription} />
                            </div>
                        </th>
                        <th>
                            <input type="text" className="form-control" id="priority" 
                                onChange={this.props.handleNewTaskPriorityChange}
                                value={this.props.newTaskPriority} />
                        </th>
                        <th>
                            <input type="text" className="form-control" id="status" 
                                onChange={this.props.handleNewTaskStatusChange}
                                value={this.props.newTaskStatus} />
                        </th>
                        <th><button type="button" className="btn btn-primary" onClick={this.props.onAddButtonClick} >Add New</button></th>
                    </tr>
                </tfoot>                    
            </table>
        );
    }
});

module.exports = TaskList;