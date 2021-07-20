import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuNav from './components/MenuNav';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
     <HashRouter>
     <MenuNav />
     <Header />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/home" component={Home} />
       <Route exact path="/blog" component={Blog} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/login" component={Login} />
     </Switch>
     <Footer />
     </HashRouter>
     
    </div>
  );
}

export default App;
