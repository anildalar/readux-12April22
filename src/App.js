import logo from './logo.svg';
import './App.css';
import { connect,useDispatch } from 'react-redux';

function App(props) {
  //const dispatch = useDispatch()

  //2. Function Defination
  let changeMyName = (e) =>{
    //alert('okok');
    //console.log(props);
    props.a();
    //dispatch({ type:"abc",name:'Kiran',surname:'Rahtore'});
  }


  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {props.x.fullname}
        {console.log(props)}
        <button onClick={(e)=>{ changeMyName(e) }}>Change My Name</button>
      </header>
    </div>
  );
}
let mapStateToProps = (state)=>{ // StoreObject ===> state
   return {
     x:state
   };
}

let mapDispatchToProps = (dispatch)=>{ // StoreObject ===> dispatch
  return {
    a:()=>{ 
      //alert('OKOKOKKOKOK');
      dispatch({ type:"abc",name:'Kiran',surname:'Rahtore'}); 
    },
    b:()=>{ dispatch({ type:"def",name:'Shivkanya',surname:'Gurjar'}) }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
