import './App.css';
import Testimonial from './components/Testimonial';
import reviews from "./data";

function App() {
  return (
    <div>
      <h1> Our Testimonials</h1>
      <div></div>
      <Testimonial reviews = {reviews}/>
    </div>
  );
}

export default App;
