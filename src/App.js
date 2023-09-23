import "./App.css";
function App() {
  return (
    <div className="createApp">
      <h1>CREATE NEW ACCOUNT</h1>
      <div className="form1">
        <form className="formleft">
          <span>
            <label>Firstname:</label>
            <label>Lastname:</label>
          </span>
          <span>
          <input type="text" />
          <input type="text" />
          </span>
          <span>
          <label>Tel:</label>
          <label>ID line:</label>
          </span>
          <span>
          <input type="text" />
          <input type="text" />
          </span>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <label>ID Card:</label>
          <input type="text" />
          <span>
          <label>religion:</label>
          <label>Nationality:</label>
          <label>Race:</label>
          </span>
          <span>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          </span>
        </form>
        <form className="formright">
          <label>Ouccupation:</label>
          <input type="text" />
          <label>Date of Birth:</label>
          <input type="text" />
          <span>
          <label>Weight:</label>
          <label>Height:</label>
          </span>
          <span>
          <input type="number" />
          <input type="number" />
          </span>
          <label>Address:</label>
          <input type="text" />
          <label>Allergy History:</label>
          <input type="text" />
        </form>
      </div>
      <button className="btn">Sign up</button>
      <ul>
        <li>LOG IN</li>
        <li>FORGOT PASSWORD?</li>
        <li>HOME</li>
      </ul>
    </div>
  );
}

export default App;
