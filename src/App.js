import React, { Component } from 'react';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Product from './components/Product';
import TodoItem from './components/TodoItem';
import products from './constants/ProductList';
import todos from './constants/TodoList';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       todos: todos
    };

    this.todoChange = this.todoChange.bind(this);
  }

  todoChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      });

      console.log(updatedTodos);
      
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const productsComponent = products.map(product => <Product key={product.id} product={product} />);
    const todosComponent = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} todoChange={this.todoChange} />);
    return (
      <div>
        {todosComponent}
        {productsComponent}
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
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
