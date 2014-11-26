/** @jsx React.DOM */

var React = require('react/addons');
var TimesheetRow = require('./timesheet.row');

var TimesheetTable = React.createClass({

  getInitialState: function () {
    return {};
  },

  render: function () {
    
    var timesheetRows = this.props.timesheets.map(function (timesheet) {
      return (
        <TimesheetRow timesheet={timesheet} key={timesheet._id} />
      );
    });

    return (
      <table className="table table-bordered table-hover tsz-table-row-cursor">
        <thead>
          <tr>
            <th>Begin Date</th>
            <th>End Date</th>
            <th>Name</th>
            <th>Description</th>
            <th className="tsz-table-delete-column">Delete</th>
          </tr>
        </thead>
        <tbody>
          {timesheetRows}
        </tbody>
      </table>
    );
  }
});

module.exports = TimesheetTable;