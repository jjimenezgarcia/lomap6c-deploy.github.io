import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/pages/UserPage/UserPage";
import { OSMap } from "./components/Map/OSMap";
import { SessionProvider } from "@inrupt/solid-ui-react";
function App() {

  return (
    <div className="App">
      <SessionProvider sessionId="logIn">
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route
            path="/start"
            element={
              <div>
                <NavBar />
                <WelcomePage />
                <Footer />
              </div>
            }
          />
          <Route
            path="/start/map"
            element={
              <div>
                <NavBar />
                <OSMap />
                <Footer />
              </div>
            }
          />
          <Route path="/about" element={<div>Sobre Nosotros</div>} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
      </SessionProvider>
    </div>
  );
}

export default App;
