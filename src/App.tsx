import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import StudentLogin from "./pages/studentLogin";
import SchoolLogin from "./pages/schoolLogin";
import TeacherLogin from "./pages/teacherLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="student" element={<StudentLogin />} />
        <Route path="school" element={<SchoolLogin />} />
        <Route path="teacher" element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
