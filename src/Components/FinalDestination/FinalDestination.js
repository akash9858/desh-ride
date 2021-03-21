import React, { useEffect, useState } from 'react';
import './FinalDestination.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from '../Map/Location';
import rideData from '../Data/Data';

const FinalDestination = () => {
  const [ride, setRide] = useState([]);

  useEffect(() => {
    setRide(rideData[0])
  }, [])
  const { name, quantity, price, image } = ride;

  document.name = "Final Destination"
  return (
    <div className=" container main-content">
      {
        ride.length === 0 && <CircularProgress color="secondary" />
      }
      <div className="text" >
        <div className='divStyle'>
          <h4> Mirpur</h4>
          <h4> Gulshan </h4>
        </div>
        <div className="bike">
          <img className="images" src={image} alt="" />
          <span style={{ marginLeft: '20px' }}> {name}</span>
          <span style={{ marginLeft: '20px' }}> {price}</span>
          <span style={{ marginLeft: '20px' }}> {quantity}</span>
        </div>
        <div className="bike">
          <img className="images" src={image} alt="" />
          <span style={{ marginLeft: '20px' }}> {name}</span>
          <span style={{ marginLeft: '20px' }}> {price}</span>
          <span style={{ marginLeft: '20px' }}> {quantity}</span>
        </div>
        <div className="bike">
          <img className="images" src={image} alt="" />
          <span style={{ marginLeft: '20px' }}> {name}</span>
          <span style={{ marginLeft: '20px' }}> {price}</span>
          <span style={{ marginLeft: '20px' }}> {quantity}</span>
        </div>

      </div>
      <div className="image">
        <Location></Location>
      </div>
    </div>
  );
};

export default FinalDestination;
