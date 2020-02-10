import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import CreateExpense from "./Contents/Expense/CreateExpense";
import NewAccount from "./Contents/GeneralLedger/NewAccount";
import GeneralJournal from "./Contents/GeneralLedger/GeneralJournal";
import SalariesExpense from "./Contents/GeneralLedger/SalariesExpense";
import ClosingBook from "./Contents/GeneralLedger/ClosingBook";
import StartClosingBook from "./Contents/GeneralLedger/StartClosingBook";
import Budgeting from "./Contents/GeneralLedger/Budgeting";
import GoodsService from "./Contents/InventoryProduct/GoodsService";
import ProductRequisition from "./Contents/InventoryProduct/ProductRecuisition";
import Header from "./Navs/Header";
import Sidebar from "./Navs/Sidebar";
import Footer from "./Navs/Footer";

const routing = (
  <Router>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/createexpense" component={CreateExpense} />
          <Route path="/newaccount" component={NewAccount} />
          <Route path="/generaljournal" component={GeneralJournal} />
          <Route path="/salariesexpense" component={SalariesExpense} />
          <Route path="/closingbook" component={ClosingBook} />
          <Route path="/startclosingbook" component={StartClosingBook} />
          <Route path="/budgeting" component={Budgeting} />
          <Route path="/goodsservice" component={GoodsService} />
          <Route path="/productrequisition" component={ProductRequisition} />
        </Switch>
      </div>
    </div>
    <Footer />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
