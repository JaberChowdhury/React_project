import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white ">
        <h1 className="text-4xl font-bold">Welcome to Our Service Portal</h1>
        <p className="mt-4 text-lg">
          Compare and find the best professionals for your needs.
        </p>
        <div className="flex gap-x-6  justify-center items-center">
          <Link to="/doctor">
            <Button className="mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-foreground hover:text-accent transition">
              Find doctor
            </Button>
          </Link>
          <Link to="/lawyer">
            <Button className="mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-foreground hover:text-accent transition">
              Find lawyer
            </Button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8  container m-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Find Professionals"
            description="Easily search for doctors and lawyers based on your preferences."
            icon="🔍"
          />
          <FeatureCard
            title="Compare Options"
            description="Compare profiles, ratings, and reviews to make informed decisions."
            icon="⚖️"
          />
          <FeatureCard
            title="Book Appointments"
            description="Schedule appointments with professionals directly through our platform."
            icon="📅"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <footer className="text-center py-12 bg-secondary text-secondary-foreground">
        <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
        <p className="mt-4">
          Sign up today and find the best professionals for your needs.
        </p>
        <Button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition">
          Join Now
        </Button>
      </footer>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <Card>
    <CardContent>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default Home;
