/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="rocket-container">
      {
        rockets.map(({
          rocket_id, rocket_name, description, flickr_images,
        }) => (
          <div key={rocket_id}>
            <img src={flickr_images} alt={rocket_name} />
            <h1>{rocket_name}</h1>
            <p>{description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
