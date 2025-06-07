import Particles from './reactbits/Particles.jsx';
//css
import '../styles/Background.css';

export default function Background() {
  return (
    <div className="background ">
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
  );
}
