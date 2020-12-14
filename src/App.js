import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigator from './components/Navigator'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import TestPage from './pages/test/Test'
import LoginPage from './pages/LoginPage/LoginPage'
import { useSelector } from 'react-redux'
import { SettingsPage } from './pages/SettingsPage/SettingsPage'
import { HomePage } from './pages/HomePage/HomePage'
import { ShoppingCartPage } from './pages/ShoppingCartPage/ShoppingCartPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'

function App() {
    const state = useSelector((store) => store)

    return (
        <Router>
            {state.isLoggedIn && <Navigator />}
            <Switch>
                <Route exact path="/" component={LoginPage}></Route>
                <Route exact path="/home" component={HomePage}></Route>
                <Route exact path="/products" component={ProductsPage}></Route>
                <Route
                    exact
                    path="/shopping-cart"
                    component={ShoppingCartPage}
                ></Route>
                <Route exact path="/test" component={TestPage}></Route>
                <Route exact path="/settings" component={SettingsPage}></Route>
                <Route path="/" component={NotFoundPage}></Route>
            </Switch>
        </Router>
    )
}

export default App
