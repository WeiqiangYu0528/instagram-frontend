import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Photos from "./photos";

export default function Profile() {
  let isUserSelf:boolean = false;

  return (
    <>
      <Header isUserSelf = {isUserSelf}/>
      <Photos isUserSelf = {isUserSelf}/>
    </>
  );
}
