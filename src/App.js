import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from './pages/Main';
import Animals from './pages/Animals';
import Login from './pages/Login';
import AnimalsDetail from './pages/AnimalsDetail';
import AnimalsRegist from './pages/AnimalsRegist';
import AnimalsModify from './pages/AnimalsModify';
import Manager from './subpages/Manager';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="menu" >
            <Route index element={ <Animals/> }/>
            <Route path="animalAbout" element={ <animalAbout/> }/>
            <Route path=":id" element={ <AnimalsDetail/> }/>
            <Route path="regist" element={ <AnimalsRegist/> }/>
            <Route path="modify" >
              <Route path=":id" element={ <AnimalsModify/> }/>
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
