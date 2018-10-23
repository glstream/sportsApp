import * as positionsAPI from "./fakePositionService";

const players = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Alvin Kamara",
    position: { _id: "5b21ca3eeb7f6fbccd471818", name: "RB" },
    rank: 1,
    value: 15,
    liked: true,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Marshawn Lynch",
    position: { _id: "5b21ca3eeb7f6fbccd471818", name: "RB" },
    rank: 2,
    value: 9
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Alfred Morris",
    position: { _id: "5b21ca3eeb7f6fbccd471818", name: "RB" },
    rank: 3,
    value: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Allen Robinson",
    position: { _id: "5b21ca3eeb7f6fbccd471814", name: "WR" },
    rank: 2,
    value: 7
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Cole Beasly",
    position: { _id: "5b21ca3eeb7f6fbccd471814", name: "WR" },
    rank: 3,
    dailyRentalRate: 3.5,
    value: 19
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Julio Jones",
    position: { _id: "5b21ca3eeb7f6fbccd471814", name: "WR" },
    rank: 1,
    value: 10
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Patrick Mahomes",
    position: { _id: "5b21ca3eeb7f6fbccd471820", name: "QB" },
    rank: 1,
    value: 5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Sam Darnold",
    position: { _id: "5b21ca3eeb7f6fbccd471820", name: "QB" },
    rank: 3,
    value: 6
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Russel Wilson",
    position: { _id: "5b21ca3eeb7f6fbccd471820", name: "QB" },
    rank: 2,
    value: 17
  }
];

export function getPlayers() {
  return players;
}

export function getPlayer(id) {
  return players.find(p => p._id === id);
}

export function saveplayer(player) {
  let playerInDb = players.find(m => m._id === player._id) || {};
  playerInDb.name = player.name;
  playerInDb.position = positionsAPI.positions.find(
    g => g._id === player.positionId
  );
  playerInDb.rank = player.rank;
  playerInDb.dailyRentalRate = player.dailyRentalRate;

  if (!playerInDb._id) {
    playerInDb._id = Date.now();
    players.push(playerInDb);
  }

  return playerInDb;
}

export function deleteplayer(id) {
  let playerInDb = players.find(m => m._id === id);
  players.splice(players.indexOf(playerInDb), 1);
  return playerInDb;
}
