// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react'
import './App.css';
import star from './star.png'





const App = () => {
  
  const [starr, setStar] = useState(star);

  const onDouble =(e)=>{

   let starr = document.getElementById('imgg');
   starr.style.height = '304px'
   starr.style.width = '304px'
  
  
    setStar(e.target.value)
   
    // var width = document.getElementById("imgg");
    // var currWidth = width.clientWidth;
    // width.style.width = (currWidth + 100) + "px";

    // var height = document.getElementById("imgg");
    // var currHeight = height.clientHeight;
    // height.style.width = (currHeight + 100) + "px";

  }


  return (
    <div id="main">
      <img id='imgg'  src={star} onClick={onDouble} height="300px" width="300px" />
    </div>
  )
}


export default App