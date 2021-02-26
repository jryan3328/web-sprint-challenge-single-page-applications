
import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

const Home = () => {
    const { url } = useRouteMatch()
  return (
    <div className = "mainContainer">
        <h1>Got the Munchies?!?  How about...</h1>
        <Link to={`${url}pizza`}><button id = "redirect">PIZZA!!!!</button></Link>
    </div>
  );
};
export default Home;