import React from 'react'
import './sidebar.css'
import aboutpic from './boy.jpg'

export const About = () => {
  return (
    <div className='container about'>
      <div className="row">

        <div className="col-lg-4 col-md-4 col-sm-10 offset-sm-1 image">
          <img src={aboutpic} alt="" />
        </div>

        <div className='col-lg-7 col-md-7 col-sm-12 text'>
          <h4 className='title'>About Us</h4>
          <span className='line'></span>
          <p>Lorem ipsum dolor sit amet consectetur itis,it vel repellat quaerat, assumenda cupiditate eaque quibusdam tempora culpa dolore ab fugiat quae voluptatibus, voluptas quos. Quo magni expedita cupiditate, accusantium, laboriosam enim quis quos dolorum ut incidunt velit fugiat sit ducimus illum rem. Quam, maxime. Voluptatibus quaerat eum reprehenderit eos hic quos iste, aliquid alias, illo corrupti iure ipsum suscipit fuga, obcaecati dignissimos et? Minima, eaque exercitationem tenetur necessitatibus vero repellat consectetur recusandae, est cumque beatae cum similique harum dolorem fuga ullam voluptatum nulla!</p>
        </div>
      </div>

    </div>
  )
}
export default About
