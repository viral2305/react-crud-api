
import Home from './component/pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import View from './component/student/View'
import Edit from './component/student/Edit'



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/view/:id' element={<View />}/>
      <Route exact path='/edit/:id' element={<Edit />}/>

      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
