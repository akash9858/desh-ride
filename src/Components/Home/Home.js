import React from 'react';
import { useEffect, useState } from 'react';
import Ride from '../Ride/Ride';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Home.css'


const Home = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`https://api.mocki.io/v1/bb675702/rides`)
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    document.title = "Desh Ride"
    return (
        <div className="container App background" >
            {
                card.length === 0 && <CircularProgress color="secondary" />
            }
            {
                card.map(card => <Ride key={card.id} card={card}> </Ride>)
            }
        </div>
    );
};

export default Home;