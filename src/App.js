import React from 'react'
import AravanskPage from "./pages/AravanskPage/AravanskPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import BackgroundSelector from "./components/BackgroundSelector/BackgroundSelector";
import MainPage from "./pages/MainPage/MainPage";
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className={'container'}>
        <BackgroundSelector />
        <BreadCrumb />
        <Switch>
            <Route exact path={'/'} component={MainPage} />
            <Route path={'/aravansk-district'} component={AravanskPage} />
        </Switch>
    </div>
  );
}

export default App;
