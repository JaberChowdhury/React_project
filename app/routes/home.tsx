import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
import React from 'react'

const home = () => {
  return (
    <div>home</div>
  )
}

export default home