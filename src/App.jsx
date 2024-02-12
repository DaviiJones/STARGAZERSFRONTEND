import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

// Import Pages
import Home from './components/pages/home';
import NasaPhotoListPage from './components/pages/nasaPhotoListPage';
import SolarSearch from './components/pages/solarSearch';
import MissionsCuriosity from './components/pages/missionsCuriosity';
import MissionsOpportunity from './components/pages/missionsOpportunity';
import MissionsSpirit from './components/pages/missionsSpirit';


//BS Components
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card'



function App() {

    return (
     <>
      <Router>
        <main>
          <Card>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/nasaPhotos' element={<NasaPhotoListPage/>}/>
              <Route path='/solarSearch' element={<SolarSearch/>}/>
              <Route path='/missionSpirit' element={<MissionsSpirit/>}/>
              <Route path='/missionCuriosity' element={<MissionsCuriosity/>}/>
              <Route path='/missionOpportunity' element={<MissionsOpportunity/>}/>
            </Routes>
          </Card>
        </main>
      </Router>
     </>
    )
  }
  
  export default App;