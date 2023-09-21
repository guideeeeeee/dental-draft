import './App.css'
function App() {
  return (
    <div className="createApp"> 
      <h1>CREATE NEW ACCOUNT</h1>
      <div className="form1">
        <form className="formleft">
          <label>Firstname:</label>
          <input type="text" />
          <label>Lastname:</label>
          <input type="text" />
          <label>Tel:</label>
          <input type="text" />
          <label>ID line:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <label>ID Card:</label>
          <input type="text" />
          <label>religion:</label>
          <input type="text" />
          <label>Nationality:</label>
          <input type="text" />
          <label>Race:</label>
          <input type="text" />
        </form>
        <form className="formright">
          <label>Ouccupation:</label>
          <input type="text" />
          <label>Date of Birth:</label>
          <input type="text" />
          <label>Weight:</label>
          <input type="number" />
          <label>Height:</label>
          <input type="number" />
          <label>Address</label>
          <input type="text" />
          <label>Allergy History:</label>
          <input type="text" />
        </form>
      </div>
      <button className="btn">Sign up</button>
    </div>
  );
}

export default App;