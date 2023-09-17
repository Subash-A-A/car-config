import { useState, useEffect } from "react";
import Experience from "./components/Experience";
import HomePage from "./components/HomePage";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          Component={() => <Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/editor"
          Component={() => <Experience user={currentUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
