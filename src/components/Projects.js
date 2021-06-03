import React from 'react'
import Timeline from "./Timeline";
import "../css/components/Projects.css";


const Projects = () => {
    return (

        <div>
           <div class="projecttitle">
 <h1> Projects</h1>

 
</div>

      <ul class="collection">
                <a class="first" href="https://mksahota10.github.io/Project-1---Trivia/"  target="_blank"title="photo" id="photo"></a>
                <div id="projectname">FINANCE TRIVIA</div>
                <a href="https://github.com/mksahota10/Project-1---Trivia"target="_blank" id="code"> CODE</a>
                <br></br>
                <a class="second" href="https://drinkitup.herokuapp.com/"  target="_blank"title="photo" id="photo"></a>
                <br></br>
                <div id="projectname">  DRINK UP<br></br> </div>
                <br></br>
                <a href="https://github.com/mksahota10/project2-DrinkUp"target="_blank" id="code"> CODE</a>
                <br></br>
                <a class="third" href="https://fomo-nomo-frontend.surge.sh/" target="_blank" title="photo" id="photo"></a>
                <div id="projectname">FOMO-NOMO</div>
                <a href="https://github.com/orgs/SFX818/teams/brogrammers/repositories"target="_blank" id="code"> CODE</a>
                <a class="fourth" href="https://mksahota10.github.io/Store/"  target="_blank"title="photo" id="photo"></a>
                <div id="projectname">WICKS N' MORE</div>
                <a href="https://github.com/mksahota10/Store/tree/main/ecommerce"target="_blank" id="code"> CODE</a>
                
              </ul>
            <br></br>
            <div>
            
            
            
            </div>
        < Timeline/>
        </div>


    )
}

export default Projects
