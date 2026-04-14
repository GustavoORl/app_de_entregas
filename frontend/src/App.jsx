import { BrowserRouter, Routes } from "react-router-dom";
import "/src/App.css";

import userRoutes from "./routes/userRoute.jsx";
import authRoutes from "./routes/authRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes}
        {userRoutes}

      </Routes>
    </BrowserRouter>
  );
}

export default App;