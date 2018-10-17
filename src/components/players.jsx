import React, { Component } from "react";
import { getPlayers } from "../services/fakePlayerService";

class Players extends Component {
  state = {
    players: getPlayers()
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {this.state.players.map(player => (
            <tr>
              <td>{player.name}</td>
              <td>{player.position.name}</td>
              <td>{player.rank}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Players;
