'use strict';
const app = require('./app');
const gamelogic = require('./gamelogic');

//Sign In/Up/Out/Password Functions

const failure = (error) => {
  console.error(error);
};

const signInFailure = () => {
  $('#sign-in').append('Incorrect Username or Password. Try Again.');
};

const signUpFailure = () => {
  $('#sign-up').append("Passwords don't match. Try Again.");
};

const signUpSuccess = function(data){
  $('#signin-email').val($('#signup-email').val());
  $('#signin-password').val($('#signup-password').val());
  $('#sign-in').submit();
  app.user = data.user;
  $('#signin-modal').modal('hide');
  $('#signup-modal').modal('hide');
  $('#signed-out').hide();
  $('#signed-in').show();
  $('#create-game').show();
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signin-modal').modal('hide');
  $('#signup-modal').modal('hide');
  $('#signed-out').hide();
  $('#signed-in').show();
  $('#create-game').show();
};

const signOutSuccess = (data) => {
  app.user = null;
  $('#signout-modal').modal('hide');
  $('#password-modal').modal('hide');
  $('#signed-in').hide();
  $('#signed-out').show();
  $('.board').hide();

};

const changePasswordSuccess = (data) => {
  console.log('User #' + app.user.id + ' has successfully changed password.');
};

const changePasswordFailure = () => {
  $('#change-password').append('Password is incorrect. Try Again.');
};

//Game Functions

const gameCreated = (data) => {
  $('#create-game').hide();
  $('.board').show();
  $('.scoreboard').show();
  app.game.id = data.game.id;
  app.game = data.game;
  console.log(app.game.id);

};

const playSuccess = (data) => {
  console.log(data);

};

const gameOver = (data) => {
  console.log(data);

};

const showGames = (data) => {
  let totalGames = data.games.length;
  $('#total-games').html('This is game #' + (totalGames + 1) + ' for you!');
  $('.games-total').show();
};






module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  signUpFailure,
  gameCreated,
  playSuccess,
  gameOver,
  showGames,
};
