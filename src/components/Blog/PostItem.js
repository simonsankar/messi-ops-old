import React from "react";
import { Link } from "react-router-dom";

import { List, Image, Grid, Responsive } from "semantic-ui-react";

const PostItem = ({ post }) => {
  return (
    <List.Item key={post.title}>
      <List.Content>
        <Grid>
          <Grid.Row columns={2} verticalAlign="middle">
            <Responsive
              as={Grid.Column}
              width={6}
              minWidth={Responsive.onlyComputer.minWidth}
            >
              <div className="post__img-container">
                <Image className="post__img" src={post.img} fluid />
              </div>
              <span className="post__img-overlay" />
            </Responsive>
            <Grid.Column computer={10} tablet={16} mobile={16}>
              <Link className="post__title" to="/">
                {post.title}
              </Link>
              <List.Description className="post__blurb">
                {post.blurb}
                <div>
                  <Link to="/" className="post__readmore">
                    Read More
                  </Link>
                </div>
              </List.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Content>
    </List.Item>
  );
};

export default PostItem;
