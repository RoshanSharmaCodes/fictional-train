import "./TestimonialsCard.css"

const TestimonialCard = () => {
  return (
    <div className="cardContainer">
        <img src="../Images/Quotes.svg" alt="quotes" className="quoteMark"/>
      <div className="cardInfoDiv">
        <span className="testimonialName">Alex Chan</span><br/>
        <span>CEO of <span className="companyName">Lambda Test</span></span>
        <div className="socialIconDiv">
            <img className="socialIcons" src="../Images/Twitter.svg" alt="Twitter"/>
            <img className="socialIcons" src="../Images/Linkedin.svg" alt="Linkedin"/>
            <img className="socialIcons" src="../Images/Instagram.svg" alt="Instagram"/>
        </div>
      </div>
      <div className="cardDescDiv">
        <span>
          Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garret
          twenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an. On otherwise no admitting to
          suspicion furniture it.
        </span>
      </div>
      <div className="cardFooterDiv">
      <img src="../Images/Wave1.svg" alt="Wave1" className="cardWaveImage" />
        <div className="cardProfileImageDiv">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
            className="cardProfileImage"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
