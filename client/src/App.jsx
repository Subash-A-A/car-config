import Experience from "./components/Experience";
import HomePage from "./components/HomePage";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="homepage" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
