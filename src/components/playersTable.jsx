import React, { Component } from 'react';
import Increment from "../common/increment";
import Decrement from "../common/decrement";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";



class PlayersTable extends Component {

    columns = [
        {path: 'rank', label: 'Rank'},
        {path: 'position.name', label: 'Position'},
        {path: 'name', label: 'Name'},
        {path: 'value', label: 'Value'},
        {path:'counter', key: "incrementer", content: player => <div><Increment onClick={() => this.props.onIncrement(player)} /><Decrement onClick={() => this.props.onDecrement(player)} /></div>},
        // {key: "decrementer", content: player => <Decrement onClick={() => this.props.onIncrement(player)} />},

    ];

    render() { 
        const {players, sortColumn, onSort } = this.props;


    return ( 
        <table className="table">
           <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
           <TableBody data={players} columns={this.columns}/>
            
          </table>
     );
    }
}
 




 
export default PlayersTable;