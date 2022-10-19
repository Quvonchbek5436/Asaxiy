import React from "react";
import Layout from "./layout/layout";
import Payment from "./pages/payment/payment";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Likes from "./pages/likes/likes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/save/favourites" element={<Likes />} />
        {/*<Route path="/" element={<Layout />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
