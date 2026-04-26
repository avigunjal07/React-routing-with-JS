import React from 'react'
import './App.css'

const App = () => {

  const path=window.location.pathname
  let component

  if (path=='/home'){
    component=home
  }
  else if(path=='/personal-dash'){
    component=personal-dash
  }
  else if(path=='/professional-dash'){
    component=professional-dash
  }
  else{
    component=()=> <h1>page not found</h1>
  }




  return (
    <div className='container'>
      <a href="/home">Home</a><br />
      <a href="/personal-dash">Personal Dashboard</a><br />
      <a href="/professional-dash">Professional Dashboard</a>
    </div>
  );
}

export default App
