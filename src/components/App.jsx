import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { addReminder, deleteReminder, clearReminder } from '../actions/index';
import '../css/App.css';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }
  addReminder = () => {
    this.props.addReminder(this.state.text, this.state.dueDate);
      console.log(this.props);
  }
  deleteReminder (id) {
    this.props.deleteReminder(id);
  }
  clearReminder = () => {
    this.props.clearReminder();
  }
  render () {
    const self= this;
    return (
      <div className='app'>
        <div className='app-title'> Reminder Pro</div>
        <div className='form-inline'>
          <div className='form-grp'>
            <input
              className='form-control'
              placeholder='I have to ..'
              type='text'
              onChange={event => this.setState({text: event.target.value})}
            />
            <input
              className='form-control'
              placeholder='I have to ..'
              type='datetime-local'
              onChange={event => this.setState({dueDate: event.target.value})}
            />
            <button
              type='button'
              className='btn btn-primary'
              onClick={this.addReminder}
            >
            Add Reminder
            </button>
            <button
              type='button'
              className='btn btn-danger'
              onClick={this.clearReminder}
            >
            Clear Reminder
            </button>
          </div>
          <div className='list-group col-sm-4'></div>
          <ul className='list-group col-sm-4'>
            {
              this.props.reminders.map(function(reminder){
                return (
                  <li key={reminder.id} className='list-group-item row'>
                    <div className='col-sm-8 list-item'>{reminder.text} <em><b>{moment(new Date(reminder.dueDate)).fromNow()}</b></em></div>
                    <div className='col-sm-4 list-delete-item' onClick={() => self.deleteReminder(reminder.id)}>&#x2715;</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  };
};

function mapDispatchToProps (dispatch){
  return bindActionCreators({addReminder, deleteReminder, clearReminder}, dispatch);
}
function mapStateToProps (state) {
  console.log(state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
