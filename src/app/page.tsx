import Image from "next/image";
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
