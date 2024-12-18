import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import ForgotPassword from './pages/forget-password';
import Home from './pages/landingPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewHome from './pages/userHome';

function App() {
  console.log(' :>> ');
  console.log(' :>> ' );
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/*" element ={<Home/>}/>
          <Route path="/user/login" element ={<LoginForm/>}/>
          <Route path="/user/signup" element ={<SignupForm/>}/>
          <Route path="/user/forget-password" element ={<ForgotPassword/>}/>
          <Route path="/user/home" element ={<NewHome/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
