![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Sarah Hartwick's Golf-Tac-Toe
(http://sarahhartwick.github.io/game-project-client)

## Overview, Objectives & Process

I created a golf-themed tic-tac-toe application that currently allows someone
to log in and play with two players from one user account.

It does not allow a grid location to be played more than once in a game,
it alternates between the two players each play (and alternates who goes
first each game for fairness!)

I integrated a unique golf scoring process that does a GET request to retrieve
the last played game by the user and then display who won and how many plays it
took them to win (the lower # of plays the better!)

I integrated a front-end scoreboard that counts the wins, losses & ties for
the current session, as well as a total games played & total wins counter that
issues a GET request to retrieve this information on the user from the server.

I used jQuery to create a good user experience and made sure that buttons
and elements that are not currently usable (eg sign in once signed in etc) are
not visible to the user. I made the application responsive using scss and used
bootstrap modals to enhance the experience. I also made sure that on sign out
everything resets without the need to refresh the page.

I approached this process initially from a very front-end centered standpoint
and made everything work without connecting to the server, in hindsight this
made working with the API a little more difficult because I had to rewrite a lot
of what I had done once I began to send HTTP requests.

I began to experiment with allowing two users on separate devices to play
against one another and was able to make it work (allowed player o to join the
game, patched each move to the game cells array), yet I relied on an
'update game' button that triggered a GET request which then triggered jQuery to
change the user's view once their opponent played a grid location. I was unable
to get the 'watch' feature to work but would love to work on that in the future.


## User Stories
- As a User I want to create an account so that I can play Tic Tac Toe.
- As a User I want to select a square to place my token, and I do not want
my opponent to be able to override this so that we can complete a game.
- As a User I want to be able to view all of the spaces on the board that are
currently open so that I can choose where to make my next move.
- As a User I want to know when me or my opponent has won the game so that I
can start another one.
- As a User I want to have clear directions on how to play the game & not see
any irrelevant information on the page.
- As a User I want to track the number of games I've played & the number that
I've won.
