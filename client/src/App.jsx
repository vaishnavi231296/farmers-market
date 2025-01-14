import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './MainRouter'

/*
=========================================================
* Group Name: ExpressCrew
* Project Name: Farmer's Market [FARM]
=========================================================
*/
function App() {

  return (
      <Router>
        <MainRouter/>
      </Router>
  )
}

export default App
