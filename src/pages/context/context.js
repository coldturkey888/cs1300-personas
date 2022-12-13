import './context.css';
import { Link } from 'react-scroll';
import machine_sketch_labelled from '../../assets/machine-sketch-labelled.jpg';

function Context() {
  return (
    <div className="App-section" id="context">
      <div className="context-top-left-corner">Personas & Storyboarding</div>
      <p className="context-preface">What is this project?</p>
      <div className="context">
        <p className="context-content">A classic sequence in the UX research process: Choose a real-life interface. Observe users interacting with it. Interview them about their experience. Build personas based on them. Illustrate a storyboard for these personas.</p>
      </div>
      <hr className="solid-hr"></hr>
      <p className="context-preface">What was I trying to achieve through this project?</p>
      <div className="context">
        <ol className="context-content">
          <li className="context-item"><span>To familiarize myself with a basic UX research process</span></li>
          <li className="context-item"><span>To build confidence as a UX researcher observing users and interviewing them</span></li>
          <li className="context-item"><span>To practice the construction of meaningful interview questions which can be used to build a persona</span></li>
          <li className="context-item"><span>To practice the skill of storyboarding as a means of contextualizing a persona</span></li>
        </ol>
      </div>
      <Link className="bottom-right" activeClass="active" to="intro" spy={true} smooth={true}>
        <div className="context-bottom-right-corner">Next: Chosen interface</div>
      </Link>
    </div>
  );
}

export default Context;
  