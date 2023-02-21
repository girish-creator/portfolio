import './App.css';
import { Article, Navbar } from './components';
import { experience, Footer, Header, About, Subscribe, Skill, Projects } from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Projects />
      </div>
      <Skill />
      <experience />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

