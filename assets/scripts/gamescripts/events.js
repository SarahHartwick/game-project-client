'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const app = require('./app');
const api = require('./api');
const ui = require('./ui');
const events = require('./events');
const gamelogic = require('./gamelogic');
let currentGame = [];

//Sign In/Up/Out/Password Event Handlers

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signInSuccess)
  .fail(ui.signUpFailure);

};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure);

};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').off('click', events.playSquare);

};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.changePasswordFailure);

};

//Game Event Handlers
let cellsFull = 0;

const playSquare = (event) => {
  event.preventDefault();
  let id = $(event.target).parents().parents().attr("id");

  cellsFull += 1;
    if(cellsFull % 2 === 0) {
    currentGame[id] = 'x';
    $('#' + id).empty();
    $('#' + id).html('<img src="http://i.imgur.com/ymGz64S.jpg" alt="Golf Hole" class="col-xs-4">');
  } else {
    currentGame[id] = 'o';
    $('#' + id).empty();
    $('#' + id).html('<img src="http://i.imgur.com/PEbgFBN.jpg?1" alt="Golf Hole" class="col-xs-4">');
  }
  $('#' + id).off('click', playSquare);
  gamelogic.logic(currentGame);
  console.log(currentGame);
};


const createGame = (event) => {
  event.preventDefault();
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').html("<div class='emptySquare'><img src='http://i.imgur.com/75hOFrS.jpg' alt='Golf Hole' class='col-xs-4'></div>");
  $('#0, #1, #2, #3, #4, #5, #6, #7, #8').on('click', playSquare);
  api.createGame()
  .done(ui.gameCreated)
  .fail(ui.failure);
  for (let i = 0; i <= 9; i++) {
    currentGame.pop();
  }

};

const onGames = (event) => {
  event.preventDefault();
  api.showGames()
  .done(ui.showGameList)
  .fail(ui.failure);

};


//jQuery Events

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#view-games').on('submit', onGames);
  $('.board').hide();
  $('#create-game').on('click', createGame);
  $('.x-wins').hide();
  $('.o-wins').hide();
  $('.tie').hide();
};

const signInOrOut = () => {
    $(function() {
      if (app.user) {
      $('#signed-out').hide();
    }
    else {
      $('#signed-in').hide();
    }
  }
);
};

module.exports = {
  addHandlers,
  onSignUp,
  onSignOut,
  onChangePassword,
  signInOrOut,
  onGames,
  playSquare,
  onSignIn,
};
