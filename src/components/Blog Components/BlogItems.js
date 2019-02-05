import React from "react";

import { Card, Image, Icon } from "semantic-ui-react";

export const BlogAlpha = ({ blog }) => {
  return (
    <Card>
      <Image
        className="blog-item-img"
        src="https://i.ytimg.com/vi/VXOeZ6TITSY/maxresdefault.jpg"
      />
      <Card.Content>
        <Card.Header>MSN 2nd Season</Card.Header>
        <Card.Meta>
          <span className="date">05/02/18</span>
        </Card.Meta>
        <Card.Description>
          A look at the MSN's second season and how solid each were
          individually.
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
