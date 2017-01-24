'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var KanbanApplication = React.createClass({
  render: function() { 
    return <div>
    <table class="table table-bordered">
        <thead><tr  className="active"></tr><tr  className="active"></tr><tr  className="active"></tr></thead>
        <tbody>
        <tr>
          <td>
          <div className="panel panel-primary">
              <div className="panel-heading">Task 1</div>
              <div className="panel-body">Create New Class</div>
          </div>
          </td>
          <td>
          <div className="panel panel-info">
              <div className="panel-heading">Task 2</div>
              <div className="panel-body">Create New Module</div>
          </div>
          </td>
          <td>
          <div className="panel panel-success">
              <div className="panel-heading">Task 3</div>
              <div className="panel-body">Create New Component</div>
          </div>
          </td>
        </tr>
        </tbody>
    </table>
    </div>;
  }
});

ReactDOM.render(<KanbanApplication />, document.getElementById('root'));
