import React from "react";
import Grid from '@material-ui/core/Grid';
import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: "light grey"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

const Section = () => (
  <section style={styles.sectionStyles} className="section">
    <h2>Test Your Memory. Score points by click on an image.</h2>
    <p><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></p>
    <p><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></p>
    <p><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></p>
    
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
    </p>
    <p>
    <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
         <div><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></div>
         <div><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></div>
         <div><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></div>
         <div><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></div>
         <div><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></div>
         <div><img src="https://via.placeholder.com/150" alt="..." class="img-thumbnail"></img></div>
         <div>hello</div>
         <div>hello</div>
          </Grid>
          </p>
  </section>
);

export default Section;
