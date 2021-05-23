import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Crypto site</h1>
            <p>Click the button below to see crypto name and price </p>
            <Link to="crypto"> <button type="button" className="btn btn-primary" >View Details</button>   </Link>
        </div>
    );
};

export default Home;