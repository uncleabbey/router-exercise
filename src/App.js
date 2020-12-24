import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Colors from './Colors';
import Color from './Color';
import AddColor from './AddColor';




function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={"/"} component={Colors} />
          <Route exact path={"/colors/new"} component={AddColor} />
          <Route exact path={"/colors"} component={Colors} />
          <Route exact path={"/colors/:color"} component={Color} />
          <Route component={Colors} />
          
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
