import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-beige px-20">
        <main className="py-3 min-h-screen">
          <Container>
            <Outlet />
          </Container>
        </main>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
