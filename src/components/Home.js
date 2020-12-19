import React  from 'react'
// import "../../css/components/Home.css";




const Home = () => {
  return (
    
    <div>
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
      <h1 class="home-title">
      <span><b>HI!</b></span>
      <h2> I'm Preet </h2>
      <h3>Full Stack-Developer</h3>
      <span></span>
      </h1>
      {/* <h2>Full-Stack Developer</h2> */}
      

      
    </div>
  
  )

  
}


export default Home
























// import React, {useEffect, useState} from 'react'
// //import axios
// import axios from 'axios'
// //Import Spinner 
// import Spinner from './common/Spinner' 
// //CSS import
// import "../css/components/Home.css";
// // if the div is in the same line as the return you dont need the () in return
// const Home = () => {
//   //initial state
//   const [data, setData] = useState([])
//   //spinner will use the state below
//   const [loading, setLoading] = useState(true)
//   useEffect(()=>{
//     axios.get('https://api.github.com/users/mksahota10/repos').then((response) =>{
//       setData(response.data)
//     }). then(()=> setLoading(false))
//   }, [])
//   const display = () => {
//     //if loading is true (it is defaul to true, return the spinner component), else return everythin else. aka if the page isnt loading anymore, return the actual components
//     if(loading){
//       return <Spinner />;
//     }else{
//       return data.map((card) => (
//         <div key={card.id} className="col s12 m6">
//           <div className="card blue-grey darken-1">
//             <div className="card-content white-text">
//               <span className="card-title">{card.name}</span>
//               <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//             </div>
//             <div className="card-action">
//               <a href="#">This is a link</a>
//               <a href="#">This is a link</a>
//             </div>
//           </div>
//         </div>
//       ))
//     }
// }
//   return (
//     <div className="container">
//       <h2> Preet's Portfolio </h2>
//       <div className="row">{display()}</div>;
//     </div>
//   ) 
// };
// export default Home;
