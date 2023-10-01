import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "@pages/home/Home";
import Solutions from "@pages/Solutions";
import NotFound from "@pages/NotFound";
import useHashLinkObserver from "@hooks/useHashLinkObserver";

const App: React.FC = () => {
  const navigate = useNavigate();
  useHashLinkObserver(navigate);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions/:id" element={<Solutions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
