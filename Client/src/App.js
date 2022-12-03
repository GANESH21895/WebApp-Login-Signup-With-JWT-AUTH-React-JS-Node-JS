import { Fragment } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route exact path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 

        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
