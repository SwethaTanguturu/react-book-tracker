import logo from './logo.svg';
import { BookProvider } from './context/BookContext';
import { LoggerProvider } from './context/LoggerContext';
import BookList from './BookList';
import './App.css';

function App() {
  return (
   
    <LoggerProvider>
    <BookProvider>
      <BookList />
    </BookProvider>
  </LoggerProvider>
  
  );
}

export default App;
