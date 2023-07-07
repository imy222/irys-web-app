import React from 'react';
import '../App.css';
import {Card} from './Card';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Irys's World of Wonders</h1>
            <div className="cards-container">
                <Card
                    imgSrc="https://picsum.photos/300/200"
                    imgAlt="Placeholder image"
                    title="Card Title"
                    description="This is the description on the card"
                    buttonText="Learn More"
                    link="/blog"
                />
                <Card
                    imgSrc="https://picsum.photos/300/200"
                    imgAlt="Placeholder image"
                    title="Card Title"
                    description="This is the description on the card"
                    buttonText="Learn More"
                    link="/blog"
                />
        </div>
        </div>
    );
}

export default Home;
