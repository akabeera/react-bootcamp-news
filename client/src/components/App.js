import React, {Component} from 'react';
import NewsStories from './NewsStories';

class App extends Component {

    state = {stories: []};

    fetchStories() {
        console.log('Fetching stories');
        const url = 'http://localhost:3000/topstories';
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({stories:json});
            }).catch((error) => {
                alert(error.message);
            });
    }

    componentDidMount() {
        this.fetchStories();
    }

    render(){
        return  (
            <div>
                <h2>Top 10 News stories</h2>
                <NewsStories stories = {this.state.stories} />
            </div>
        )
    }
}


export default App;