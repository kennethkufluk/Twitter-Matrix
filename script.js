var list = 'team';
var listOwner = 'twitter';
var imageSrc = "twitter_newbird_blue.png";
var CHARSIZE = 20;

var tweets;
var BG_VISIBILITY = 0.8;
var gridWidth;
var gridHeight;
var grid = [];
var $grid;

$(function() {
  $.getJSON('https://api.twitter.com/1/lists/statuses.json?slug='+list+'&owner_screen_name='+listOwner+'&per_page=100&callback=?', function(data) {
    tweets = data;
    start();
  });
});

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function start() {
  var gridEl = document.getElementById('grid');
  createGrid();
  createOpacityFilter();
  var frameCount = 0;
  (function animloop(){
    frameCount++;
    if (frameCount % 2 == 1) {
      updateGrid();
    }
    if (frameCount % 100 == 1) {
      showNextTweet();
    }
    requestAnimFrame(animloop, gridEl);
  })();
}

function createGrid() {
  $grid = $('#grid');
  $grid.css({
    "font-size":CHARSIZE+'px'
  });
  gridWidth = Math.floor($(window).width() / CHARSIZE);
  gridHeight = Math.floor($(window).height() / CHARSIZE);
  for (var i=0;i<gridWidth;i++) {
    grid[i] = [];
    for (var j=0;j<gridHeight;j++) {
      var $el = $('<span id="grid_'+i+'_'+j+'"></span>');
      grid[i][j] = { opacity:0.2, bg_opacity:0.2, oldchar: '', char:' ', $el:$el }
      $el.css({
        left: i*CHARSIZE+'px',
        top: j*CHARSIZE+'px'
      });
      $grid.append($el);
    }
  }
}
function createOpacityFilter() {
  var img = new Image();
  img.onload = function() {
    var canvas = $('<canvas></canvas>');
    canvas.id = 'canvas';
    canvas.get(0).width = gridWidth;
    canvas.get(0).height = gridHeight;
    $('body').append(canvas);
    var ctx = canvas.get(0).getContext('2d');
    if (img.width > img.height) {
      var height = (img.height / img.width) * gridWidth;
      var offsetH = (gridHeight - height) / 2;
      ctx.drawImage(img, 0, offsetH, gridWidth, height);
    } else {
      var width = (img.width / img.height) * gridHeight;
      var offsetW = (gridWidth - width) / 2;
      ctx.drawImage(img, offsetW, 0, width, gridHeight);
    }

    var data = ctx.getImageData(0, 0, gridWidth, gridHeight);
    var op, datacell, r, g, b;
    for (var i=0;i<gridWidth;i++) {
      for (var j=0;j<gridHeight;j++) {
        datacell = (j*gridWidth*4) + (i*4);
        r = data.data[datacell]/255;
        g = data.data[datacell+1]/255;
        b = data.data[datacell+2]/255;
        op = data.data[datacell + 3] /255;
        grid[i][j].bg_opacity = Math.max(op * (r+g+b) / 3, 0.2);
      }
    }
  }
  img.src = imageSrc;
}

function updateGrid() {
  // generateNoise();
  addGridTweets();
  for (var i=0;i<gridWidth;i++) {
    for (var j=gridHeight-1;j>=0;j--) {
      var cell = grid[i][j];
      if (cell.char != cell.oldchar) {
        cell.$el[0].innerHTML = cell.char;
        cell.oldchar = cell.char;
      }
      cell.$el[0].style.opacity = Math.min(cell.opacity*(1-BG_VISIBILITY) + cell.bg_opacity*BG_VISIBILITY, 1);
      if (j>0) {
        cell.opacity = grid[i][j-1].opacity;
        cell.char = grid[i][j-1].char;
      }
    }
  }
}
function generateNoise() {
  for (var i=0;i<gridWidth;i++) {
    var cell = grid[i][0];
    // cell.opacity = Math.random();
    cell.char = String.fromCharCode(97+Math.floor(Math.random()*26));
  }
}

var gridTweets = [];
var tweetsShowing = 0;
function showGridTweet(text) {
  if (tweetsShowing>=gridWidth) return;
  var tweet = {
    text:text.split('').reverse().join(''),
    x:getRandomPlace(),
    y:0
  };
  tweetsShowing++;
  gridTweets[tweet.x] = tweet;
}
function getRandomPlace() {
  var x = Math.floor(Math.random()*gridWidth);
  if (gridTweets[x]) return getRandomPlace();
  return x;
}
function addGridTweets() {
  for (var i=0;i<gridWidth;i++) {
    if (!gridTweets[i]) continue;
    var tweet = gridTweets[i];
    var cell = grid[tweet.x][0];
    if (tweet.y >= tweet.text.length) {
      cell.char = ' ';
      cell.opacity = 1;
      tweet.y = 0;
    } else {
      cell.char = tweet.text[tweet.y];
      if ("@#".indexOf(cell.char)!=-1) {
        cell.opacity = 3;
      } else {
        cell.opacity = 1 - (tweet.y / tweet.text.length);
      }
      tweet.y++;
    }
  }
}

function showNextTweet() {
  var tweet = tweets[Math.floor(Math.random() * tweets.length)];
  showGridTweet('@' + tweet.user.screen_name + ': ' + tweet.text);
}
