import './touchscreenui.css';
import { Link } from 'react-scroll';
import touchscreen_ui from '../../assets/touchscreen-ui.jpg';

function TouchscreenUI() {
  return (
    <div className="App-section" id="touchscreenui">
      <p className="touchscreenui-right-preface">The touchscreen software presents four screens:</p>
      <div className="touchscreenui-columns">
        <img className="touchscreenui-left-image" src={touchscreen_ui} alt="touchscreen_ui" />
        <ol className="touchscreenui-right">
          <li><span>The main menu displays a selection of 10 fixed drinks, as well as the option of hot water.</span></li>
          <li><span>After selecting a drink, there are options to select drink size as well as caffeine levels (if applicable).</span></li>
          <li><span>After confirmation, the drink begins dispensing, and a "progress bar" is displayed on the screen, alongside a preset video of coffee plantations and beans processing.</span></li>
          <li><span>Once the dispensing is completed, the screen displays a "Enjoy your serving" message and defaults back to the main menu 2 seconds later.</span></li>
        </ol>
      </div>
      <Link className="bottom-right" activeClass="active" to="questions" spy={true} smooth={true}>
        <div className="touchscreenui-bottom-right-corner">Next: Questions & observations</div>
      </Link>
    </div>
  );
}

export default TouchscreenUI;
  