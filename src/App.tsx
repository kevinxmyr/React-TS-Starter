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
// echo "# React-TS-Starter" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/kevinxmyr/React-TS-Starter.git
// git push -u origin main