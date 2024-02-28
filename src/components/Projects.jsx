const Projects = () => {
    const projects = {
      cloned: [
        {
          title: "Cloned",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
        {
          title: "Cloned",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
        {
          title: "Cloned",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
      ],
      fullStack: [
        {
          title: "Full Stack",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
        {
          title: "Full Stack",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
        {
          title: "Full Stack",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
      ],
  
      landingPages: [
        {
          title: "Landing Pages",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
        {
          title: "Landing Pages",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
        {
          title: "Landing Pages",
          description: "A clone of the legion dev website",
          image:
            "://i.ibb.co/z4z4z4z/Screenshot-2021-09-17-11-10-02-100.png",
          live: "://legion-dev.netlify.app/",
        },
      ],
    };
  
    return (
      <div>
        <h1>Explore my projects</h1>
        <div>Pendulum</div>
        <h1>My Projects</h1>
        <h1>Showcasing my creative journey</h1>
  
        <div>
          <h2>Cloned Projects</h2>
          {projects.cloned.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          ))}
        </div>
  
        <div>
          <h2>Full Stack Projects</h2>
          {projects.fullStack.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          ))}
        </div>
  
        <div>
          <h2>Landing Page Projects</h2>
          {projects.landingPages.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  