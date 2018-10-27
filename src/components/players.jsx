import React, { Component } from "react";
import Pagination from "../common/pagination";
import { getPlayers } from "../services/fakePlayerService";
import { getPositions } from "../services/fakePositionService";
import { paginate } from "../utils/paginate";
import ListGroup from "../common/listGroup";
import PlayersTable from "./playersTable";
import _ from 'lodash';

class Players extends Component {
  state = {
    players: [],
    positions: [],
    pageSize: 4,
    selectedPosition: { _id: "5b21ca3eeb7f6fbccd471820", name: "QB" },
    currentPage: 1,
    value: 1,
    sortColumn: {path: 'name', order: 'acs'}
  };

  componentDidMount() {
    const positions = [{ name: "Overall", _id:""}, ...getPositions()];

    this.setState({ players: getPlayers(), positions });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePositionSelect = position => {
    this.setState({ selectedPosition: position, currentPage: 1 });
  };

  handleIncrement = player => {
    //console.log("Increment Clicked", player);
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...players[index] };
    console.log(players[index]);
    players[index].value++;
    this.setState({ players });
  };

  handleDecrement = player => {
    //console.log("Increment Clicked", player);
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...players[index] };
    console.log(players[index]);
    players[index].value--;
    this.setState({ players });
  };

  handleLike = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    console.log(index);
    players[index] = { ...players[index] };
    console.log(players[index]);
    players[index].liked = !players[index].liked;
  };

  handleSort = sortColumn => {
 
    this.setState({ sortColumn });
  }

  render() {
    //const { length: count } = this.state.players;
    const {
      pageSize,
      currentPage,
      selectedPosition,
      sortColumn,
      players: allPlayers
    } = this.state;

    const filtered =
      selectedPosition && selectedPosition._id
        ? allPlayers.filter(p => p.position._id === selectedPosition._id)
        : allPlayers;
    
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const players = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.positions}
            selectedItem={this.state.selectedPosition}
            onItemSelect={this.handlePositionSelect}
          />
        </div>
        <div className="col-5">
          <PlayersTable 
          players={players}
          sortColumn={sortColumn}
          onIncrement={this.handleIncrement}
          onDecrement= {this.handleDecrement}
          onSort={this.handleSort}
          />
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
