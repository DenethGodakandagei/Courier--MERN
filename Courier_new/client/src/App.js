import { useState,Fragment } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

import Quotetype from './pages/Quotetype';
import Domestic from './pages/Domestic';
import International from './pages/International';
import Admin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

import Summary from './pages/Summary';
import { createContext } from 'react';
import Oderdetails from './components/Admin/Oderdetails';

export const admintrue = createContext();

function App() {

  const [value, setValue] = useState(false);
  
  const toggleValue = () => {
    setValue(prevValue => !prevValue);
  
  };
 
  return (
   <admintrue.Provider value={{ value, toggleValue }}>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/quote_type' element={<Quotetype />} />
      <Route path='/domestic' element={<Domestic />} />
      <Route path='/international' element={<International />} />
      <Route path='/rootadmin' element={<Admin />} />
        <Fragment>
      {value ? (
        <Route path='/rootadmin/dashboard' element={<AdminDashboard />} />
      ) : (
        <Route path='/rootadmin/dashboard' element={<Admin />} />
      )}
    </Fragment>
    <Fragment>
      {value ? (
        <Route path='/rootadmin/dashboard/:id' element={<Oderdetails />} />
      ) : (
        <Route path='/rootadmin/dashboard' element={<Admin />} />
      )}
    </Fragment>
     
      <Route path='/order/:id' element={<Summary />}  />
      <Route path='/order/international/:id' element={<Summary />}  />
   
    </Routes>
    </admintrue.Provider>
  );
}

export default App;
