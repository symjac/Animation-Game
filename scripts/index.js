$(document).ready(function() {

var $circle = $('.circle');

$circle.on('mouseenter', $circle, function ()  {

  var $selectedCircle = $(this);
  var $randomColor = Math.floor(Math.random()*10);

  if ($selectedCircle.hasClass('big')) {
    $selectedCircle.removeClass('big').removeClass('color-even')
    .removeClass('color-odd');
  } else if ((!$selectedCircle.hasClass('big') && ($randomColor%2 == 0))) {
      $selectedCircle.addClass('big').addClass('color-even');
  } else {
      $selectedCircle.addClass('big').addClass('color-odd');
  }

});

var button = document.getElementById('click'),
  count = 0;

$circle.on('click', $circle, function () {

  var $selectedCircle = $(this);
  var $loseText = $('<p class="lose-text show-text">Try Again.</p>');
  var $winText = $('<p class="win-text show-text">You Win!</p>');
  var $selectedText = $selectedCircle.find('p');

  if ($selectedCircle.hasClass('box' && 'color-box')) {
    $selectedCircle.removeClass('box').removeClass('color-box');
    $selectedText.remove();
  } else if ($selectedCircle.hasClass('win')) {
    $selectedCircle.addClass('box').addClass('color-box');
    setTimeout(function() {
    $selectedCircle.append($winText);
      },  800);
    count += 1;
    button.innerHTML = "Boxes Tried: " + count;
    setTimeout(function() {
    $circle.removeClass('box').removeClass('color-box').removeClass('big')
    .removeClass('color-odd').removeClass('color-even');
    count = 0;
    button.innerHTML = "Boxes Tried: " + count;
    $('p').removeClass('show-text');
  }, 2000);
  } else {
    $selectedCircle.addClass('box').addClass('color-box');
    setTimeout(function() {
    $selectedCircle.append($loseText);
    count += 1;
    button.innerHTML = "Boxes Tried: " + count;
      }, 800);
  }

});


});
