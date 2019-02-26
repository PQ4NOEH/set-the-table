import React from "react";

import { TextField, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"

class MealSelector extends React.Component {
  state = {};
  _handleMealSelectChange = e => {
    this.setState({ selectedMeal: e.target.value });
  };
  _handleButtonClick = () => {
    this.props.onClick(this.state.selectedMeal);
  };
  _isButtonEnabled = () => {
    return this.state.selectedMeal;
  };
  render() {
    const avalaibleOptions = [
      "Comida",
      "Almuerzo",
      "Comida",
      "Merienda",
      "Cena"
    ];
    return (
      <div>
        <TextField 
            id="mealSelect" 
            select 
            onChange={this._handleMealSelectChange}
            value={this.state.selectedMeal}
            style={{width: "13em"}}
            >
          <option key={-1} value={0} />
          {avalaibleOptions.map((o, i) => (
            <option key={i} value={o}>
              {o}
            </option>
          ))}
        </TextField>
        <IconButton
          aria-label="agregar comida"
          onClick={this._handleButtonClick}
          disabled={!this._isButtonEnabled()}
        >
          <AddIcon />
        </IconButton>
      </div>
    );
  }
}

export default MealSelector;
