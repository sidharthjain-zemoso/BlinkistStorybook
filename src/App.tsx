import { ThemeProvider } from "@mui/material/styles";
import MyLibrary from "./pages/MyLibrary";
import { theme } from "./themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entrepreneurship from "./pages/Entrepreneurship";
import BookDetailView from "./pages/BookDetailView";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/book/:id" element={<BookDetailView />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
