import Twitter from 'twitter';
// import { timeout } from '../../node_modules/@types/async';

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// client.get('statuses/update', function(error, tweets, response) {
//   if(error) {
//     throw error;
//   }
//   console.log(tweets);  // Tweet body
//   console.log(response);
// });
let tweetTotal = 0;

let tweetSet = [];

setInterval(() => {
  console.log(tweetSet);
}, 10000);

client.stream('statuses/filter', { track: 'livepd' }, function(stream) {
  stream.on('data', function(tweet) {
    let user = {
      id: tweet.id,
      name: tweet.user.name,
      desc: tweet.user.description,
      date: tweet.created_at,
      text: tweet.text,
    };

    tweetSet.push({ user });
    tweetTotal++;
    console.log(`The total tweet count is ${tweetSet.length}.`);
    // console.log({ ...tweet });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

export default client;
