import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import {setSearchField, requestMonsters} from './action';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
      searchField: state.searchMonsters.searchField,
      monsters: state.requestMonsters.monsters,
      isPending: state.requestMonsters.isPending,
      error: state.requestMonsters.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters())
  }
}

class App extends Component { 


  componentDidMount() {
    this.props.onRequestMonsters()
  }


  render() {
    const { searchField, onSearchChange, monsters, isPending } = this.props;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
      <h1>Loading...</h1>
      :
      (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters' 
          handleChange = {onSearchChange}
        />
        <CardList monsters={filteredMonsters}>        
        </CardList>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
