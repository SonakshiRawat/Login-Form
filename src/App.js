import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="forms">
        <div className="left">
          <div className="head">Welcome Back</div>
          <div className="sub">Please Enter your details </div>
          <Form />
        </div>

        <div className="right">
          <img src="images/images.jpg" alt="" className="illustration" />
        </div>
      </div>
    </div>
  );
}

export default App;
