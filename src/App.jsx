// components
import RainbowLine from './components/RainbowLine.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';
// css
import './App.css';

function App({ children }) {
  return (
    <>
      <RainbowLine />
      <NavBar />
      <main>{children}</main>
      <Footer />

      <Background hidden="true" />
    </>
  );
}

export default App;
