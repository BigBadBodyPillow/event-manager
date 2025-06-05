// components
import RainbowLine from './components/RainbowLine.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
//-----background
import Particles from './components/background/Particles.jsx';
// css
import './App.css';

function App({ children }) {
  return (
    <>
      <div className="background">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={75}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      <RainbowLine />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
