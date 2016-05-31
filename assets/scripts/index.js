'use strict';

const events = require('./gamescripts/events.js');

// On document ready
$(() => {
  events.addHandlers();
  events.signInOrOut();

});
