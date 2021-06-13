import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListProduct from "../src/Component/ListProduct";
import Navbar from "../src/Component/Navbar";
import LoginForm from "../src/Component/LoginForm";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/list_product" component={ListProduct} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
