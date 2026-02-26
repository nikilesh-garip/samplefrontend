import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Demo from "./Demo";
import Users from "./users";
import Register from "./reg";


function App() {
  return (
    <>
    <h1>APPPPP</h1>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reg" element={<Register/>} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
