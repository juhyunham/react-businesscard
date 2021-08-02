import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import styles from './app.module.css';
import Login from './components/login/login'
import Maker from './components/maker/maker'

function App({ FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/react-businesscard">
        <Switch>
          <Link to="/"></Link>
          <Route exact={true} path="/">
            <Login authService = {authService}/>
          </Route>
          <Link to="/maker"></Link>
          <Route path="/maker">
            <Maker FileInput= {FileInput} authService = {authService} cardRepository= {cardRepository}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
