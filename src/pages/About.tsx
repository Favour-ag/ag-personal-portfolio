
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen animate-fade-in">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 animate-scale-in">
              About Me
            </h1>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="mb-6">
                I'm a passionate designer and developer with a love for creating beautiful, 
                functional digital experiences. My journey in design started over 5 years ago, 
                and I've been constantly evolving my skills ever since.
              </p>
              <p className="mb-6">
                I specialize in user interface design, user experience optimization, 
                and front-end development. I believe in the power of clean, minimalist design 
                that puts the user first.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new technologies, 
                reading design blogs, or enjoying a good cup of coffee while sketching new ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
