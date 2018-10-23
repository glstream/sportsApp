import React, { Component } from "react";
import Pagination from "../common/pagination";
import { getPlayers } from "../services/fakePlayerService";
import { getPositions } from "../services/fakePositionService";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";
import Like from '../common/like';

class Players extends Component {
  state = {
    players: [],
    positions: [],
    pageSize: 3,
    selectedPosition: { _id: "5b21ca3eeb7f6fbccd471820", name: "QB" },
    currentPage: 1,
    value: 1,
    tags:["tag1", 'tag2', 'tag3']
  };

  componentDidMount() {
    const positions = [{ name: "Overall" }, ...getPositions()];

    this.setState({ players: getPlayers(), positions });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePositionSelect = position => {
    this.setState({ selectedPosition: position, currentPage: 1 });
  };

  handleIncrement = (playerId) => {
    console.log(playerId)
    const players = [...this.state.players]
    console.log(players)
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    //const { length: count } = this.state.players;
    const {
      pageSize,
      currentPage,
      selectedPosition,
      players: allPlayers
    } = this.state;

    const filtered =
      selectedPosition && selectedPosition._id
        ? allPlayers.filter(p => p.position._id === selectedPosition._id)
        : allPlayers;

    const players = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.positions}
            selectedItem={this.state.selectedPosition}
            onItemSelect={this.handlePositionSelect}
          />
        </div>
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Position</th>
                <th>Value</th>
                <th>Like</th>
                <th>Self Rank</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <tr key={player.name}>
                  <td>{player.rank}</td>
                  <td>{player.position.name}</td>
                  <td>{player.name}</td>
                  <td>{player.value}</td>
                  <td>
                    <Like />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm m-2"
                      onClick={() => this.handleIncrement(player._id)}
                    >+
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={this.handleDecrement}
                    >-
                    </button>
                  </td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Players;
