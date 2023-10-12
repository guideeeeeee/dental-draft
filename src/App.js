import "./App.css";
import logo from './component/logo.png';
import findUs from './component/findUs.svg';
import Profile from './component/profile.svg';
import call from './component/call.svg';
import calendar from './component/calandar.svg';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function App() {
  const [showPassword, setShowPassword] = useState(false);
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="app">
      <div className="tabbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="manu">
        <li className="nav-item">
          <a href="#" className="tab-link">
            <img id="img" src={findUs} alt="find us" />
            FIND US
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.youtube.com/watch?v=oUoge5ED6Yw" className="tab-link">
            <img id="img" src={call} alt="call" />
            02648465
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.youtube.com/watch?v=oUoge5ED6Yw" className="tab-link">
            <img id="img" src={Profile} alt="profile" />
            PROFILE
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.youtube.com/watch?v=oUoge5ED6Yw" className="tab-link">
            <p id="round">
              <img id="img" src={calendar} alt="calendar" />
              <span className="h1"> BOOK APPOINTMENT</span>
            </p>
          </a>
        </li>
      </ul>
      </div>
      <div className="createApp">
      <h1>CREATE NEW ACCOUNT</h1>
      <div className="form1">
        <form className="formleft">
          {/* name */}
          <div className="column">
            <div className="column-name-text">
              <label>Firstname:</label>
              <input type="text" />
            </div>
            <div className="column-name-text">
              <label>Lastname:</label>
              <input type="text" />
            </div>
          </div>

          {/* tel idLine */}
          <div className="column">
            <div className="column-name-text">
              <label>Tel:</label>
              <input type="text" />
            </div>
            <div className="column-name-text">
              <label>ID line:</label>
              <input type="text" />
            </div>
          </div>

          {/* email */}
          <div className="name-text">
            <label>Email:</label>
            <input type="email" />
          </div>

          {/* password */}
          <div className="name-text">
            <label>Password:</label>
            <input type="password" />
          </div>

          {/* confirm password */}
          <div className="name-text">
            <label>Confirm password:</label>
            <input type="password" />
          </div>

          {/* ID card */}
          <div className="name-text">
            <label>ID Card:</label>
            <input type="text" />
          </div>
        </form>
        <form className="formright">

          {/* religion Nation */}
          <div className="column">
            <div className="column-name-text">
              <label>Religion:</label>
              <input type="text" />
            </div>
            <div className="column-name-text">
              <label>Nationality:</label>
              <input type="text" />
            </div>
          </div>

          {/* dob race */}
          <div className="column">
            <div className="column-name-text">
              <label>Race:</label>
              <input type="text" />
            </div>
            <div className="column-name-text">
              <label>Date of Birth:</label>
              <input type="text" />
            </div>
          </div>

          {/* ouccupation */}
          <div className="name-text">
            <label>Ouccupation:</label>
            <input type="text" />
          </div>

          {/* weight height */}
          <div className="column">
            <div className="column-name-text">
              <label>Weight:</label>
              <input type="number" />
            </div>
            <div className="column-name-text">
              <label>Height:</label>
              <input type="number" />
            </div>
          </div>

          {/* address */}
          <div className="name-text">
            <label>Address:</label>
            <input type="text" />
          </div>

          {/* history */}
          <div className="name-text">
          <label>Allergy History:</label>
          <input type="text" />
          </div>
        </form>
      </div>
      <button className="btn">Sign up</button>
      <ul>
        <span className="bottomClick">
          <li>LOG IN</li>
          <li>FORGOT PASSWORD?</li>
          <li>HOME</li>
        </span>
      </ul>
    </div>
    </div>
    
  );
}

export default App;
