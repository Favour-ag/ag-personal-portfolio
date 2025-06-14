
import Header from "../components/Header";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import MobileHeader from "../components/MobileHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <MobileHeader />
      
      <div className="flex min-h-screen">
        {/* Desktop Sidebar Navigation */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 lg:py-16 space-y-12 lg:space-y-0">
          {/* Hero Section */}
          <Hero />
          
          {/* Logo Section */}
          <Logo />
        </main>
      </div>
    </div>
  );
};

export default Index;
