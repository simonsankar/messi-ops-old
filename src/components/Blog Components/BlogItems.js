import React from "react";

import { Card, Image } from "semantic-ui-react";

export const BlogAlpha = ({ blog }) => {
  return (
    <Card fluid className="blog-item">
      <div className="blog-item-img-container">
        <Image
          className="blog-item-img"
          src="https://i.ytimg.com/vi/VXOeZ6TITSY/maxresdefault.jpg"
        />
      </div>
      <Card.Content>
        <Card.Header className="blog-item-header">
          A very long and unecessary title
        </Card.Header>
        <Card.Meta>
          <span className="date">05/02/18</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc">
          A look at the MSN's second season and how solid each were
          individually.
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
export const BlogAlpha2 = ({ blog }) => {
  return (
    <Card fluid className="blog-item">
      <div className="blog-item-img-container">
        <Image
          className="blog-item-img"
          src="https://static01.nyt.com/images/2015/05/07/sports/07SOCCER/07SOCCER-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        />
      </div>

      <Card.Content>
        <Card.Header className="blog-item-header">Short Title</Card.Header>
        <Card.Meta>
          <span className="date">06/03/18</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc">
          Little back lift
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
export const BlogDelta = ({ blog }) => {
  return (
    <Card fluid className="blog-item">
      <Card.Content>
        <Card.Header className="blog-item-header">Medium Title</Card.Header>
        <Card.Meta>
          <span className="date">12/02/18</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc">
          Some beautiful text for nothing
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
export const BlogOmgea = ({ blog }) => {
  return (
    <Card fluid className="blog-item">
      <div className="blog-item-img-container">
        <Image
          className="blog-item-img"
          src="https://static01.nyt.com/images/2015/05/07/sports/07SOCCER/07SOCCER-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        />
      </div>

      <Card.Content>
        <Card.Header className="blog-item-header">Short Title</Card.Header>
        <Card.Meta>
          <span className="date">06/03/18</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc">
          Little back lift
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
