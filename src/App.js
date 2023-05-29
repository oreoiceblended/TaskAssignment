import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import './css/SideBar.css'
import Footer from './component/Footer';
import Header from './component/Header';
import SideBar from './component/SideBar';
import Dashboard from './pages/dashboard';
import AssignCollector from './pages/AssignCollector';
import AssignJanitor from './pages/AssignJanitor';

function App() {
  return (
    <BrowserRouter>
      <SideBar>
      <Header></Header>
        <Routes>
        {/* <Route path='' element={<Dashboard/>}/> */}
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/assign_collector' element={<AssignCollector/>}/>
          <Route path='/assign_janitor' element={<AssignJanitor/>}/>
        </Routes>
      </SideBar>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
