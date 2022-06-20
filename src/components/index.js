import Login from "./login"
import {HashRouter, Route} from "react-router-dom"
import NavBar from "./navbar"
import Home from "./home"
import CreateAccount from "./createaccount"
import Deposit from "./deposit"
// import Withdraw from "./withdraw"
// import Balance from "./balance"
// import AllData from "./alldata"



function Spa() {
  console.log("HIT THE SPA")
  return (
    <HashRouter hashType="hashbang">
      <NavBar/>
     
      {/* <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}> */}
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          {/* <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} /> */}
          {/* <Route path="/alldata/" component={AllData} /> */}
        </div>
      {/* </UserContext.Provider>       */}
    </HashRouter>
  );
}


/*
(default) slash /#/  /#/ 
noslash /#   /# 
hashbang  /#!/   /#!/
*/



/* ReactDOM.render(
  <HashRouter hashType="hashbang">
   <Spa/>
</HashRouter>
document.getElementById('root')
);
*/


export default Spa