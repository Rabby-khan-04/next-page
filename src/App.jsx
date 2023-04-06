import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
