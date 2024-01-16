/*
In the newer versions of react-router-dom (v6), 
the Switch component has been replaced with the 
Routes component. The Routes component handles 
route matching and rendering.


In React Router v6, the element prop in the Route component 
is used to render the content for a particular route.
*/
import {Routes , Route} from 'react-router-dom'

import '../styles/App.css';

// import components 
import Main from './Main'
import Quiz from "./Quiz";
import Result from "./Result";

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/result" element={<Result />} />
  </Routes>
)

export default App;
