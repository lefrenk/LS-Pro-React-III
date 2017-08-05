import React, { Component } from 'react';
import './App.css';
import alien from './alien.jpg';
import person1 from './person1.png';
import person2 from './person2.png';
import comment from './comment.png';
import like from './like.png';
import ram from './ram.jpg';
import taco from './taco.jpg';
import toast from './toast.jpg';
import ellipsis from './ellipsis.png';

const userComments = [
  {
    username: 'bad_username',
    comment: 'awesome!!'
  },

  {
    username: 'dad76',
    comment: 'yell heah B)'
  }
];

export default class Card extends Component {

  render() {
    return (
      <div className='card'>

      <div className='authorNavBar'>
        <img className='profilePic' src={this.props.profilePic} />
        <h4>{this.props.author}</h4>
      </div>

      <img className='postImage' src={this.props.image} />

      <table>
        <td>
          <button className='modifiedButton'>
            <img className='likeButton' src={like} />
          </button>
        </td>
        <td>
          <button className='modifiedButton'>
            <img className='commentButton' src={comment} />
          </button>
          </td>
      </table>

      <p className='likesCounter'>{this.props.likes} likes</p>

      <table className='commentContainer'>
        <td className='boldMe'>{userComments[0].username}</td>
        <td>{userComments[0].comment}</td>
      </table>

      <table className='commentContainer'>
        <td className='boldMe'>{userComments[1].username}</td>
        <td>{userComments[1].comment}</td>
      </table>

      <p className='makeMeTiny'>{this.props.hoursAgo} HOURS AGO</p>

      <hr color='lightgrey' size='1' />

      <textarea className='addComment'>Add a comment...</textarea>

      <button className='ellipsis'><img src={ellipsis} /></button>

      </div>
    );
  }
}
