import React from 'react';

import { List } from 'semantic-ui-react';
import PostItem from './PostItem';

const PostList = () => {
  return (
    <List divided relaxed>
        <PostItem post={{title:'Record 5th European Golden Boot',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',img:'https://assets1.sportsnet.ca/wp-content/uploads/2018/03/messi-1040x572.jpg'}} />
        <PostItem post={{title:'91 Goals in a Year?!?!?',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',img:'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/1/4/16/enhanced-buzz-orig-8262-1357335464-4.jpg?downsize=700:*&output-format=auto&output-quality=auto'}} />
        <PostItem post={{title:'Why a Treble season should be hailed as high as a World Cup',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',img:'https://i.dailymail.co.uk/i/pix/2015/06/07/23/296E801500000578-0-image-a-35_1433717550302.jpg'}} />
        <PostItem post={{title:'MSN: The Greatest Trio',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',img:'https://myfreedo.in/img/8888129_famous%20trios%206.jpg'}} />
    </List>
  );
};

export default PostList;
