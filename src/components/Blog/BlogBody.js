import React, { Component } from "react";
import _ from "lodash";

import { Grid } from "semantic-ui-react";
import { BlogAlpha, BlogOmega, BlogDelta } from "./BlogItems";

const blogs = [
  {
    title: "Neymar Wasted",
    date: "04/02/19",
    img:
      "http://www.footmercato.net/images/a/lionel-messi-et-neymar-sous-les-couleurs-du-barca-en-octobre-2016_244018.jpg",
    desc: "Do tell why Neymar is dumb"
  },
  {
    title: "7 Golden boots in 1 team",
    date: "04/02/19",
    img: "https://i.redd.it/ojps0cgfro301.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "El Capitan",
    date: "14/02/19",
    img: "https://i.ytimg.com/vi/zm-jzZ4KikE/maxresdefault.jpg",
    desc:
      " Voluptate molestiae adipisci. Dolorum culpa perferendisea tempora. Vitae autem tempora magnam similique odio soluta doloribus enim placeat temporibus neque!"
  },
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "01/03/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "Messi & Suarez best friends",
    date: "10/02/19",
    img:
      "https://gmsrp.cachefly.net/images/17/10/30/849e703457835edac2ffef82540c30ad/960.jpg",
    desc: "What a great partnership, trying not to sound emotional."
  },
  {
    title: "Neymar Wasted",
    date: "04/02/19",
    img:
      "http://www.footmercato.net/images/a/lionel-messi-et-neymar-sous-les-couleurs-du-barca-en-octobre-2016_244018.jpg",
    desc: "Do tell why Neymar is dumb"
  },
  {
    title: "7 Golden boots in 1 team",
    date: "04/02/19",
    img: "https://i.redd.it/ojps0cgfro301.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "El Capitan",
    date: "14/02/19",
    img: "https://i.ytimg.com/vi/zm-jzZ4KikE/maxresdefault.jpg",
    desc:
      " Voluptate molestiae adipisci. Dolorum culpa perferendisea tempora. Vitae autem tempora magnam similique odio soluta doloribus enim placeat temporibus neque!"
  },
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "01/03/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "Messi & Suarez best friends",
    date: "10/02/19",
    img:
      "https://gmsrp.cachefly.net/images/17/10/30/849e703457835edac2ffef82540c30ad/960.jpg",
    desc: "What a great partnership, trying not to sound emotional."
  },
  {
    title: "Neymar Wasted",
    date: "04/02/19",
    img:
      "http://www.footmercato.net/images/a/lionel-messi-et-neymar-sous-les-couleurs-du-barca-en-octobre-2016_244018.jpg",
    desc: "Do tell why Neymar is dumb"
  },
  {
    title: "7 Golden boots in 1 team",
    date: "04/02/19",
    img: "https://i.redd.it/ojps0cgfro301.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "El Capitan",
    date: "14/02/19",
    img: "https://i.ytimg.com/vi/zm-jzZ4KikE/maxresdefault.jpg",
    desc:
      " Voluptate molestiae adipisci. Dolorum culpa perferendisea tempora. Vitae autem tempora magnam similique odio soluta doloribus enim placeat temporibus neque!"
  },
  {
    title: "Most Complete Player in the Attacking 3rd",
    date: "01/03/19",
    img:
      "https://gq-images.condecdn.net/image/wzkxZ5zwLK1/crop/1620/f/lionel-messi-gq-14feb18_getty_b.jpg",
    desc:
      "Lorem ipsum crazy nothingness I dont know what else to do but type random crap"
  },
  {
    title: "Messi & Suarez best friends",
    date: "10/02/19",
    img:
      "https://gmsrp.cachefly.net/images/17/10/30/849e703457835edac2ffef82540c30ad/960.jpg",
    desc: "What a great partnership, trying not to sound emotional."
  }
];

export default class BlogBody extends Component {
  renderBlogItems() {
    return blogs.map((el, index) => {
      let r = _.random(1, 5);
      let ran = (index + r) % 3;
      return (
        <Grid.Column stretched computer={4} tablet={5} mobile={16} key={index}>
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
      <div className="blog">
        <Grid container padded="vertically">
          {this.renderBlogItems()}
        </Grid>
      </div>
    );
  }
}
