import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Extra from './components/Extra';
import Downloads from './components/Downloads';


function App() {
  //possibily capitalize the first letter here instead
  const [pages] = useState([
    { name: "about", component: <About/>, title: "about me"},
    { name: "portfolio", component: <Portfolio/>, title: "my projects"},
    { name: "contact", component: <Contact/>, title: "contact me"},
    { name: "extra", component: <Extra/>, title: "extras and downloads"},
    // { name: "downloads", component: <Downloads/>}
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Header>
      <div class="main_container">
        <Footer />
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      </div>
    </div>
  );
}

export default App;
