import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users}));
        // this.setState({ robots: robots});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        // console.log(filteredRobots);
        return (
            <div className="tc">
                <h1>Some friends.</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots = {filteredRobots} />
            </div>
        )
    }
}

export default App;