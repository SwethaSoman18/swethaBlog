import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AddBlog from './components/AddBlog';
import Main from './components/Main';
import ViewBlog from './components/ViewBlog';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/add' element={<Main child={<AddBlog/>}/>}/>
      <Route path='/view' element={<Main child={<ViewBlog/>}/>}/>
      <Route path='/my' element={<Main child={<MyProfile/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
