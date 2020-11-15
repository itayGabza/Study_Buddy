import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


import './Filters.css';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <div >
        <h6>Objective</h6>
        <FormGroup col>
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG1} onChange={handleChange} name="checkedG1" />}
            label="Home Work"
          />
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG2} onChange={handleChange} name="checkedG2" />}
              label="Exam preperation"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG17} onChange={handleChange} name="checkedG17" />}
              label="Other"
            />
          </div>
        </FormGroup>
      </div>
      <div >
        <h6>Gender</h6>
        <FormGroup col>
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG1} onChange={handleChange} name="checkedG1" />}
            label="Male"
          />
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG2} onChange={handleChange} name="checkedG2" />}
              label="Female"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG17} onChange={handleChange} name="checkedG17" />}
              label="Mix"
            />
          </div>
        </FormGroup>
      </div>
      <div >
        <h6>Level</h6>
        <FormGroup col>
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG13} onChange={handleChange} name="checkedG13" />}
            label="Good"
          />
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG14} onChange={handleChange} name="checkedG14" />}
              label="Medium"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG15} onChange={handleChange} name="checkedG15" />}
              label="Bad"
            />
          </div>
        </FormGroup>
      </div>
      <div >
        <h6>Location</h6>
        <FormGroup col>
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG11} onChange={handleChange} name="checkedG11" />}
            label="Zoom"
          />
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG12} onChange={handleChange} name="checkedG12" />}
              label="Frontal"
            />
          </div>
        </FormGroup>
      </div>
      <div>
        <h6>Studying time</h6>
        <FormGroup col>
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG3} onChange={handleChange} name="checkedG3" />}
            label="Morning"
          />
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG4} onChange={handleChange} name="checkedG4" />}
              label="Noon"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG5} onChange={handleChange} name="checkedG5" />}
              label="Afternoon"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG6} onChange={handleChange} name="checkedG6" />}
              label="Evening"
            />
          </div>
        </FormGroup>
      </div>
      <div>
        <h6>Group size</h6>
        <FormGroup col>
          <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG7} onChange={handleChange} name="checkedG7" />}
            label="2"
          />
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG8} onChange={handleChange} name="checkedG8" />}
              label="3"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG9} onChange={handleChange} name="checkedG9" />}
              label="4"
            />
          </div>
          <div class="formgroup">
            <FormControlLabel
              control={<GreenCheckbox checked={state.checkedG10} onChange={handleChange} name="checkedG10" />}
              label="5+"
            />
          </div>
        </FormGroup>
      </div>
    </FormGroup>
  );
}
