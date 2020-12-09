import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigator from './components/Navigator';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/" component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
