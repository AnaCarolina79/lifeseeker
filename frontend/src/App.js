import Login from '../src/pages/login/index'
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
function App() {
  return (
   <BrowserRouter>
<Routes>
  <Route path='' element={<Login/>}/>
</Routes>
   </BrowserRouter>
  );
}

export default App;
