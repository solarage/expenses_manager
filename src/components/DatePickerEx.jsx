import React from 'react';
import DatePicker from 'material-ui/DatePicker';

import moment from 'moment/moment';


class DatePickerEx extends React.Component {
  constructor(props) {
    super(props);
  
    const minDate = new Date();
    const maxDate = new Date();
    const ymdMinDate = this.formatDate(minDate);
    const ymdMaxDate = this.formatDate(maxDate);


    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };
  }

  formatDate = (date) => { 
    return moment(date).format('YYYY-MM-DD')
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };


  render() {
    console.log('from',this.state.minDate);
    console.log('to',this.state.maxDate);
    return (
      <div>
          <DatePicker
            className="datePickerEx"
            onChange={this.handleChangeMinDate}
            floatingLabelText="From"
            defaultDate={this.state.minDate}
            formatDate={ (date) => { return moment(date).format('DD-MM-YYYY') }}
          />
          <DatePicker
            className="datePickerEx"
            onChange={this.handleChangeMaxDate}
            floatingLabelText="To"
            defaultDate={this.state.maxDate}
            formatDate={ (date) => { return moment(date).format('DD-MM-YYYY') }}
          />
      </div>
    );
  }
}

export default DatePickerEx