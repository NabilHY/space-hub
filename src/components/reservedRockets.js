import PropTypes from 'prop-types';
import './component.css';

const ReservedRockets = ({ reserveRocket, object }) => (
  <div>
    <h1>
      My
      {' '}
      {object}
    </h1>
    {reserveRocket.length ? (
      <ul className="Reservations__div_list">
        {reserveRocket.map((reservation) => (
          <li className="Reservations__div_list_item" key={reservation.id}>
            {reservation.name}
          </li>
        ))}
      </ul>
    ) : (
      <p className="Reservations__div_none">No reservation yet</p>
    )}
  </div>
);

ReservedRockets.propTypes = {
  reserveRocket: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,
};

export default ReservedRockets;
