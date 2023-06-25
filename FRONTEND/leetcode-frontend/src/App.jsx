import './App.css'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProblemSet from './ProblemSet';
import CreateProblem from './CreateProblem';

function App() {
  return(
    <div className='app-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ProblemSet />} />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/create-problem' element={ <CreateProblem />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
