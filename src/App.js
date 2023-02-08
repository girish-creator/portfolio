import './App.css';
import { Article, Navbar } from './components';
import { Experiance, Footer, Header, About, Subscribe, Skill, Portfolios } from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Portfolios />
      <Skill />
      <Experiance />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

