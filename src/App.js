import "./App.css";
function App() {
  return (
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
          <div className="name-text">
            <label>Address:</label>
            <input type="text" />
          </div>
          <div className="name-text">
          <label>Allergy History:</label>
          <input type="text" />
          </div>
          {/*
          
           */}
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
  );
}

export default App;
