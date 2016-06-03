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
  $('#sign-up').append("Passwords don't match or this username already exists. Try Again.");
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

const showWins = (data) => {
  let totalWins = 0;
  for (let i = 0; i < data.games.length; i++) {
  if (data.games[i].cells[0] === 'x' && data.games[i].cells[1] === 'x'
    && data.games[i].cells[2] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[0] === 'x' && data.games[i].cells[3] === 'x'
    && data.games[i].cells[6] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[0] === 'x' && data.games[i].cells[4] === 'x'
    && data.games[i].cells[8] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[2] === 'x' && data.games[i].cells[5] === 'x'
    && data.games[i].cells[8] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[2] === 'x' && data.games[i].cells[4] === 'x'
    && data.games[i].cells[6] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[1] === 'x' && data.games[i].cells[4] === 'x'
    && data.games[i].cells[7] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[3] === 'x' && data.games[i].cells[4] === 'x'
    && data.games[i].cells[5] === 'x'){
      totalWins += 1;
    }
  else if (data.games[i].cells[6] === 'x' && data.games[i].cells[7] === 'x'
    && data.games[i].cells[8] === 'x'){
      totalWins += 1;
    }
}
  $('#total-wins').html(app.user.email + ' has won ' + totalWins + ' games!');
}

const showStats = (data) => {
  let player = '';
  let result = 0;
  let lastGame = '';
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].id > result) {
      result = data.games[i].id;
      lastGame = data.games[i];
    };
  };
  if (lastGame.cells[0] !== undefined &&
    lastGame.cells[0] === lastGame.cells[1]
    && lastGame.cells[1] === lastGame.cells[2]){
      player = lastGame.cells[0];
    }
  else if (lastGame.cells[0] !== undefined &&
    lastGame.cells[0] === lastGame.cells[3]
    && lastGame.cells[3] === lastGame.cells[6]) {
      player = lastGame.cells[0];
    }
  else if (lastGame.cells[0] !== undefined &&
    lastGame.cells[0] === lastGame.cells[4]
    && lastGame.cells[4] === lastGame.cells[8]) {
      player = lastGame.cells[0];
    }
  else if (lastGame.cells[2] !== undefined &&
    lastGame.cells[2] === lastGame.cells[5]
    && lastGame.cells[5] === lastGame.cells[8]) {
      player = lastGame.cells[2];
    }
  else if (lastGame.cells[2] !== undefined &&
    lastGame.cells[2] === lastGame.cells[4]
    && lastGame.cells[4] === lastGame.cells[6]) {
      player = lastGame.cells[2];
    }
  else if (lastGame.cells[1] !== undefined &&
    lastGame.cells[1] === lastGame.cells[4]
    && lastGame.cells[4] === lastGame.cells[7]) {
      player = lastGame.cells[1];
    }
  else if (lastGame.cells[3] !== undefined &&
    lastGame.cells[3] === lastGame.cells[4]
    && lastGame.cells[4] === lastGame.cells[5]) {
      player = lastGame.cells[3];
    }
  else if (lastGame.cells[6] !== undefined &&
    lastGame.cells[6] === lastGame.cells[7]
    && lastGame.cells[7] === lastGame.cells[8]) {
      player = lastGame.cells[6];
    }
  else if (lastGame.cells[3] !== undefined &&
    lastGame.cells[3] === lastGame.cells[4]
    && lastGame.cells[4] === lastGame.cells[5]) {
      player = lastGame.cells[3];
    }
  else {
    player = "Tie Game!"
  }
  let xPlays = 0;
  let oPlays = 0;
  for (let i = 0; i < lastGame.cells.length; i++) {
    if (lastGame.cells[i] === 'x') {
      xPlays += 1;
    }
    if (lastGame.cells[i] === 'o') {
      oPlays += 1;
    };
  }
  if (player === 'x' && xPlays === 3) {
    player = 'You Won with a Birdie!';
  }
  else if (player === 'x' && xPlays === 4) {
    player = 'You Won with a Par!';
  }
  else if (player === 'x' && xPlays === 5) {
    player = 'You Won with a Bogie!';
  }
  else if(player === "o" && oPlays === 3) {
    player = "Pink Won with a Birdie!";
  }
  else if(player === "o" && oPlays === 4) {
    player = "Pink Won with a Par!";
  }
  else if(player === "o" && oPlays === 5) {
    player = "Pink Won with a Bogie!";
  };

  $('#stats-modal').html('<h3><center>' + player + '</center></h3>');
};


const showGames = (data) => {
  let totalGames = data.games.length;
  $('#total-games').html('This is game #' + (totalGames + 1) + ' for ' + app.user.email + '!');
  $('.games-total').show();
  $('#game-stats').show();
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
  showStats,
  showWins,
};
