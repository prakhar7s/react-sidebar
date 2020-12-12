import React from "react";
import "./MenuLarge.css";
import { ReactComponent as Logo } from "../../../resources/icons/app-logo.svg";
import { ReactComponent as Dashboard } from "../../../resources/icons/dashboard.svg";
import { ReactComponent as Search } from "../../../resources/icons/search.svg";
import { ReactComponent as Insights } from "../../../resources/icons/insights.svg";
import { ReactComponent as Docs } from "../../../resources/icons/docs.svg";
import { ReactComponent as Shopping } from "../../../resources/icons/shopping.svg";
import { ReactComponent as Settings } from "../../../resources/icons/settings.svg";
import { ReactComponent as Messages } from "../../../resources/icons/messages.svg";
import { ReactComponent as User } from "../../../resources/icons/person-outline.svg";

const MenuLarge = (props) => {
  const iconSize = "30px";
  return (
    <div style={{ ...props.colorSchema }} className="menuLarge">
      <div className="menuLargeLogo">
        <Logo width={iconSize} fill={props.colorSchema.color} />
        <h2>App Name</h2>
      </div>
      <div className="menuLargeMiddle">
        <div className="menuLargeOptions">
          <Dashboard width={iconSize} fill={props.colorSchema.color} />
          <h2>Dashboard</h2>
        </div>
        <div className="menuLargeOptions">
          <Search width={iconSize} fill={props.colorSchema.color} />
          <h2>Search</h2>
        </div>
        <div className="menuLargeOptions">
          <Insights width={iconSize} fill={props.colorSchema.color} />
          <h2>Insights</h2>
        </div>
        <div className="menuLargeOptions">
          <Docs width={iconSize} fill={props.colorSchema.color} />
          <h2>Docs</h2>
        </div>
      </div>
      <div className="menuLargeLast">
        <div className="menuLargeOptions">
          <Shopping width={iconSize} fill={props.colorSchema.color} />
          <h2>Shopping</h2>
        </div>
        <div className="menuLargeOptions">
          <Settings width={iconSize} fill={props.colorSchema.color} />
          <h2>Settings</h2>
        </div>
        <div className="menuLargeOptions">
          <Messages width={iconSize} fill={props.colorSchema.color} />
          <h2>Messages</h2>
        </div>
      </div>
      <div className="menuLargeUser">
        <User width={iconSize} fill={props.colorSchema.color} />
        <h2>Account</h2>
      </div>
    </div>
  );
};

export default MenuLarge;
