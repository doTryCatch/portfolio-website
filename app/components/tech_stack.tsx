import React from "react";
import Image from "next/image"

type Skills = {
  [category: string]: string[];
};

const skills: Skills = {
  "Frontend Frameworks & Libraries": ["React", "Next.js", "React Native"],
  "Backend Frameworks": ["Node.js", "Express.js", "NestJS"],
  Databases: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  "DevOps & Deployment": ["Git", "GitHub Actions", "Linux Bash", "Render", "Vercel"],
  APIs: ["REST API", "GraphQL"],
  "Familiar Languages": ["C", "C++", "R", "PHP"],
  "Additional Tools": ["Husky", "Electron"],
};

const iconMapping: { [key: string]: string } = {
  HTML: "html5",
  CSS: "css3",
  JavaScript: "javascript",
  Python: "python",
  TypeScript: "typescript",
  "C++": "cplusplus",
  React: "react",
  "Next.js": "nextdotjs",
  "React Native": "react",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Prisma: "prisma",
  Supabase: "supabase",
  Git: "git",
  "GitHub Actions": "githubactions",
  "Linux Bash": "linux",
  Render: "render",
  Vercel: "vercel",
  "REST API": "api",
  GraphQL: "graphql",
  Husky: "husky",
  Electron: "electron",
};

const docLinks: { [key: string]: string } = {
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Python: "https://docs.python.org/3/",
  TypeScript: "https://www.typescriptlang.org/docs/",
  "C++": "https://en.cppreference.com/w/",
  React: "https://reactjs.org/docs/getting-started.html",
  "Next.js": "https://nextjs.org/docs",
  "React Native": "https://reactnative.dev/docs/getting-started",
  "Node.js": "https://nodejs.org/en/docs/",
  "Express.js": "https://expressjs.com/en/starter/installing.html",
  NestJS: "https://docs.nestjs.com/",
  PostgreSQL: "https://www.postgresql.org/docs/",
  MongoDB: "https://docs.mongodb.com/",
  Prisma: "https://www.prisma.io/docs/",
  Supabase: "https://supabase.com/docs",
  Git: "https://git-scm.com/doc",
  "GitHub Actions": "https://docs.github.com/en/actions",
  "Linux Bash": "https://www.gnu.org/software/bash/manual/bash.html",
  Render: "https://render.com/docs",
  Vercel: "https://vercel.com/docs",
  "REST API": "https://restfulapi.net/",
  GraphQL: "https://graphql.org/learn/",
  Husky: "https://typicode.github.io/husky/#/",
  Electron: "https://www.electronjs.org/docs",
};

type SkillCardProps = {
  category: string;
  skills: string[];
};

type SkillIconProps = {
  skill: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => (
  <div className="mb-8">
    <h3 className="text-md font-semibold text-slate-500 mb-4">{category}</h3>
    <div className="flex flex-wrap bg-gradient-to-br from-[hsl(240,1%,25%)] to-[hsl(0,0%,46%)] space-x-6 py-4 rounded-lg">
      {skills.map((skill) => (
        <SkillIcon key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  const iconName = iconMapping[skill] || skill.toLowerCase();
  const iconURL = `https://cdn.simpleicons.org/${iconName}`;
  const docURL = docLinks[skill];

  return (
    <div className="flex flex-col items-center text-center m-2">
      <a href={docURL} target="_blank" rel="noopener noreferrer">
        <Image
          src={iconURL}
          alt={skill}
          height={40}
          width={40}
          className="w-12 h-12 hover:scale-125 ease-in-out duration-75 cursor-pointer"
        />
      </a>
      <span className="text-sm text-white mt-2">{skill}</span>
    </div>
  );
};

const App: React.FC = () => (
  <div className="my-28">
    <h1 className="text-lg font-bold text-white">My Tech Stack</h1>
    <div className="yellow-line h-1 w-20 bg-yellow-500 rounded-3xl" />
    <div className="my-20 md:grid md:grid-cols-2 gap-10">
      {Object.entries(skills).map(([category, skills]) => (
        <SkillCard key={category} category={category} skills={skills} />
      ))}
    </div>
  </div>
);

export default App;
