import React from "react";
import {withRouter} from "react-router-dom";

const Sidebar = (props) => {

  const companySettings = () => {
    props.history.push("/companysetting")
  }

  const cashBank = () => {
    props.history.push("/cashbank")
  }

  const sales = () => {
    props.history.push("/sales")
  }

  const purchase = () => {
    props.history.push("/purchase")
  }

  const expense = () => {
    props.history.push("/expense")
  }

  const generalLedger = () => {
    props.history.push("/generalledger")
  }

  const inventory = () => {
    props.history.push("/inventory")
  }

  const assetManagement = () => {
    props.history.push("/assetmanagement")
  }

  const tax = () => {
    props.history.push("/tax")
  }

  const report = () => {
    props.history.push("/reports")
  }

  const contactList = () => {
    props.history.push("/contactlist")
  }

  const settings = () => {
    props.history.push("/setting")
  }

    return (
      <div>
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div className="scroll-sidebar">
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="user-pro">
                  <a
                    className="has-arrow waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/users/1.jpg"
                      alt="user-img"
                      className="img-circle"
                    />
                    <span className="hide-menu">Mark Jeckson</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li>
                      <a href="#">
                        <i className="ti-user" /> My Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-wallet" /> My Balance
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-email" /> Inbox
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-settings" /> Account Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-power-off" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-small-cap">--- MAIN</li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={companySettings}
                    aria-expanded="false"
                  >
                    <i className="ti-crown" />
                    <span className="hide-menu">Company Settings</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={cashBank}
                    aria-expanded="false"
                  >
                    <i className="ti-money" />
                    <span className="hide-menu">Cash/Bank</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={sales}
                    aria-expanded="false"
                  >
                    <i className="ti-credit-card" />
                    <span className="hide-menu">Sales</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={purchase}
                    aria-expanded="false"
                  >
                    <i className="ti-shopping-cart" />
                    <span className="hide-menu">Purchase</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={expense}
                    aria-expanded="false"
                  >
                    <i className="ti-exchange-vertical" />
                    <span className="hide-menu">Expense</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={generalLedger}
                    aria-expanded="false"
                  >
                    <i className="ti-agenda" />
                    <span className="hide-menu">General Ledger</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={inventory}
                    aria-expanded="false"
                  >
                    <i className="ti-archive" />
                    <span className="hide-menu">Inventory</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={assetManagement}
                    aria-expanded="false"
                  >
                    <i className="ti-bookmark-alt" />
                    <span className="hide-menu">Asset Management</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={tax}
                    aria-expanded="false"
                  >
                    <i className="ti-receipt" />
                    <span className="hide-menu">Tax</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={report}
                    aria-expanded="false"
                  >
                    <i className="ti-bar-chart" />
                    <span className="hide-menu">Report</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={contactList}
                    aria-expanded="false"
                  >
                    <i className="ti-id-badge" />
                    <span className="hide-menu">Contact List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="waves-effect waves-dark"
                    onClick={settings}  
                    aria-expanded="false"
                  >
                    <i className="ti-settings" />
                    <span className="hide-menu">Settings</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
      </div>
    );
}

export default withRouter(Sidebar);