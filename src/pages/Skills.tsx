import React from "react";
import Layout from "../components/Layout";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technologies",
      skills: [
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Tailwind CSS",
        "NextJs",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "OS/Tools",
      skills: [
        "Windows",
        "Git",
        "Vercel",
        "Netlify",
        "Firebase",
        "Supabase",
        "Postman",
        "Lovable",
        "Bolt",
        "Replit",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Agile",
        "VS Code",
        "Cursor",
        "Notion",
        "Slack",
        "Debugging",
        "Teamwork",
        "Communication",
      ],
    },
  ];

  return (
    <Layout>
      <div className="py-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-16 text-center animate-scale-in">
            Skills & Expertise
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
