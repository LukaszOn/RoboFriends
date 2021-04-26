import CardList from "./CardList";
import SearchBox from './SearchBox';
import { Component } from 'react';
import Scroll from './Scroll';
import "./App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className="tc">
               <h1>RoboFriends</h1>
               <SearchBox searchChange={this.onSearchChange} />
               <Scroll>
                    <CardList robots={filteredRobots} />
               </Scroll>
            </div>
        );
    }
}


export default App;