import "./App.css";
import UsersPage from "./pages/UsersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        {/* define more routes here */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
