import React, { Component } from 'react';

class NewsStories extends Component {
    render() {
        const {stories} = this.props;
        if (!stories) return null;
        return (
            <div>
                {
                    stories.map((story) => {
                        const {id, by, score, title, url, time} = story;
                        return (
                            <div key={id}>
                                <a href={url}>
                                    <h3>{title}</h3>
                                </a>
                                <p>Upvotes: {score}</p>
                                <p>{by} - {new Date(time).toLocaleTimeString()}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default NewsStories;