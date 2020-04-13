import React from "react";

import { Grid, Header } from "semantic-ui-react";

const BlogHeader = () => {
  return (
    <div className="blog__header">
      <Grid container padded="vertically">
        <Grid.Column>
          <Header>blog</Header>
          <div className="blog__content">
            Anecdotes of Lionel Messi.Te vel eruditi alienum ponderum. Nibh
            quaeque deseruisse an his, quo ne scripta mandamus. An primis
            voluptaria ius, has cu vide meis principes, vitae commodo gloriatur
            vix ne. An erat epicurei intellegat vim, per an possit urbanitas
            definitionem.
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default BlogHeader;
