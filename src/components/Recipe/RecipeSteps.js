import React, { Component } from "react";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

class Step extends Component {
  _handleStepUp = () => this.props.onStepUpClicked(this.props.step);
  _handleStepDown = () => this.props.onStepDownClicked(this.props.step);
  render() {
      const { step } = this.props;
    return (
      <ListItem>
        <ListItemText primary={step.text} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Subir" onClick={this._handleStepUp} title="Subir">
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton aria-label="Bajar" onClick={this._handleStepDown} title="Bajar">
            <ArrowDownwardIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

const RecipeSteps = () => {
  const steps = [
    {
      position: 1,
      text: "cocer....."
    },
    {
      position: 2,
      text: "Asar....."
    }
  ];
  return (
    <List>
      {steps.map(s => (
        <Step
          step={s}
          onStepUpClicked={() => {}}
          onStepDownClicked={() => {}}
        />
      ))}
    </List>
  );
};

export default RecipeSteps;
