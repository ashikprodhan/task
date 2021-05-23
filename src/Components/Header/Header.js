import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">Top  Crypto</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            <Link to="/crypto" className="nav-link active">Details</Link>
  
                            <Link to="/login" className="nav-link active">Login</Link>


                        </div>
                    </div>
                </div>
                

            </nav>


        </div>
    );
};

export default Header;