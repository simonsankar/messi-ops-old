import React from "react";

import { Card, Image, Icon } from "semantic-ui-react";

export const BlogAlpha = ({ blog }) => {
  return (
    <Card className="blog-item">
      <Image
        className="blog-item-img"
        src="https://i.ytimg.com/vi/VXOeZ6TITSY/maxresdefault.jpg"
      />
      <Card.Content>
        <Card.Header className="blog-item-header">
          A very long and unecessary title
        </Card.Header>
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
