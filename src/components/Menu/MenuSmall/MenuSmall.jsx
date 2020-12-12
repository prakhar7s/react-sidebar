import React from "react";
import "./MenuSmall.css";
import { ReactComponent as Logo } from "../../../resources/icons/app-logo.svg";
import { ReactComponent as Dashboard } from "../../../resources/icons/dashboard.svg";
import { ReactComponent as Search } from "../../../resources/icons/search.svg";
import { ReactComponent as Insights } from "../../../resources/icons/insights.svg";
import { ReactComponent as Docs } from "../../../resources/icons/docs.svg";
import { ReactComponent as Shopping } from "../../../resources/icons/shopping.svg";
import { ReactComponent as Settings } from "../../../resources/icons/settings.svg";
import { ReactComponent as Messages } from "../../../resources/icons/messages.svg";
import { ReactComponent as Person } from "../../../resources/icons/person-outline.svg";

function MenuSmall(props) {
  const iconSize = "30px";
  return (
    <div style={{ ...props.colorSchema }} className="menuSmall">
      <div className="menuSmallLogo">
        <Logo width={iconSize} fill={props.colorSchema.color} />
      </div>
      <div className="menuOptionsMiddle">
        <div className="menuSmallOptions">
          <Dashboard width={iconSize} fill={props.colorSchema.color} />
        </div>

        <div className="menuSmallOptions">
          <Search width={iconSize} fill={props.colorSchema.color} />
        </div>
        <div className="menuSmallOptions">
          <Insights width={iconSize} fill={props.colorSchema.color} />
        </div>
        <div className="menuSmallOptions">
          <Docs width={iconSize} fill={props.colorSchema.color} />
        </div>
      </div>
      <div className="menuOptionsLast">
        <div className="menuSmallOptions">
          <Shopping width={iconSize} fill={props.colorSchema.color} />
        </div>
        <div className="menuSmallOptions">
          <Settings width={iconSize} fill={props.colorSchema.color} />
        </div>
        <div className="menuSmallOptions">
          <Messages width={iconSize} fill={props.colorSchema.color} />
        </div>
      </div>

      <div className="menuSmallUser">
        <Person width={iconSize} fill={props.colorSchema.color} />
      </div>
    </div>
  );
}

export default MenuSmall;
