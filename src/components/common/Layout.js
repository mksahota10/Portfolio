import React from 'react'
//import "../../css/components/Layout.css";

const Layout = (props) => {
    return (
      
        <div class="wrapper">
        

  <div> {props.children}</div>
 

        
        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              {/* <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
            </div>
            <div className="col l4 offset-l2 s12">
              {/* <h5 className="white-text">Projects</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://mksahota10.github.io/Project-1---Trivia/">Trivia</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul> */}
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
        

        <div className="footer-copyright">
          <div className="container">
          © 2020 Copyright Text
          {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
          </div>
        </div>
      </footer>
      </div>
    )






    
}



export default Layout

//props child, render whatever we pass, it will display here 
//in this case it will render here in props.children 