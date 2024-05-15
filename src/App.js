import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="app-wrapper container">
        <Header/>
        <div className="row justify-content-between">
            <Navbar/>
            <Profile/>
        </div>
    </div>
  );
}

export default App;
