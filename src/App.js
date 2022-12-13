import './App.css';
import Context from './pages/context/context';
import Intro from './pages/intro/intro';
import CloserLook from './pages/closerlook/closerlook';
import TouchscreenUI from './pages/touchscreenui/touchscreenui';
import Questions from './pages/questions/questions';
import Personas from './pages/personas/personas';
import Storyboard from './pages/storyboard/storyboard';
import Reflections from './pages/reflections/reflections';

function App() {
  return (
    <div className="App">
      <Context />
      <Intro />
      <CloserLook />
      <TouchscreenUI />
      <Questions />
      <Personas />
      <Storyboard />
      <Reflections />
    </div>
  );
}

export default App;
