import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
// import CardList from './CardList';
// import SearchBox from './SearchBox';

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ""
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(users => this.setState({ robots: users}));
    //     // this.setState({ robots: robots});
    // }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })

    // }

    render() {
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // });
        // console.log(filteredRobots);
        return (
            <div>
                {/* <Header/> */}
                {/* <article className="vh-100 w-100 bg-red" id="body-text"> */}
                    <div className=" App flex w-100 vh-100 justify-between bg-white black" id="column-flex">
                        <p className="f2 tl b w-50-l w-50-ns ma4">Hi! My name is Utkarsh. Welcome to my corner of the Web!</p>
                        {/* <p class="f2 tl i w-50-l w-50-ns pa0"></p> */}
                        <p className="f4 tj w-50-l w-50-ns ma4">I recently graduated from NMIMS Mumbai with a Bachelors in Computer Engineering 
                        and this is the home for all my projects and interests - 
                        take a look around!</p>
                    </div>
                {/* </article> */}
                <Projects/>
                <Footer/>
            </div>
            
        )
    }
}

export default App;