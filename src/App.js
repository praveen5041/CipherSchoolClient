import Home from './components/pages/home'
import Signup from './components/pages/register'
import Login from './components/pages/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigate from './components/pages/Navigate'
function App() {
  return (
     
    <BrowserRouter>
      <Navigate/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
