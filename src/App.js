import Window from './window/window'
import './App.css';
import Auth from './window/auth/auth';
import { Route, Switch, withRouter } from 'react-router';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" render={() => <Auth />} />
        <Route path="/" render={() => <Window />} />
      </Switch>
    </div>
  );
}


export default App 