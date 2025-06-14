import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <Layout>
      <div className="py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight">
              I love working on
              <br />
              <span className="font-bold">fun projects</span>
            </h1>

            <div className="prose prose-lg text-gray-600 leading-relaxed mb-8 max-w-none">
              <p className="mb-4">
                In my leisure time, I enjoy{" "}
                <span className="font-semibold">experimenting</span> with and
                building things that I find personally{" "}
                <span className="font-semibold">interesting</span> or{" "}
                <span className="font-semibold">useful</span>. A few examples of
                these projects can be found on my{" "}
                <span className="font-semibold">Github page</span>, where you
                can also find other{" "}
                <span className="font-semibold">miscellaneous creations</span> I
                have worked on.
              </p>
            </div>
            <a
              href="https://github.com/Favour-ag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8 py-3 text-base font-medium"
              >
                View Github
              </Button>
            </a>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Career Suggestion App Project */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fade-in">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">
                    Career Suggestion App
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Career Suggestion App
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Career Suggestion App
                </p>
                <p className="text-sm text-gray-500">
                  React + Tailwind + Supabase + shadcn ui
                </p>
                <div className="flex gap-4 mt-4 text-sm">
                  <a
                    href="https://github.com/Favour-ag/career-suggestion-app-saas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <span>💻</span> Code
                  </a>
                  <a
                    href="https://career-suggestion-app-saas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <span>👁️</span> View
                  </a>
                </div>
              </div>
            </div>

            {/* AI Content Studio Project */}
            <div
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">AI-Content Studio</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  AI-Content Studio
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  AI-Content Studio for content creators
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Next js + Tailwind + shadcn ui + LLama
                </p>
                <div className="flex gap-4 mt-4 text-sm">
                  <a
                    href="https://github.com/Favour-ag/ai-content-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <span>💻</span> Code
                  </a>
                  <a
                    href="https://ai-content-studio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <span>👁️</span> View
                  </a>
                </div>
              </div>
            </div>

            {/* UX Portfolio Project */}
            <div
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">UX Portfolio</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  UX Portfolio
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  UX Case Study Portfolio
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Next js + Tailwind + shadcn ui + Framer Motion
                </p>
                <div className="flex gap-4 mt-4 text-sm">
                  <a
                    href="https://github.com/Favour-ag/joshua-design-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <span>💻</span> Code
                  </a>
                  <a
                    href="https://joshua-design-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <span>👁️</span> View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 text-center">
          <a
            href="https://github.com/Favour-ag"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              View More Projects
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
