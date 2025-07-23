import './App.css';
import Headbar from './components/Headbar';
import Homepage from './components/Homapage';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Sign';
import Signup from './components/Signup';
import Filmpage from './components/Filmpage';
import Userprofile from './components/Userprofile';
import Addfilm from './components/Addfilm';
function App() {
 
   
  return (
   <>
   <Headbar/>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/:id' element={<Homepage />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/filmpage/:id' element={<Filmpage />}/>
        <Route path='/userprofile' element={<Userprofile />}/>
        <Route path='/userprofile/:id' element={<Userprofile />}/> 
        <Route path='/addfilmpage' element={<Addfilm />}/> 
     </Routes></>
  );
}

export default App;
