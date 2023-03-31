import TestimonialsCard from "../TestimonialCard/TestimonialsCard"
import "./Testimonials.css"

const Testimonial = () =>{
    return(
        <div className="testimonialContainer">
            <TestimonialsCard/>
            <TestimonialsCard/>
            <TestimonialsCard/>
        </div>
    )
}

export default Testimonial