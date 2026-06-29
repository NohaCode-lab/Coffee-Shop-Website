import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f0]">
      {/* Navbar ثابت هنا */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* الصفحة الرئيسية التي تحتوي على كل الأقسام */}
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={ <Contact/>} />

          {/* أي رابط خطأ يوجه المستخدم للرئيسية */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      
      <Footer />
    </div>
  );
}

export default App;