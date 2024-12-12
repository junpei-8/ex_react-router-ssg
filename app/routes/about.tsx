import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

// NOTE: This comment is to check if the code has been loaded properly
console.log('Loaded "/about" page.')

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Welcome />
    </>
  );
}
