import './reflections.css';
import { Link } from 'react-scroll';

function Reflections() {
  return (
    <div className="App-section" id="reflections">
      <p className="reflections-preface">Here are some reflections I've had after completing this activity:</p>
      <div className="reflections">
        <ol className="reflections-content">
          <li className="reflections-item"><span>The process of constructing personas and storyboards does indeed encourage designers to put themselves in the shoes of the users. This is likely because we find it easier to empathize with a person when they are part of a narrative.</span></li>
          <li className="reflections-item"><span>A user's needs and wants aren't always obvious. It is often convenient (and tempting) to make assumptions about their needs and wants, but in order to paint a more realistic picture, UX researchers should instead ask questions and observe users in order to properly understand their needs.</span></li>
          <li className="reflections-item"><span>An interface should be designed to be as intuitive as possible, i.e. the allowance for error should be minimized. If any part of the interface potentially introduces confusion, it might be worth reconsidering its conceptual model.</span></li>
          <li className="reflections-item"><span>It might be worth considering different design elements to communicate different information. For example, a "Time remaining" countdown could have provided an exact waiting time, as compared to the progress bar. Unless, of course, the intention of the design was to hide that information.</span></li>
          <li className="reflections-item"><span>This activity involved only a small number of user observations and interviews. I imagine that a professional UX research process would be on a larger scale, involving more users and more questions, and considering additional factors that could influence each user's behaviors (such as the time of day, their daily schedules, etc.)</span></li>
          <li className="reflections-item"><span>Students seem to love getting coffee... even in the evening! (Can't say I didn't do the same.)</span></li>
        </ol>
      </div>
      <Link className="bottom-right" activeClass="active" to="context" spy={true} smooth={true}>
        <div className="reflections-bottom-right-corner">Back to the top</div>
      </Link>
    </div>
  );
}

export default Reflections;
