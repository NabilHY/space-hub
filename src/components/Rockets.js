/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/rockets/rockets';
import './rockets.css';

let loaded = false;

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (!loaded) {
      dispatch(getRockets());
      loaded = true;
    }
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rockets.map(({
        id, name, description, image, reserved,
      }) => (
        <div className="rocket-container" key={id}>
          <img className="rocket-img" src={image} alt={name} />
          <div className="rocket-info">
            <h1>{name}</h1>
            {reserved ? (
              <p>
                <span className="reserved">Reserved</span>
                {description}
              </p>
            ) : (
              <p>{description}</p>
            )}
            <p>{description}</p>
            {reserved ? (
              <button
                onClick={() => dispatch(reserveRocket(id))}
                type="button"
                className="reserve-btn"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                onClick={() => dispatch(reserveRocket(id))}
                type="button"
                className="reserved-btn"
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
