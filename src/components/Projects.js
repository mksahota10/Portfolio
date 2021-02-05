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
                <br></br>
                <br></br>
                <a href="https://github.com/mksahota10/Project-1---Trivia"target="_blank" id="code"> CODE</a>
                <a class="second" href="https://drinkitup.herokuapp.com/"  target="_blank"title="photo" id="photo">DRINK UP</a>
                <br></br>
                <a href="https://github.com/mksahota10/project2-DrinkUp"target="_blank" id="code1"> CODE</a>
                <a class="third" href="https://fomo-nomo-frontend.surge.sh/" target="_blank" title="photo" id="photo">FOMO-NOMO</a>
                <a href="https://github.com/orgs/SFX818/teams/brogrammers/repositories"target="_blank" id="code2"> CODE</a>
                {/* <a class="fourth" href="https://drinkitup.herokuapp.com/"  target="_blank"title="photo" id="photo">FOMO-NOMO</a> */}
              </ul>
            <br></br>
            <div>
            
            
            
            </div>
        < Timeline/>
        </div>


    )
}

export default Projects
