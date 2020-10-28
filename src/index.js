import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const Greetings = () => {
//   return React.createElement('h1', {}, 'hello world');
// }
const book1 = {
  img: 'https://m.media-amazon.com/images/I/51Ap7cBapFL._AC_UY218_.jpg',
  title: 'Gone With the Wind',
  author: 'by Margaret Mitchell'
}
const book2 = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51UNiQJBLEL._AC_US218_FMwebp_QL70_.jpg',
  title: 'Legend of Suheldev: The King Who Saved India',
  author: 'by Amish'
}
function BookList() { //Component
  return (
    <section className='bookList'>
      <Book img={book1.img} title={book1.title} author={book1.author}/>
      <Book img={book2.img} title={book2.title} author={book2.author}/>
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt=' ' />
      <h1>{props.title}</h1>
      <h4>{props.author} </h4>
    </article>
  )
}
ReactDOM.render(<BookList/>, document.getElementById('root'))



