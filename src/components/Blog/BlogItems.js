import React from "react";

import { Card, Image } from "semantic-ui-react";

export const BlogAlpha = ({ blog }) => {
  return (
    <Card fluid className="blog__item">
      <div className="blog__item__img__container">
        <Image className="blog__item__img" src={blog.img} />
      </div>
      <Card.Content>
        <Card.Header className="blog__item__header">{blog.title}</Card.Header>
        <Card.Meta>
          <span className="blog__item__date">{blog.date}</span>
        </Card.Meta>
        <Card.Description className="blog__item__desc">
          {blog.desc}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export const BlogDelta = ({ blog }) => {
  return (
    <Card fluid className="blog__item blog__item--delta">
      <Card.Content>
        <Card.Header className="blog__item__header--delta">
          {blog.title}
        </Card.Header>
        <Card.Meta>
          <span className="blog__item__date">{blog.date}</span>
        </Card.Meta>
        <Card.Description className="blog__item__desc">
          {blog.desc}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>I know more</Card.Content>
    </Card>
  );
};

export const BlogOmega = ({ blog }) => {
  return (
    <Card
      fluid
      className="blog__item blog__item--omega"
      style={{
        backgroundImage: `url(${blog.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(70%) contrast(90%)"
      }}
    >
      <Card.Content>
        <Card.Header className="blog__item__header blog__item__header--omega">
          {blog.title}
        </Card.Header>
        <Card.Meta className="blog__item__meta blog__item__meta--white">
          <span className="blog__item__date">{blog.date}</span>
        </Card.Meta>
        <Card.Description className="blog__item__desc blog__item__desc--white">
          {blog.desc}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
