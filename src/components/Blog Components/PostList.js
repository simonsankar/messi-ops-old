import React from 'react';

import { List } from 'semantic-ui-react';
import PostItem from './PostItem';

const PostList = () => {
  return (
    <List divided relaxed>
        <PostItem post={{title:'Record 5th European Golden Boot',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'}} />
        <PostItem post={{title:'91 Goals in a Year?!?!?',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'}} />
        <PostItem post={{title:'Why a Treble season should be hailed as high as a World Cup',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'}} />
        <PostItem post={{title:'MSN: The Greatest Trio',blurb:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu'}} />
    </List>
  );
};

export default PostList;
