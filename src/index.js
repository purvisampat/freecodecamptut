import React from 'react';
import ReactDOM from 'react-dom';
// import css
import './index.css';
// import books.js
import { books } from './books';
import  Book  from './Book'


// const Greetings = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

function BookList() { //Component
  return (
    <section className='bookList'>
      {
        books.map((book) => {
        return <Book key={book.id} {...book}/>;
      })}
    </section>
  );
}
ReactDOM.render(<BookList />, document.getElementById('root'));