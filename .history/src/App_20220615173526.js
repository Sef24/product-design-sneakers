import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <main>
      <Nav />
      <Modal openModal={openModal} closeModal={closeModal} />
      <Product />
    </main>
  );
}

export default App;
