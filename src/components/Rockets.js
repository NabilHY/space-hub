/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import './rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {
        rockets.map(({
          rocket_id, rocket_name, description, flickr_images,
        }) => (
          <div className="rocket-container" key={rocket_id}>
            <img className="rocket-img" src={flickr_images} alt={rocket_name} />
            <div className="rocket-info">
              <h1>{rocket_name}</h1>
              <p>{description}</p>
              <button type="button" className="reserve-btn">Reserve Rocket</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
