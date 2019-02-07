import React, { Component } from "react";
import _ from "lodash";

import { Grid } from "semantic-ui-react";
import { BlogAlpha, BlogOmega, BlogDelta } from "./BlogItems";

const blogs = [
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "04/02/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "04/02/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "04/02/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      " Something special Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod voluptate molestiae adipisci. Dolorum culpa perferendisea tempora. Vitae autem tempora magnam similique odio soluta doloribus enim placeat temporibus neque!"
  },
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "04/02/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  }
];

export default class BlogBody extends Component {
  renderBlogItems() {
    return blogs.map((el, index) => {
      let ran = _.random(1, 3);
      return (
        <Grid.Column stretched computer={4} tablet={5} mobile={8}>
          {ran === 1 ? (
            <BlogAlpha blog={el} />
          ) : ran === 2 ? (
            <BlogDelta blog={el} />
          ) : (
            <BlogOmega blog={el} />
          )}
        </Grid.Column>
      );
    });
  }
  render() {
    return (
      <div className="blog-body">
        <Grid container>{this.renderBlogItems()}</Grid>
      </div>
    );
  }
}
