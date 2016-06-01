'use strict';

const events = require('./events');

const countSquares = function(gameArray) {
  let result = 0;
  for (let i = 0; i < gameArray.length; i++) {
    if (gameArray[i] !== undefined) {
      result +=1;
    }
  }
  return result;
};

const logic = function(gameArray) {
  if (gameArray[0] !== undefined && gameArray[0] === gameArray[1]
    && gameArray[1] === gameArray[2]) {
  $('.board').delay( 1200 ).hide();
  if(gameArray[0] === 'x'){
    $('.x-wins').show().delay(1200).fadeOut(900);
  }
  else {
    $('.o-wins').show().delay(1200).fadeOut(900);
  }
  $('#create-game').delay( 2800 ).show('fast');
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[0] !== undefined && gameArray[0] === gameArray[3]
    && gameArray[3] === gameArray[6]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[0] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[0] !== undefined && gameArray[0] === gameArray[4]
    && gameArray[4] === gameArray[8]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[0] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[2] !== undefined && gameArray[2] === gameArray[5]
    && gameArray[5] === gameArray[8]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[2] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[2] !== undefined && gameArray[2] === gameArray[4]
    && gameArray[4] === gameArray[6]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[2] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[1] !== undefined && gameArray[1] === gameArray[4]
    && gameArray[4] === gameArray[7]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[1] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[3] !== undefined && gameArray[3] === gameArray[4]
    && gameArray[4] === gameArray[5]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[3] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (gameArray[6] !== undefined && gameArray[6] === gameArray[7]
    && gameArray[7] === gameArray[8]) {
    $('.board').delay( 1200 ).hide();
    if(gameArray[6] === 'x'){
      $('.x-wins').show().delay(1200).fadeOut(900);
    }
    else {
      $('.o-wins').show().delay(1200).fadeOut(900);
    }
    $('#create-game').delay( 2800 ).show('fast');
    $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  }
  else if (countSquares(gameArray) === 9){
  $('.board').delay( 1200 ).hide();
  $('#create-game').delay( 2800 ).show('fast');
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);
  $('.tie').show().delay(1200).fadeOut(900);

  }
};

module.exports = {
  logic,
};
