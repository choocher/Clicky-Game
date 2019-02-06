import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "Grey"
  },
  headingStyle: {
    fontSize: 100
  }
};



// We use JSX curly braces to evaluate the style object

class Header extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleButtonClick = () => {
    console.log ("works")
  }

  render(){
    const { classes } = this.props;
    const { spacing } = this.state;
    return(
      <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Clicky Game</h1>
      <Button onClick={this.handleButtonClick} variant="contained" color="primary">
        Hello World
      </Button>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
         <div>hello</div>
         <div>hello</div>
         <div>hello</div>
          </Grid>
  
    </header>
    )
  }
}



export default Header;
