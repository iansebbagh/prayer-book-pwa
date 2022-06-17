import React from 'react';
import logo from './logo.svg';

import './App.scss';
import InstallPWA from './components/install-btn';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainNav from './layouts/main-nav';
import PrayerBookPage from './pages/prayerbook';
import HomePage from './pages/home';
import MainFooter from './layouts/footer';

function App() {
  console.log("Installed 123")
  return (
  <div className="App">
    <MainNav />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/prayerbook' element={<PrayerBookPage />} />
      </Routes>
      <MainFooter /> 
    </div>
  );
}

export default App;
