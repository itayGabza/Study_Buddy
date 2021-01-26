import './SelectedBar.scss'
import React from "react";
import Select from "react-select";

const options = [
    { value: "Food", label: "Food", isDisabled: true },
    { value: "Being Fabulous", label: "Being Fabulous" },
    { value: "Ken Wheeler", label: "Ken Wheeler" },
    { value: "ReasonML", label: "ReasonML" },
    { value: "Unicorns", label: "Unicorns" },
    { value: "Kittens", label: "Kittens" }
  ];
  
  class SelectedBar extends Component {
    state = {
      values: []
    };
  
    handleChange = (values) => {
      this.setState({
        values
      });
    };
    AddToList = (value) => {
      this.setState({
        values: [...this.state.values, value]
      });
      console.log(this.state.values);
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
          />
          <div className="selected-options">
          {values.length > 0 && values.map((item) => <p>{item.label}</p>)}
        </div>
        <button
          onClick={() => this.AddToList({ value: "BigData", label: "BigData" })}
        >
          {"BigData"}
        </button>

        <button
          onClick={() =>
            this.AddToList({
              value: "ML",
              label: "ML"
            })
          }
        >
          {"ML"}
        </button>
        </div>
      );
    }
  }
  
  export default SelectedBar;
  