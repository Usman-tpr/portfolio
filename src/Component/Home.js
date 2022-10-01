import React from 'react'
import './sidebar.css'
import Typewriter from 'typewriter-effect';
import mycv from './b.pdf'
import { About } from './About';

export const Home = () => {
  return (
    <React.Fragment>
      <div className=' container-fluid header'>
        <div className="container header-content">
          <h2>Hi I'm </h2>
          <h3>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Developer', 'Software Engineer'],
                autoStart: true,
                loop: true,
                delay: 3
              }}
            />
          </h3>
          <div className="buttons">
            <div className="hire">
              Hire Me
            </div>
            <div className="get">
              <a href={mycv} download="Usman CV"> Get Resume</a>
            </div>
          </div>
        </div>

      </div>

    </React.Fragment>

  )
}
export default Home;
