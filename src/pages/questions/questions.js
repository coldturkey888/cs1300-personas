import './questions.css';
import { Link } from 'react-scroll';

function Questions() {
  return (
    <div className="App-section" id="questions">
      <p className="questions-preface">To gain a better understanding of how users behave when interacting with the touchscreen interface, I observed and subsequently interviewed three users on their experiences:</p>
      <div className="questions-rows">
        <div className="questions">
          <div className="questions-left">
            <h4 className="questions-title">Interview questions:</h4>
            <ol className="questions-content">
              <li><span>Are you satisfied with the responsiveness of the touchscreen?</span></li>
              <li><span>How easy do you find it to choose your desired drink using the touchscreen?</span></li>
              <li><span>How does the experience compare with other coffee machines without touchscreens?</span></li>
              <li><span>What are the best and worst parts about using the touchscreen?</span></li>
              <li><span>Does the screen always display reliable information?</span></li>
            </ol>
          </div>
          <div className="questions-right">
            <h4 className="questions-title">Summary of responses:</h4>
            <ul className="questions-content">
              <li><span>Users appreciated the responsiveness and familiarity of the touchscreen.</span></li>
              <li><span>Users found the touchscreen software "simple to use", "straightforward" and "fool-proof".</span></li>
              <li><span>Users appreciated the fact that the screen displays a "progress bar" while the drink is being dispensed. However, one user mentioned that despite it, the screen does not display the waiting time for the drink to be completely dispensed.</span></li>
              <li><span>Users identified a frequent struggle: the screen does not inform the users if the machine is out of any ingredients (e.g. milk, beans). If any ingredient is missing, the drink would not be as expected. For example, choosing hot chocolate when the machine had no milk would result in the dispensing of hot water.</span></li>
            </ul>
          </div>
        </div>
        <div className="observations">
        <h4 className="observations-title">Observations:</h4>
          <ol className="observations-content">
            <li><span>Most users completed their drink selection within 15 seconds of approaching the touchscreen.</span></li>
            <li><span>Few users used the "Return to main menu" button.</span></li>
            <li><span>Some users continuously switched between different drink sizes before deciding on one.</span></li>
            <li><span>Most users looked away from the screen (and the machine entirely) while waiting for the dispensing to complete.</span></li>
            <li><span>Users who chose hot chocolate poured away their drink after realizing that the dispensed drink was just hot water.</span></li>
          </ol>
        </div>
      </div>
      <Link className="bottom-right" activeClass="active" to="personas" spy={true} smooth={true}>
        <div className="questions-bottom-right-corner">Next: Personas</div>
      </Link>
    </div>
  );
}

export default Questions;
