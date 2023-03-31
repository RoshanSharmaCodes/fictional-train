import "./App.css"
import Testimonial from "./Component/Testimonials/Testimonials"

function App() {
  return (
    <div className="App">
      <div className="pageHeadingDiv">
        <span className="mainHeading">Testimonials</span>
        <br />
        <span className="subHeading">Check out why our clients loves us.....</span>
      </div>
      <Testimonial />
    </div>
  )
}

export default App
