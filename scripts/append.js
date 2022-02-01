const createTweetElement = function() {
  let $tweet = (`
    <p>Hello World</p>`);
return $tweet;
};

// helper function to render just the newest tweet
const renderNewTweet = function() {
  $('#tweets-container').append(createTweetElement(newestTweet));
};

$(document).ready(function() {
  return renderNewTweet();
});