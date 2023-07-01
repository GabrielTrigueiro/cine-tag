import React from "react";
import { Link } from "react-router-dom";

import styles from "./Cabecalho.module.css";
import logo from "logo.png";
import CabecalhoLink from "../CabecalhoLink";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}
