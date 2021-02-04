import React from 'react'
import Timeline from "./Timeline";
import "../css/components/Projects.css";


const Projects = () => {
    return (

        <div>
           <div class="title">
 <h1> Projects</h1>

 
</div>
      <ul class="collection">
                <a class="first" href="https://mksahota10.github.io/Project-1---Trivia/"  target="_blank"title="photo" id="photo">FINANCE TRIVIA</a>
                <a class="second" href="https://drinkitup.herokuapp.com/"  target="_blank"title="photo" id="photo">DRINK UP</a>
                <a class="third" href="https://fomo-nomo-frontend.surge.sh/" target="_blank" title="photo" id="photo">FOMO-NOMO</a>
                {/* <a class="fourth" href="https://drinkitup.herokuapp.com/"  target="_blank"title="photo" id="photo">FOMO-NOMO</a> */}
              </ul>
            <br></br>
          
        < Timeline/>
        </div>


    )
}

export default Projects
