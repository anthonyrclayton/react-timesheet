/** @jsx React.DOM */

var React = require('react/addons');
var Router = require('react-router');

var TimesheetForm = require('./timesheet.form');
var TimeunitTable = require('./timeunits/timeunit.table');

var TimesheetDetail = React.createClass({

  getInitialState: function () {
    return {
      saveText: 'Update'
    };
  },

  save: function () {

  },

  cancel: function () {
    Router.transitionTo('timesheets');
  },

  componentDidMount: function () {
    
  },

  render: function () {
    return (
      <div className="tsz-timesheet-detail">
        <div>
          <div className="row">
            <div className="col-xs-12">
              <TimesheetForm timesheet={this.props.timesheet} save={this.save} cancel={this.cancel} />
            </div>
          </div>

          <div className="row">
            <hr/>
          </div>

          <div tsz-form-section-header header="Time Units">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-8 pull-right">
                <button type="button" className="btn btn-primary btn-block" onClick={this.logTime}>Log Time</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="tsz-responsive-table-container">
                <TimeunitTable timeunits={this.props.timesheet.timeunits} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TimesheetDetail;