import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewCandidato from "./components/NewCandidato";
import AllCandidatos from "./components/AllCandidatos";
import OneCandidato from "./components/OneCandidato";
import EditCandidato from "./components/EditCandidato";
import Principal from "./components/Principal";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Principal/>} />
          <Route path="/all" exact render={() => <AllCandidatos/>} />
          <Route path="/nuevo" exact render={() => <NewCandidato/>} />
          <Route path="/candidato/:id" exact render={(routeProps)=> <OneCandidato {...routeProps}/>} />
          <Route path="/candidato/edit/:id" render={() => <EditCandidato />} />          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
