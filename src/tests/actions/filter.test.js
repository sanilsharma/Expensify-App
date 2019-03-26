import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

describe("should generate set text action object", () => {
  test("with provided text", () => {
    const text = "Rent";
    const action = setTextFilter(text);
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text
    });
  });

  test("with default value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
      type: "SET_TEXT_FILTER",
      text: ""
    });
  });
});

test("should generate action object for sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should generate action object for sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
