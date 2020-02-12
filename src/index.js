import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import CreateExpense from "./Contents/Expense/CreateExpense";
import NewAccount from "./Contents/GeneralLedger/NewAccount";
import {GeneralLedger} from "./Contents/GeneralLedger/GeneralLedger";
import GeneralJournal from "./Contents/GeneralLedger/GeneralJournal";
import SalariesExpense from "./Contents/GeneralLedger/SalariesExpense";
import ClosingBook from "./Contents/GeneralLedger/ClosingBook";
import StartClosingBook from "./Contents/GeneralLedger/StartClosingBook";
import Budgeting from "./Contents/GeneralLedger/Budgeting";
import GoodsService from "./Contents/InventoryProduct/GoodsService";
import ProductRequisition from "./Contents/InventoryProduct/ProductRequisition";
import Header from "./Navs/Header";
import Sidebar from "./Navs/Sidebar";
import Footer from "./Navs/Footer";

import { CompanySetting } from './Contents/CompanySetting/CompanySetting';
import { CashBank } from './Contents/CashBank/CashBank';
import { TransferBank } from './Contents/CashBank/TransferBank';
import { ReceiveMoney } from './Contents/CashBank/ReceiveMoney';
import { PayMoney } from './Contents/CashBank/PayMoney';
import { Sales } from './Contents/Sales/Sales';
import { SalesOrder } from './Contents/Sales/SalesOrder';
import { SalesDelivery } from './Contents/Sales/SalesDelivery';
import { SalesQuote } from './Contents/Sales/SalesQuote';
import { SalesReturn } from './Contents/Sales/SalesReturn';
import { PriceAdjusment } from './Contents/Sales/PriceAdjusment';
import { Discount } from './Contents/Sales/Discount';
import { ComissionSales } from './Contents/Sales/ComissionSales';
import { Purchase } from './Contents/Purchase/Purchase';
import { PurchaseInvoice } from './Contents/Purchase/PurchaseInvoice';
import { PurchaseDelivery } from './Contents/Purchase/PurchaseDelivery';
import { PurchaseQuote } from './Contents/Purchase/PurchaseQuote';
import { PurchaseReturn } from './Contents/Purchase/PurchaseReturn';
import { PurchaseOrder } from './Contents/Purchase/PurchaseOrder';
import { SupplierPrice } from './Contents/Purchase/SupplierPrice';

import { Expense } from './Contents/Expense/Expense';
import { InventoryProduct } from './Contents/InventoryProduct/InventoryProduct';
import { AssetManagement } from './Contents/AssetManagement/AssetManagement';
import { Tax } from './Contents/Tax/Tax';
import { Reports } from './Contents/Reports/Reports';
import { ContactList } from './Contents/ContactList/ContactList';
import { Costumer } from './Contents/ContactList/Costumer';
import { Employee } from './Contents/ContactList/Employee';
import { Supplier } from './Contents/ContactList/Supplier';
import { Other } from './Contents/ContactList/Other';
import { Setting } from './Contents/Setting/Setting';
import { SignIn } from './Contents/Auth/SignIn';
import { SignUp } from './Contents/Auth/SignUp';
import { PrepaidPurchase } from './Contents/Purchase/PrepaidPurchase';
import { RecordAsset } from "./Contents/AssetManagement/RecordAsset";
import { DisposalAsset } from "./Contents/AssetManagement/DisposalAsset";
import { Depreciation } from "./Contents/AssetManagement/Depreciation";
import JobOrder from "./Contents/InventoryProduct/JobOrder";
import MaterialAddition from "./Contents/InventoryProduct/MaterialAddition";
import ProductCategory from "./Contents/InventoryProduct/ProductCategory";
import StockAdjustment from "./Contents/InventoryProduct/StockAdjustment";
import ProductUnit from "./Contents/InventoryProduct/ProductUnit";
import Warehouse from "./Contents/InventoryProduct/Warehouse";
import WarehouseTransfer from "./Contents/InventoryProduct/WarehouseTransfer";
import ProductMinimum from "./Contents/InventoryProduct/ProductMinimumStock";

const routing = (
  <Router>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
      <div className="container-fluid">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/companysetting" component={CompanySetting} />
          <Route path="/cashbank" component={CashBank} />
          <Route path="/sales" component={Sales} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/expense" component={Expense} />
          <Route path="/inventory" component={InventoryProduct} />
          <Route path="/joborder" component={JobOrder} />
          <Route path="/materialaddition" component={MaterialAddition} />
          <Route path="/productcategory" component={ProductCategory} />
          <Route path="/productminimum" component={ProductMinimum} />
          <Route path="/productunit" component={ProductUnit} />
          <Route path="/produtrequisition" component={ProductRequisition} />
          <Route path="/stockadjustment" component={StockAdjustment} />
          <Route path="/warehouse" component={Warehouse} />
          <Route path="/warehousetransfer" component={WarehouseTransfer} />
          <Route path="/assetmanagement" component={AssetManagement} />
          <Route path="/recordasset" component={RecordAsset} />
          <Route path="/disposalasset" component={DisposalAsset} />
          <Route path="/depreciation" component={Depreciation} />
          <Route path="/tax" component={Tax} />
          <Route path="/reports" component={Reports} />
          <Route path="/contactlist" component={ContactList} />
          <Route path="/costumer" component={Costumer} />
          <Route path="/employee" component={Employee} />
          <Route path="/supplier" component={Supplier} />
          <Route path="/other" component={Other} />
          <Route path="/setting" component={Setting} /> 
          <Route path="/transferbank" component={TransferBank} />
          <Route path="/receivemoney" component={ReceiveMoney} />
          <Route path="/paymoney" component={PayMoney} />
          <Route path="/salesorder" component={SalesOrder} />
          <Route path="/salesdelivery" component={SalesDelivery} />
          <Route path="/salesquote" component={SalesQuote} />
          <Route path="/salesreturn" component={SalesReturn} />
          <Route path="/priceadjusment" component={PriceAdjusment} />
          <Route path="/discount" component={Discount} />
          <Route path="/comissionsales" component={ComissionSales} />
          <Route path="/purchaseinvoice" component={PurchaseInvoice} />
          <Route path="/purchaseorder" component={PurchaseOrder} />
          <Route path="/purchasedelivery" component={PurchaseDelivery} />
          <Route path="/purchasequote" component={PurchaseQuote} />
          <Route path="/purchasereturn" component={PurchaseReturn} />
          <Route path="/supplierprice" component={SupplierPrice} />
          <Route path="/prepaidpurchase" component={PrepaidPurchase} />

          <Route exact path="/" component={App} />
          <Route path="/createexpense" component={CreateExpense} />
          <Route path="/newaccount" component={NewAccount} />
          <Route path="/generalledger" component={GeneralLedger} />
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
