#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
echo "$($PSQL "TRUNCATE games, teams")"

cat "games.csv" | while IFS="," read YEAR ROUND WINNER OPPONENT WGOALS OGOALS
do
if [[ $YEAR != year ]]
then
  # get winner team id
  WINNER_TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")    
  OPPONENT_TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
  
  if [[ -z $WINNER_TEAM_ID ]]
  then
    # insert winner
    INSERT_WINNER_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER')")
    if [[ $INSERT_OPPONENT_RESULT == "INSERT 0 1" ]]
    then
      echo -e "Insert $WINNER (W) into teams"
    fi

    # get team id
    WINNER_TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
  fi

  if [[ -z $OPPONENT_TEAM_ID ]]
  then
    # insert opponent
    INSERT_OPPONENT_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")
    if [[ $INSERT_OPPONENT_RESULT == "INSERT 0 1" ]]
    then
      echo -e "Insert $OPPONENT (L) into teams"
    fi

    # get team id
    OPPONENT_TEAM_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
  fi

  INSERT_GAMES_RESULT=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES($YEAR, '$ROUND', $WINNER_TEAM_ID, $OPPONENT_TEAM_ID, $WGOALS, $OGOALS)")
  if [[ $INSERT_GAMES_RESULT == "INSERT 0 1" ]]
  then
    echo Inserted into games : $WINNER_TEAM_ID vs $OPPONENT_TEAM_ID
  fi
fi
done