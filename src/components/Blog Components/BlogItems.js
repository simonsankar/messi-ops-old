import React from "react";

import { Card, Image } from "semantic-ui-react";

export const BlogAlpha = ({ blog }) => {
  return (
    <Card fluid className="blog-item">
      <div className="blog-item-img-container">
        <Image className="blog-item-img" src={blog.img} />
      </div>
      <Card.Content>
        <Card.Header className="blog-item-header">{blog.title}</Card.Header>
        <Card.Meta>
          <span className="date">{blog.date}</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc">
          {blog.desc}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export const BlogDelta = ({ blog }) => {
  return (
    <Card fluid className="blog-item blog-item-delta">
      <Card.Content>
        <Card.Header className="blog-item-header-delta">
          {blog.title}
        </Card.Header>
        <Card.Meta>
          <span className="date">{blog.date}</span>
        </Card.Meta>
        <Card.Description>{blog.desc}</Card.Description>
      </Card.Content>
      <Card.Content extra>I know more</Card.Content>
    </Card>
  );
};
export const BlogOmega = ({ blog }) => {
  return (
    <Card
      fluid
      className="blog-item blog-item-omega"
      style={{
        backgroundImage: `url(${blog.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(70%)"
      }}
    >
      <Card.Content>
        <Card.Header className="blog-item-header blog-item-header-omega">
          {blog.title}
        </Card.Header>
        <Card.Meta className="blog-item-meta-white">
          <span className="date">{blog.date}</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc-white">
          {blog.desc}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
