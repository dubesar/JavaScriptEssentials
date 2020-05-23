const team = {
  _players : [
    {
      firstName: 'Sarvesh',
      lastname: 'Dubey',
      age: 20
    },
    {
      firstName: 'Devesh',
      lastname: 'Dubey',
      age: 25
    },
    {
      firstName: 'Raghav',
      lastname: 'Dubey',
      age: 20
    }
  ],
  _games : [
    {
      opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
    },
    {
      opponent: 'Chess',
      teamPoints: 12,
      opponentPoints: 27
    },
    {
      opponent: 'Football',
      teamPoints: 5,
      opponentPoints: 2
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age){
    this._players.push({
      firstName: firstName,
      lastName: lastName,
      age: age
    })
  },
  addGame(oppenent,teamPoints,oppenentPoints){
    this._games.push(
      {
        opponenet: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
    )
  }
}

team.addPlayer('Steph','Curry','28')
team.addPlayer('Lisa','Leslie','44')
team.addPlayer('Bugs','Bunny','76')

console.log(team.players)
