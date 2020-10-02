import React from 'react';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <ContactCard 
        name="Cat 1"
        imgUrl="http://placekitten.com/200/300"
        phone="123"
        email="abc@gmail.com"
      />
      <ContactCard 
        name="Cat 2"
        imgUrl="http://placekitten.com/200/400"
        phone="245"
        email="dfe@gmail.com"
      />
      <Todo />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
