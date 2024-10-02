import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Postas from "./components/Posts";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Comments from "./components/Comments";
import Users from "./components/Users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Postas />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
