import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  //possibily capitalize the first letter here instead
  const [pages] = useState([
    { name: "about me", component: <About/>},
    { name: "portfolio", component: <Portfolio/>},
    // { name: "contact", component: <Contact/>},
    // { name: "resume", component: <Resume/>}
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
