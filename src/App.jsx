import { HashRouter, Switch, Route} from 'react-router-dom'
import styles from './app.module.css';
import Login from './components/login/login'
import Maker from './components/maker/maker'

function App({ FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <HashRouter basename="/react-businesscard">
        <Switch>
          <Route exact={true} path="/">
            <Login authService = {authService}/>
          </Route>
          <Route path="/maker">
            <Maker FileInput= {FileInput} authService = {authService} cardRepository= {cardRepository}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
