
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from "./pages/NoPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MovieGrid from "./pages/MovieGrid";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MovieList";
import MovieTicketPlan from "./pages/MovieTicketPlan";
import MovieSeatPlan from "./pages/MovieSeatPlan";
import MovieCheckout from "./pages/MovieCheckout";
import Popcorn from "./pages/Popcorn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movie-grid' element={<MovieGrid />} />
            <Route path='/movie-details' element={<MovieDetails />} />
            <Route path='/movie-list' element={<MovieList />} />
            <Route path='/movie-ticket-plan' element={<MovieTicketPlan />} />
            <Route path='/movie-seat-plan' element={<MovieSeatPlan />} />
            <Route path='/movie-checkout' element={<MovieCheckout />} />
            <Route path='/popcorn' element={<Popcorn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
