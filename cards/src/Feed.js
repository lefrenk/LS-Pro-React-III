import React, { Component } from 'react';
import Card from './Card';
import './App.css';
import alien from './alien.jpg';
import person1 from './person1.png';
import person2 from './person2.png';
import comment from './comment.png';
import like from './like.png';
import ram from './ram.jpg';
import taco from './taco.jpg';
import toast from './toast.jpg';

 const posts = [
  {
    profilePic: person2,
    author: 'mothman95',
    image: taco,
    likes: '100',
    hoursAgo: '4'
  },
  {
    profilePic: person1,
    author: 'not_an_alien',
    image: alien,
    likes: '231',
    hoursAgo: '7'
  },
  {
    profilePic: person2,
    author: 'mothman95',
    image: toast,
    likes: '498',
    hoursAgo: '6'
  },
  {
    profilePic: person1,
    author: 'not_an_alien',
    image: ram,
    likes: '222',
    hoursAgo: '8'
  }
];

export default class Feed extends Component {
  render() {
    return (
      <div className='feed'>
        { posts.map((post) => {
          return <Card
          profilePic={post.profilePic} 
          author={post.author}   
          image={post.image}
          likes={post.likes}
          hoursAgo={post.hoursAgo}
        />;
        })}
      </div>
    );
  }
}
