import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Differentiator from "@/components/sections/Differentiator";
import HowWeWork from "@/components/sections/HowWeWork";
import UseCases from "@/components/sections/UseCases";
import ForWhom from "@/components/sections/ForWhom";
import Experience from "@/components/sections/Experience";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Differentiator />
        <HowWeWork />
        <UseCases />
        <ForWhom />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
