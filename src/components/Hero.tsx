import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="max-w-xl animate-fade-in">
      <div className="space-y-6">
        {/* Greeting */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
          Hello, I'm
        </h1>
        {/* Name */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          Aghahowa Favour AIGBEKAEN
        </h2>
        {/* Description */}
        <div className="space-y-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
          <p>
            I am a{" "}
            <span className="font-semibold text-gray-900">
              frontend developer
            </span>{" "}
            with over 3 years of hands-on experience building scalable,
            accessible, and responsive UIs and{" "}
            <span className="font-semibold text-gray-900">
              user-friendly experiences using Next.js, React js, and Tailwind
              CSS, and other frontend tools.
            </span>{" "}
            I am motivated to find a role where I can challenge myself{" "}
            <span className="font-semibold text-gray-900">
              and provide value to users.
            </span>{" "}
            I am excited to bring my knowledge and experience to a team and
            contribute to a company's success.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="https://docs.google.com/document/d/1WiPqq7pJxWJl0db5EKyat9lN_9GKyKf1gNdeOeD6qII/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              View Resumé
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
