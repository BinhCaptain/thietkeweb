import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ex0 from './HOMEWORK/Ex0';
import Ex01 from './HOMEWORK/Ex01';
import Ex02 from './HOMEWORK/Ex02';
import Ex03 from './Exercise 3/Ex03';
import Ex04 from './HOMEWORK/Ex04';
import Ex1 from './HOMEWORK/Ex1'; // Corrected the filename case
import Ex11 from './HOMEWORK/Ex11';
import Ex12 from './HOMEWORK/Ex12';
import Ex13 from './HOMEWORK/Ex13';
import Ex21 from './HOMEWORK/Ex21';
import Ex22 from './HOMEWORK/Ex22';
import Ex23 from './HOMEWORK/Ex23';
import Ex3 from './HOMEWORK/Ex3';
import Ex41 from './HOMEWORK/Ex41';
import Ex43 from './HOMEWORK/Ex43';
import Ex46 from './HOMEWORK/Ex46';
import Ex47 from './HOMEWORK/Ex47';
// import DrumKit from './HOMEWORK/DrumKit/DrumKit';
// import Piano from './HOMEWORK/Piano';
// import CV from './HOMEWORK/CV';
// import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ex0 />} />
        <Route path="/Ex01" element={<Ex01 />} />
        <Route path="/Ex02" element={<Ex02 />} />
        <Route path="/Ex03" element={<Ex03 />} />
        <Route path="/Ex04" element={<Ex04 />} />
        <Route path="/Ex1" element={<Ex1 />} />
        <Route path="/Ex11" element={<Ex11 />} />
        <Route path="/Ex12" element={<Ex12 />} />
        <Route path="/Ex13" element={<Ex13 />} />
        <Route path="/Ex21" element={<Ex21 />} />
        <Route path="/Ex22" element={<Ex22 />} />
        <Route path="/Ex23" element={<Ex23 />} />
        <Route path="/Ex3" element={<Ex3 />} />
        <Route path="/Ex41" element={<Ex41 />} />
        <Route path="/Ex43" element={<Ex43 />} />
        <Route path="/Ex46" element={<Ex46 />} />
        <Route path="/Ex47" element={<Ex47 />} />
        {/* <Route path="/DrumKit" element={<DrumKit />} /> */}
        {/* <Route path="/Piano" element={<Piano />} /> */}
        {/* <Route path="/CV" element={<CV />} /> */}
        {/* <Route path="/Portfolio" element={<Portfolio />} />  */}













        
      </Routes>
    </Router>
  );
}

export default App;
