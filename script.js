var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
    $.getJSON(quoteUrl, createTweet);
    $.getJSON(prefix + quoteUrl, createTweet);
    $.ajaxSetup({ cache: false });
}

function createTweet(input) {
    var data = input[0];
    var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;
    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }
    $('.tweet').attr('href', tweet);
}
if (tweetText.length > 140) {
    getQuote();
}

if (tweetText.length > 140) {
    getQuote();
} else {
    var prefix = "https://cors-anywhere.herokuapp.com/";
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $('.quote').text(quoteText);
    $('.author').text("Author: " + quoteAuthor);
    $('.tweet').attr('href', tweet);
}

$(document).ready(function () {
    getQuote();
    $('.trigger').click(function () {
        getQuote();
    })
});