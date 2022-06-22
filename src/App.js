import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';

import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(dispatch(getRockets), [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
