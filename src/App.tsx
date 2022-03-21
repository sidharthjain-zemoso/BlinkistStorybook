import { ThemeProvider } from "@mui/material/styles";
import MyLibrary from "./pages/MyLibrary";
import { theme } from "./themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entrepreneurship from "./pages/Entrepreneurship";
import BookDetailView from "./pages/BookDetailView";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";

function App() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <MyLibrary /> : <Login />}
          />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route
            path="/book/:id"
            element={isAuthenticated ? <BookDetailView /> : <Login />}
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
