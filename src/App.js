import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <main className="main">
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
