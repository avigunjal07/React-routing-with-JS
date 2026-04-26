import React from 'react'
import './App.css'
import Home from '../src/components/Home'
import PersonalDashboard from '../src/components/PersonalDashboard'
import ProfessionalDashboard from '../src/components/ProfessionalDashboard'

const App = () => {

  const path=window.location.pathname
  let Component;

  if (path=='/home'){
    Component=Home;
  }
  else if(path=='/personal-dash'){
    Component=PersonalDashboard;
  }
  else if(path=='/professional-dash'){
    Component=ProfessionalDashboard;
  }
  else{
    Component=()=> <h1>page not found</h1>;
  };

  return (
    <div className='main-container'>
    <div className='container'>
      <a href="/home">Home</a><br />
      <a href="/personal-dash">Personal Dashboard</a><br />
      <a href="/professional-dash">Professional Dashboard</a>
      </div>
    <Component />
    </div>
  );
}

export default App
