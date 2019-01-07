import React, { Component } from "react";

import { Grid, Header } from "semantic-ui-react";

class BlogHeader extends Component {
  render() {
    return (
      <div className="blog-header">
        <Grid container>
          <Grid.Column>
            <Header>blog</Header>
            <div className="blog-content">
              Anecdotes of Lionel Messi.Te vel eruditi alienum ponderum. Nibh
              quaeque deseruisse an his, quo ne scripta mandamus. An primis
              voluptaria ius, has cu vide meis principes, vitae commodo
              gloriatur vix ne. An erat epicurei intellegat vim, per an possit
              urbanitas definitionem.
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default BlogHeader;
