import React, { Component } from "react";
import Select from "react-select";
import "./Filters.css";
import colourStyles from "./FiltesStyle.js";
// import { filter, findWhere,} from "underscore";
import "bootstrap/dist/css/bootstrap.css";
const options = [
  { value: "homeWork", label: "שיעורי בית", column: "1", color: 'red', query: 'studyingFor' },
  { value: "test", label: "למידה למבחן", column: "1", color: 'red', query: 'studyingFor' },
  { value: "other", label: "אחר", column: "1", color: 'red', query: 'studyingFor' },
  { value: "male", label: "גבר", column: "2", color: 'orange', query: 'gender' },
  { value: "female", label: "אישה", column: "2", color: 'orange', query: 'gender' },
  { value: "mix", label: "תביאו לי הכל מהכל", column: "2", color: 'orange', query: 'gender' },
  { value: "good", label: "טוב", column: "3", color: 'yellow', query: 'studyLevel' },
  { value: "medium", label: "בינוני", column: "3", color: 'yellow', query: 'studyLevel' },
  { value: "bad", label: "מתקשה", column: "3", color: 'yellow', query: 'studyLevel' },
  { value: "zoom", label: "זום", column: "4", color: 'green', query: 'studyMethod' },
  { value: "frontal", label: "פנים מול פנים", column: "4", color: 'green', query: 'studyMethod' },
  { value: "morning", label: "בבוקר", column: "5", color: 'lime', query: 'studyTime' },
  { value: "noon", label: "בצהריים", column: "5", color: 'lime', query: 'studyTime' },
  { value: "afterNoon", label: "אחר הצהריים", column: "5", color: 'lime', query: 'studyTime' },
  { value: "evening", label: "בערב", column: "5", color: 'lime', query: 'studyTime' },
  { value: "2", label: "2", column: "6", color: 'olivedrab', query: 'groupSize' },
  { value: "3", label: "3", column: "6", color: 'olivedrab', query: 'groupSize' },
  { value: "4", label: "4", column: "6", color: 'olivedrab', query: 'groupSize' },
  { value: "5Plus", label: "5+", column: "6", color: 'olivedrab', query: 'groupSize' }
];

class Filters extends Component {
  constructor(props) {
    super(props);
    this.columnsToDisplay = this.columnsToDisplay.bind(this);
    this.changeStudyRequstQuery = this.props.changeStudyRequstQuery;
    this.sentFromStudyRequest = this.props.sentFromStudyRequest;

    this.state = {
      columnsToRender: [true, true, true, true, true, true], // change to amount of columns
      values: [],
      buttonsToRender: options

    };
  }
  comparer = (otherArray) => {
    return function (current) {
      return (
        otherArray.filter(function (other) {
          return other.value === current.value && other.label === current.label;
        }).length === 0
      );
    };
  };
  countColumns = (options) => {
    var columns = {},
      e;
    for (var i = 0, l = options.length; i < l; i++) {
      e = options[i];
      columns[e.column] = (columns[e.column] || 0) + 1;
    }
    return columns;
  };

  columnsToDisplay = (options, buttonsToRender) => {
    var countOptions = this.countColumns(options);
    var countButtonToRender = this.countColumns(buttonsToRender);
    var columnsToRenderLocal = [];
    var a, b;
    for (var i = 1, l = Object.keys(countOptions).length; i <= l; i++) {
      a = countOptions[i];
      b = countButtonToRender[i];
      if (a !== b) {
        columnsToRenderLocal.push(false);
      } else {
        columnsToRenderLocal.push(true);
      }
    }
    this.setState({
      columnsToRender: columnsToRenderLocal
    });
  };

  handleChange = (values) => {
    this.setState({
      values: values,
      buttonsToRender: options.filter(this.comparer(values))
    });
    this.columnsToDisplay(options, options.filter(this.comparer(values)));

    this.getFilters(values);


  };
  getFilters = (values) => {
    var str = [];
    var filtersDictsArray = []
    for (var i = 0; i < values.length; ++i) {
      console.log(values[i])
      str.push(values[i]['query'] + "=" + values[i]['value']);
      filtersDictsArray.push({
        key:values[i]['query'],
        value:values[i]['value']
      })
    }
    var query = str.join("&")
    if (!this.sentFromStudyRequest) {
      if (query !== '') {
        this.changeStudyRequstQuery('/filters?'.concat(query))
      }
      else {
        this.changeStudyRequstQuery('')
      }
    }
    else{
      this.changeStudyRequstQuery(query)
    }
  }


  addToList = (value) => {
    this.setState({
      values: [...this.state.values, value]
    });
    this.handleChange([...this.state.values, value]);

  };
  render() {
    const { values } = this.state;
    return (
      <div>
        <Select
          hideSelectedOptions={true}
          isMulti
          options={options}
          onChange={this.handleChange}
          value={values}
          isSearchable={false}
          openMenuOnClick={false}
          menuIsOpen={false}
          placeholder=''
          styles={colourStyles}

        />
        {/* <div className="selected-options">
          {values.length > 0 && values.map((item) => <p>{item.label}</p>)}
        </div> */}

        <div class="container" className="gridDesign">
          <div class="row " className={this.sentFromStudyRequest ? 'rowFilterPost' : 'rowFilter'}>
            {this.state.columnsToRender[0] === true ? (
              <div class="col-sm-2">
                <a>{"סוג"}</a>
                <br></br>
                {this.state.buttonsToRender.map((item, i) =>
                  item.column === "1" ? (
                    <div class="mb-2">
                      <button href="#" onClick={() => this.addToList(item)}>
                        {item.label}
                      </button>
                    </div>
                  ) : (
                      <div></div>
                    )
                )}
              </div>
            ) : null}
            {this.state.columnsToRender[1] === true ? (
              <div class="col-sm-2">
                <a>{"מגדר"}</a>
                <br></br>
                {this.state.buttonsToRender.map((item, i) =>
                  item.column === "2" ? (
                    <div class="mb-2 ">
                      <button href="#" onClick={() => this.addToList(item)}>
                        {item.label}
                      </button>
                    </div>
                  ) : (
                      <div></div>
                    )
                )}
              </div>
            ) : null}
            {this.state.columnsToRender[2] === true ? (
              <div class="col-sm-2">
                <a>{"רמת שליטה בחומר"}</a>
                <br></br>
                {this.state.buttonsToRender.map((item, i) =>
                  item.column === "3" ? (
                    <div class="mb-2 ">
                      <button href="#" onClick={() => this.addToList(item)}>
                        {item.label}
                      </button>
                    </div>
                  ) : (
                      <div></div>
                    )
                )}
              </div>
            ) : null}
            {this.state.columnsToRender[3] === true ? (
              <div class="col-sm-2">
                <a>{"סביבת הלמידה"}</a>
                <br></br>
                {this.state.buttonsToRender.map((item, i) =>
                  item.column === "4" ? (
                    <div class="mb-2">
                      <button href="#" onClick={() => this.addToList(item)}>
                        {item.label}
                      </button>
                    </div>
                  ) : (
                      <div></div>
                    )
                )}
              </div>
            ) : null}
            {this.state.columnsToRender[4] === true ? (
              <div class="col-sm-2">
                <a>{"זמן מועדף ללמידה"}</a>
                <br></br>
                {this.state.buttonsToRender.map((item, i) =>
                  item.column === "5" ? (
                    <div class="mb-2">
                      <button href="#" onClick={() => this.addToList(item)}>
                        {item.label}
                      </button>
                    </div>
                  ) : (
                      <div></div>
                    )
                )}
              </div>
            ) : null}
            {this.state.columnsToRender[5] === true ? (
              <div class="col-sm-2">
                <a>{"כמות שותפים"}</a>
                <br></br>
                {this.state.buttonsToRender.map((item, i) =>
                  item.column === "6" ? (
                    <div class="mb-2">
                      <button href="#" onClick={() => this.addToList(item)}>
                        {item.label}
                      </button>
                    </div>
                  ) : (
                      <div></div>
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Filters;
