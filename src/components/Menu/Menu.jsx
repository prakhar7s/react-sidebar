import React from "react";
import "./Menu.css";
import MenuLarge from "./MenuLarge/MenuLarge";
import MenuSmall from "./MenuSmall/MenuSmall";

const Menu = (props) => {
  return (
    <>
      <MenuSmall colorSchema={props} />
      <MenuLarge colorSchema={props} />
    </>
  );
};

export default Menu;
