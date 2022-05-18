import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewProduct from "./components/NewProduct";
import AllProducts from "./components/AllProducts";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <AllProducts/>} />
          <Route path="/nuevo" exact render={() => <NewProduct/>} />          
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
