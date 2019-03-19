import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";
import uuid from "uuid";

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter to search"
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } else if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            }
          }}
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDateId={uuid()}
          startDate={this.props.filters.startDate}
          endDateId={uuid()}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
