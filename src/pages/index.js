import * as React from "react";
import Hero from "../components/Hero/Hero";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Seo
        title="Home"
        image="http://sutrashop.com.hr/wp-content/uploads/2021/05/1000px-200.jpg"
      />
      <Hero />
    </>
  );
}
