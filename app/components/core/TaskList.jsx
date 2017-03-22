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
                    taskId={item.TaskId} 
                    taskName={item.Name} 
                    taskDescription={item.Description} 
                    taskPriority={item.Priority} 
                    taskStatus={item.Status}
                    taskTimerConfig={item.TimerConfig}
                    taskDeleteButtonClick={this.props.onTaskDeleteButtonClick}
                    taskEditButtonClick={this.props.onTaskEditButtonClick}
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
                        <th>Timer Config</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
                <tfoot >
                    <tr className="info">
                        <th>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Task Name" 
                                    onChange={this.props.handleNewTaskNameChange} 
                                    value={this.props.newTaskName} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="description" placeholder="Task Description" 
                                    onChange={this.props.handleNewTaskDescriptionChange}
                                    value={this.props.newTaskDescription} />
                            </div>
                        </th>
                        <th>
                            <select className="form-control" id="priority" 
                                onChange={this.props.handleNewTaskPriorityChange}
                                value={this.props.newTaskPriority}>
                                <option value=""></option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                
                            </select>

                            <div className="form-group">
                                <input type="text" className="form-control" id="taskId" 
                                    value={this.props.taskId} style={{display: "none"}} />
                            </div>
                        </th>
                        <th>
                            <select className="form-control" id="status" 
                                onChange={this.props.handleNewTaskStatusChange}
                                value={this.props.newTaskStatus}>
                                <option value=""></option>
                                <option value="Not yet started">Not yet started</option>
                                <option value="In progress">In progress</option>
                                <option value="Completed">Completed</option>
                                
                            </select>
                        </th>
                        <th>

                            
                            <input type="text" className="form-control" id="timerConfig" 
                                onChange={this.props.handleNewTimerConfigChange}
                                value={this.props.newTimerConfig} />
                        </th>
                        
                        <th><button type="button" className="btn btn-primary" onClick={this.props.onSaveButtonClick} >Save</button></th>
                    </tr>
                </tfoot>                    
            </table>
        );
    }
});

module.exports = TaskList;