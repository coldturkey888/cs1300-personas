import './storyboard.css';
import { Link } from 'react-scroll';
import storyboard from '../../assets/storyboard.jpg';

function Storyboard() {
  return (
    <div className="App-section" id="storyboard">
      <p className="storyboard-preface">To illustrate <b>Stubborn Steven</b>'s user journey, I created the following storyboard:</p>
      <img className="storyboard-image" src={storyboard} alt="storyboard" />
      <Link className="bottom-right" activeClass="active" to="reflections" spy={true} smooth={true}>
        <div className="storyboard-bottom-right-corner">Next: Reflections</div>
      </Link>
    </div>
  );
}

export default Storyboard;
  