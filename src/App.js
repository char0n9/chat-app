import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     
        <Contact name="edward" online="true" avatar="https://randomuser.me/api/portraits/men/54.jpg" />
        <Contact name="Sharon" online={false} avatar="https://randomuser.me/api/portraits/women/4.jpg" />
        <Contact name="Lagertha" online="true" avatar="https://randomuser.me/api/portraits/women/77.jpg" />
        
    </div>
  );
}


export default App;
