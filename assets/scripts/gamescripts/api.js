'use strict';

const app = require('./app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const showGames = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createGame = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const playSquare = () => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
            "game": {
              "cell": {
                  "index": app.game.index,
                  "value": app.game.value,
          },
          "over": app.over,
        }
      }
    });
  };

  const gameOver = () => {
    return $.ajax({
      url: app.host + '/games/' + app.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
              "game": {
              "over": true,
          }
        }
      });
    };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  showGames,
  createGame,
  playSquare,
  gameOver,
};
