import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Todo />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
