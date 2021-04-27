import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
          <Search />
          <Main />
        </div>
      </div>
    </>

  );
}

export default App;
