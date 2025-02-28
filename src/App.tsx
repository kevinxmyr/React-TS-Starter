import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";


function App() {

  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
  </Routes>
}

export default App;
