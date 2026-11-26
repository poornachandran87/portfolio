import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Socket.io', 'Python', 'REST APIs'],
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'Git', 'GitHub'],
  },
  {
    category: 'Cloud & Hosting',
    items: ['AWS EC2', 'xCloud', 'Render', 'Netlify'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="border-t border-white/10 bg-primary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-xl font-semibold tracking-tight text-white">
          Skills &amp; Hosting
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-200">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
