import { useSelector } from 'react-redux';
import Component from './Component';
import './profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const activeMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className="Reservations">
      <Component reservations={activeMissions} object="Missions" />
    </div>
  );
};

export default Profile;
