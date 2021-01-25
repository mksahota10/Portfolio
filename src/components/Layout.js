import React from 'react'
//import "../../css/components/Layout.css";

const Layout = (props) => {
    return (
      <>
  <div> {props.children}</div>

  <div class="home-title"></div>
      <div class="arrow"></div>
                <span></span>
        <footer className="page-footer">
          <div className="row">
            <div className="col l6 s12">
             
            </div>
            
            <div className="col l4 offset-l2 s12">
              
          </div>
          </div>
        
        {/* <div className="footer-copyright">
          © 2020 Copyright Text</div> */}
         
      </footer>
      </>
    )   
}



export default Layout

//props child, render whatever we pass, it will display here 
//in this case it will render here in props.children 