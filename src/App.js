import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from './pages/Main';
import Menus from './pages/Menus';
import Login from './pages/Login';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Manager from './subpages/Manager';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="menu" >
            <Route index element={ <Menus/> }/>
            <Route path="animalAbout" element={ <animalAbout/> }/>
            <Route path=":id" element={ <MenuDetail/> }/>
            <Route path="regist" element={ <MenuRegist/> }/>
            <Route path="modify" >
              <Route path=":id" element={ <MenuModify/> }/>
            </Route>
          </Route>
          
          <Route path="login" element={ <Login/> }/>
          <Route path="/manager" element={ <Manager/> }/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
