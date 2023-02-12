import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Photos from "./photos";

export default function Profile() {
  return (
    <>
      <Header />
      <Photos />
    </>
  );
}
