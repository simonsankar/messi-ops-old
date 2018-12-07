import React from 'react';
import { Link } from 'react-router-dom';

import { List, Image, Grid, Responsive } from 'semantic-ui-react';

const PostItem = ({ post }) => {
  return (
    <List.Item key={post.title}>
      <List.Content>
        <Grid>
          <Grid.Row columns={2} verticalAlign="middle">
            <Grid.Column width={6}>
              <Image
                className="post-img"
                src="https://assets1.sportsnet.ca/wp-content/uploads/2018/03/messi-1040x572.jpg"
                fluid
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Link className="post-title" to="/">
                {post.title}
              </Link>
              <List.Description className="post-blurb">
                {post.blurb}
                <div>
                  <Link to="/" className="post-readmore">
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
