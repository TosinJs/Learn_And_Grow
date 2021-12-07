import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import QuizPage from "./components/pages/QuizPage";
import { fetchCountries } from "./utils";

const App = () => {
  const [score, setScore] = useState(0)
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const getCountries = async () => {
        const countries = await fetchCountries()
        setCountries(countries)
    }
    getCountries()
}, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage setScore={setScore} score={score} countries={countries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
