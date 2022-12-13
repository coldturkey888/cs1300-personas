import './personas.css';
import { Link } from 'react-scroll';
import personas from '../../assets/personas.png';

function Personas() {
  return (
    <div className="App-section" id="personas">
      <p className="personas-preface">Using the collected data, I constructed two personas who each represent a subset of users of the coffee machine touchscreen:</p>
      <img className="personas-image" src={personas} alt="personas" />
      <Link className="bottom-right" activeClass="active" to="storyboard" spy={true} smooth={true}>
        <div className="personas-bottom-right-corner">Next: Storyboard</div>
      </Link>
    </div>
  );
}

export default Personas;
  