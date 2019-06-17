$(document).ready(function() {

var $circle = $('.circle');
var button = document.getElementById('score-count'),
  count = 0;

$circle.on('mouseenter', function ()  {

  var $selectedCircle = $(this);
  var $randomColor = Math.floor(Math.random()*10);


  if ($selectedCircle.hasClass('big')) {
    $selectedCircle.removeClass('big color-even color-odd');
  } else if ((!$selectedCircle.hasClass('big') && ($randomColor%2 == 0))) {
      $selectedCircle.addClass('big color-even');
  } else {
      $selectedCircle.addClass('big color-odd');
  }

});

$circle.on('click', function () {

  var $selectedCircle = $(this);
  var $loseText = $('<p class="lose-text show-text">Try Again</p>');
  var $winText = $('<p class="win-text show-text">You Win!</p>');
  var $selectedText = $selectedCircle.find('p');
  var randomCircle = Math.floor(Math.random() * 25);
  var $selectedWin = $('.circle').eq(randomCircle);

  function winCycle () {
    $selectedCircle.addClass('box win-animation');
    $selectedCircle.append($winText);
    $selectedCircle.removeClass('win');
    count += 1;
    button.innerHTML = count + " Circles Tried";
    setTimeout(function() {
    $circle.removeClass('box color-box big color-odd win-animation color-even');
    count = 0;
    button.innerHTML = count + " Circles Tried";
    $('p').removeClass('show-text');
  }, 2000);
    var finalCount = count;
    var $prevScore = $('<li class ="previous-score">' + finalCount + '</li>');
    var $scoreList = $('.score-list')
    var $numberOfScores = $scoreList.children().length;
    if ($numberOfScores >= 5) {
      $scoreList.find('li').remove();
      $scoreList.append($prevScore);
    } else {
      $('.list-placeholder').remove();
      $scoreList.append($prevScore);
    }
    $selectedWin.addClass('win');
  }

  if ($selectedCircle.hasClass('box color-box')) {
    $selectedCircle.removeClass('box color-box');
    $selectedText.remove();
  } else if ($selectedCircle.hasClass('win')) {
    winCycle ();
  } else {
    $selectedCircle.addClass('box color-box');
    $selectedCircle.append($loseText);
    count += 1;
    button.innerHTML = count + " Circles Tried";
  }

});

// var numberOfChildren = $element.children().length;

});
