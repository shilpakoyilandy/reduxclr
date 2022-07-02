import logo from './logo.svg';
import './App.css';
import Profile from './pages/profile/Profile';
import Clrpic from './pages/clrpick/Clrpic';

function App() {
  return (
    <>
    <div style={{backgroundColor:"grey",textAlign:"center"}}>
   <div>
     <Profile/>
   </div>
   <div><Clrpic/></div>
   </div>
   </>
  );
}

export default App;
