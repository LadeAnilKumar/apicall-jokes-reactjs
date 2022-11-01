import React, {useState} from 'react'

import axios from 'axios'
import './App.css'


const App = () => {
  const [joke, setJoke] = useState([])
  const getJoke =() => {
    axios.get("https://official-joke-api.appspot.com/random_ten").then(response => {
      console.log(response)
      setJoke(response.data)
    })
  }
  return (
    <div>
      <button onClick={getJoke}>ADD</button>
      <div>
        {joke.map(eachJoke =>{
          return(
          <div key={eachJoke.id} className="card">
          <img src="https://i.pinimg.com/474x/e0/0e/8f/e00e8fdca77aa1c7e080c38fca8a6653.jpg" className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{eachJoke.setUp}</h5>
            <p className="card-text">{eachJoke.punchline}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>) 
        })
        }
      </div>
    </div>
  )
}

export default App