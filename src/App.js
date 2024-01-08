import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Front from './memory/Front'
import Memory from './memory/Memory'

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element= {<Front/>}></Route>
  <Route path='/memory' element= {<Memory/>}></Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
