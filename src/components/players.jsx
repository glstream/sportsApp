import React, { Component } from "react";
import Pagination from "../common/pagination";
import { getPlayers } from "../services/fakePlayerService";
import { getPositions } from "../services/fakePositionService";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";

class Players extends Component {
  state = {
    players: [],
    positions: [],
    pageSize: 3,
    selectedPosition: { _id: "5b21ca3eeb7f6fbccd471820", name: "QB" },
    value: 1,
    currentPage: 1
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

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const { length: count } = this.state.players;
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
                <th />
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <tr key={player.name}>
                  <td>{player.rank}</td>
                  <td>{player.position.name}</td>
                  <td>{player.name}</td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={this.handleIncrement}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={this.handleIncrement}
                    >
                      -
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
