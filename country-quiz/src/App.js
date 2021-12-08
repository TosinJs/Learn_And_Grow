import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/homepage/HomeComponent";
import QuizComponent from "./pages/quizpage/QuizComponent";
import ResultComponent from "./pages/resultpage/ResultComponent";

const App = () => {
  const [score, setScore] = useState(0)
  return (
    <div className="body">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent score={score} setScore={setScore} />} />
        <Route path="/result" element={<ResultComponent score={score} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
