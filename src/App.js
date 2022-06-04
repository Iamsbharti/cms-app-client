import "./css/App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Home from "./components/Home";
import MultifactorLogin from "./components/MultifactorLogin";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={MultifactorLogin} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
