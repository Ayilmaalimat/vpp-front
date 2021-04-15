import React from 'react'
import AravanskPage from "./pages/AravanskPage/AravanskPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import BackgroundSelector from "./components/BackgroundSelector/BackgroundSelector";

function App() {
  return (
    <div className={'container'}>
        <BackgroundSelector />
        <BreadCrumb />
      <AravanskPage />
    </div>
  );
}

export default App;
