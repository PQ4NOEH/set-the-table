import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";

import { TextField, FormGroup, IconButton } from "@material-ui/core";

const styles = theme => ({
  measureSelect: {
    marginTop: "1em",
    marginLeft: "0.5em"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class RecipeStepInput extends Component {
  state = {
    step: ""
  };
  _buttonEnabled = () => this.state.step && this.state.step.length > 3;
  _handleFormChanged = field =>(e)=>{ 
    this.setState({ [field]: e.target.value });  
  }
  _handleButtonClick = () => {
    this.setState({ step: "" });
    this.props.onClick(this.state.step);
  };
  render() {
    const { classes } = this.props;
    return (
      <FormGroup row={true}>
        <TextField
          id="stepDescription"
          label="Paso"
          style={{ margin: 8, width: "30em" }}
          placeholder="Paso"
          multiline
          margin="normal"
          variant="outlined"
          onChange={this._handleFormChanged("step")}
          value={this.state.step}
          InputLabelProps={{
            shrink: true
          }}
        />
        <IconButton
          className={classes.button}
          aria-label="agregar paso"
          onClick={this._handleButtonClick}
          disabled={!this._buttonEnabled()}
        >
          <AddIcon />
        </IconButton>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(RecipeStepInput);
