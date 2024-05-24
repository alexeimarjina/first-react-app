import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App() {
  return (
      <BrowserRouter>
        <div className="app-wrapper container">
            <Header/>
            <div className="row justify-content-between">
                <Navbar/>
                <Routes>
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/dialogs' element={<Dialogs/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/music' element={<Music/>} />
                    <Route path='/settings' element={<Settings/>} />
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
