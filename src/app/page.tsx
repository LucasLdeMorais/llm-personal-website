import Image from "next/image";
import { ThemeProvider } from 'styled-components';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useState } from "react";
import * as Themes from "./constants/ThemeConfig";

export default function Home() {
  
  return (
    <main>
      <h2>Projects</h2>
      <ol>
        <li>PostIts</li>
        <li>Weather</li>
        <li>Rpg Chatboxes</li>
      </ol>
    </main>
  );
}
