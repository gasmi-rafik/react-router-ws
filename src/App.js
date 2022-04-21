import {useState} from 'react'
import {usersData} from './components/UsersData'
import './App.css';
import AppNavbar from './components/AppNavbar';
import UserList from './components/UserList';
import { Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
function App() {
  const [users , setUsers]=useState(usersData)
  const [log , setLog] =useState(true)
  return (
    <div className="App">
      <AppNavbar log={log} setLog={setLog}/>
      <Routes>
        <Route path='/contactlist'  element={<PrivateRoute log={log}> <UserList users={users}/> </PrivateRoute>}/>
        <Route path="/" element={<Home />} />
         <Route path="/api/profile/:id" element={<PrivateRoute  log={log}> <Profile users={users}/> </PrivateRoute>} />
      </Routes>
      
    </div>
  );
}

export default App;
