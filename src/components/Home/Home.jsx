import React from "react";
import { Intro } from "../Intro/Intro";
import { Search } from "../Search/Search";
import { Card } from "../Card/Card";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <Intro />;
      <Search />
      <Card />
      <Footer />
    </>
  );
};
