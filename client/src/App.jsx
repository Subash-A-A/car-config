import { useState, useEffect } from "react";
import Experience from "./components/Experience";
import HomePage from "./components/HomePage";
import Login from "./components/login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const cookies = new Cookies();

  useEffect(() => {
    console.log(currentUser);
    console.log(cookies.get("user"));
  }, [currentUser]);

  return (
    <>
      {cookies.get("user") != null && (
        <button
          id="logout"
          className="button"
          onClick={() => {
            cookies.set("user", null, "/");
            navigate("/");
          }}
        >
          Log out
        </button>
      )}
      <Routes>
        <Route
          path="/"
          Component={() => <Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/home" Component={() => <HomePage />} />
        <Route
          path="/editor"
          Component={() => <Experience user={cookies.get("user")} />}
        />
      </Routes>
    </>
  );
}

export default App;
