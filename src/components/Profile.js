import { useSelector } from 'react-redux';
import Component from './Component';
import ReservedRockets from './reservedRockets';
import './profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const activeMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter(
    (rocket) => rocket.reserved === true,
  );

  return (
    <div className="Reservations">
      <Component reservations={activeMissions} object="Missions" />
      <ReservedRockets reserveRocket={reservedRockets} object="Rockets" />
    </div>
  );
};

export default Profile;
