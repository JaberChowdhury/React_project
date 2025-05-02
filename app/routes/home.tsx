import { Button } from "~/components/ui/button";
import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <Button asChild>
        <Link to="/text-utils">Go to Text Utils</Link>
      </Button>
    </div>
  );
}
