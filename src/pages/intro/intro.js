import './intro.css';
import { Link } from 'react-scroll';
import machine_sketch_labelled from '../../assets/machine-sketch-labelled.jpg';

function Intro() {
  return (
    <div className="App-section" id="intro">
      <div className="intro-columns">
        <img className="intro-left-image" src={machine_sketch_labelled} alt="machine_sketch" />
        <div className="intro-right">
          <p className="subtitle">The interface I've chosen to study is...</p>
          <h1 className="title">Touchscreen on coffee machine in apartment lobby</h1>
          <ul className="description">
            <li><span>This coffee machine is located on a counter top in an apartment lobby. It dispenses drinks (for free) to residents that use it.</span></li>
            <li><span>The touchscreen (6 inches by 4 inches) is the main interface through which users interact with the machine.</span></li>
            <li><span>The touchscreen intends to functions as an approachable and familiar interface to simplify the user's process of selecting, customizing and dispensing a drink.</span></li>
          </ul>
        </div>
      </div>
      <Link className="bottom-right" activeClass="active" to="closerlook" spy={true} smooth={true}>
        <div className="intro-bottom-right-corner">Next: A closer look</div>
      </Link>
    </div>
  );
}

export default Intro;
  