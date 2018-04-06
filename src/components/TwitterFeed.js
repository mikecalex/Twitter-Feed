import React from 'react';
import Tweet from './Tweet'

const TwitterFeed = props => {

  let tweets = props.data.map(tweet => {
    let time = parseInt(tweet.timestamp_ms)
    let timestamp = new Date(time)
    let timeString = timestamp.toString().substring(3,10)

    return(
      <Tweet
        key={tweet.id_str}
        tweet={tweet}
        timestamp={timeString}
        twitterMedia={tweet.entities}
      />
    );
  })

  return(
    <div>
      {tweets}
    </div>
  )

}
export default TwitterFeed;
