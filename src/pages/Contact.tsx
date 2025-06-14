import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen animate-fade-in">
        <div className="max-w-2xl mx-auto px-6 lg:px-16 py-16 text-center">
          <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 animate-scale-in">
            Get In Touch
          </h1>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about design and technology.
          </p>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">aigbekeanfavour@gmail.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-medium text-gray-900 mb-2">Social</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    LinkedIn: /in/aghahowa-favour-aigbekaen
                  </p>
                  <p className="text-gray-600">Twitter: @ag_aigbekaen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
