import './closerlook.css';
import { Link } from 'react-scroll';
import machine from '../../assets/machine.jpeg';
import machine_sketch_labelled from '../../assets/machine-sketch-labelled.jpg';

function CloserLook() {
  return (
    <div className="App-section" id="closerlook">
      <p className="closerlook-preface">Here's a closer look at the coffee machine:</p>
      <div className="closerlook-columns">
        <img className="closerlook-image" src={machine} alt="machine" />
        <img className="closerlook-image" src={machine_sketch_labelled} alt="machine_sketch" />
      </div>
      <Link className="bottom-right" activeClass="active" to="touchscreenui" spy={true} smooth={true}>
        <div className="closerlook-bottom-right-corner">Next: Touchscreen UI</div>
      </Link>
    </div>
  );
}

export default CloserLook;
  