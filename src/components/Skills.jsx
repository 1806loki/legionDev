const Skills = () => {
  const skills = {
    technologies: [
      {
        logo: "logo",
        name: "React",
      },
      {
        logo: "logo",
        name: "HTML",
      },
      {
        logo: "logo",
        name: "CSS",
      },
      {
        logo: "logo",
        name: "TailwindCSS",
      },
      {
        logo: "logo",
        name: "Express",
      },
      {
        logo: "logo",
        name: "MongoDB",
      },
      {
        logo: "logo",
        name: "JavaScript",
      },
      {
        logo: "logo",
        name: "TypeScript",
      },
    ],
    platforms: [
      {
        logo: "logo",
        name: "GitHub",
      },
      {
        logo: "logo",
        name: "Netlify",
      },
      {
        logo: "logo",
        name: "Vercel",
      },
      {
        logo: "logo",
        name: "Firebase",
      },
    ],
    tools: [
      {
        logo: "logo",
        name: "Visual Studio Code",
      },
      {
        logo: "logo",
        name: "Postman",
      },
      {
        logo: "logo",
        name: "Figma",
      },
    ],
  };
  return (
    <div>
      <h1>Explore my skills</h1>
      <div>pendulum</div>
      <h4>Skills</h4>
      <h1>Gateway to endless creations </h1>
      <h3>Known Technologies</h3>

      <div>
        {skills.technologies.map((technology, index) => (
          <div key={index}>
            <img src={technology.logo} alt={technology.name} />
            <h3>{technology.name}</h3>
          </div>
        ))}
      </div>

      <h3>Platforms</h3>

      <div>
        {skills.platforms.map((platform, index) => (
          <div key={index}>
            <img src={platform.logo} alt={platform.name} />
            <h3>{platform.name}</h3>
          </div>
        ))}
      </div>

      <h3>Tools</h3>

      <div>
        {skills.tools.map((tool, index) => (
          <div key={index}>
            <img src={tool.logo} alt={tool.name} />
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

 export default Skills