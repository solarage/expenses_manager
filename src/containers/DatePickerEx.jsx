import React from 'react';
import { connect } from 'react-redux';
import { updateFilterFieldFrom, updateFilterFieldTo } from '../actions/actions';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment/moment';

const datePickerStyle = {
  display: 'flex',
  justifyContent: 'center',
  
}

 class DatePickerEx extends React.Component {
  constructor(props) {
    super(props);
  
    const minDate = this.props.filterFieldState.from;
    const maxDate = this.props.filterFieldState.to;

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };

  }

  formatDate= (date) => { 
    return moment(date).format('YYYY-MM-DD')
  }

  handleChangeMinDate = (event, date) => {
    let newMinDate = date;
    this.setState({
      minDate: newMinDate,
    });
    this.props.dispatch(updateFilterFieldFrom(newMinDate))
  };

  handleChangeMaxDate = (event, date) => {
    let newMaxDate = date;
    this.setState({
      maxDate: newMaxDate,
    });
    this.props.dispatch(updateFilterFieldTo(newMaxDate))
  };
  

  render() {

    return (
      <div style={datePickerStyle}>
          <DatePicker
            className="datePickerEx"
            onChange={this.handleChangeMinDate}
            floatingLabelText="From"
            defaultDate={new Date(this.state.minDate)}
            formatDate={ (date) => { return moment(date).format('DD-MM-YYYY') }}
          />
          <DatePicker
            className="datePickerEx"
            onChange={this.handleChangeMaxDate}
            floatingLabelText="To"
            defaultDate={new Date(this.state.maxDate)}
            formatDate={ (date) => { return moment(date).format('DD-MM-YYYY') }}
          />
      </div>
    );
  }
}

export default connect()(DatePickerEx);