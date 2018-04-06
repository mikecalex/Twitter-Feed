import React from 'react'

const Tweet = props => {
  let media = ""
  if (props.twitterMedia.media != null) {
    media = props.twitterMedia.media[0].media_url
  }

  return(
    <div>
      <div className="tweet">
        <img className="pic" src={props.tweet.user.profile_image_url} />
        <div className="NameDate">
          <h3>{props.tweet.user.name} @{props.tweet.user.screen_name} •{props.timestamp}</h3>
        </div>
        <p>{props.tweet.text}</p>
        <img src={media}></img>
        <div className="footer">
          <button type="button" className="click fa fa-reply" onClick={(event) => {alert('Reply')}} aria-hidden="true"> </button>
          <button type="button" className="click fa fa-retweet" onClick={(event) => {alert('Retweet')}} aria-hidden="true"> </button>
          <button type="button" className="click fa fa-heart" onClick={(event) => {alert('Like')}} aria-hidden="true"> </button>
          <button type="button" className="click fa fa-ellipsis-h" onClick={(event) => {alert('Favorite')}} aria-hidden="true"> </button>
        </div>
      </div>
    </div>
  )
};


export default Tweet;
