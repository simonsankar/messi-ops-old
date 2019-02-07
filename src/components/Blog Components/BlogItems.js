import React from 'react';

import { Card, Image } from 'semantic-ui-react';
import { gray } from 'ansi-colors';

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

export const BlogDelta = ({ blog }) => {
  return (
    <Card fluid className="blog-item blog-item-delta">
      <Card.Content>
        <Card.Header>Medium Title Lorem oper dome avia cal tanai</Card.Header>
        <Card.Meta>
          <span className="date">12/02/18</span>
        </Card.Meta>
        <Card.Description>Some beautiful text for nothing</Card.Description>
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
        backgroundImage: `url('https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(60%)'
      }}
    >
      <Card.Content>
        <Card.Header className="blog-item-header blog-item-header-omega">
          The title
        </Card.Header>
        <Card.Meta className="blog-item-meta-white">
          <span className="date">29/02/19</span>
        </Card.Meta>
        <Card.Description className="blog-item-desc-white">
          Something special Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo quod voluptate molestiae adipisci. Dolorum culpa perferendis
          ea tempora. Vitae autem tempora magnam similique odio soluta doloribus
          enim placeat temporibus neque!
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
