'use strict';

var React = require('react');

var TaskListItem = React.createClass({
    propTypes: {
        taskName: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <tr>
                <td scope="row">{this.props.taskName}: {this.props.taskDescription}</td>
                <td>{this.props.taskPriority}</td>
                <td>{this.props.taskStatus}</td>
            </tr>
        );
    }
});

module.exports = TaskListItem;