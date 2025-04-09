import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const Auction = React.lazy(() => import('./components/Auction'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div className="bg-[#DCE5F3] min-h-screen flex flex-col justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <Auction />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
