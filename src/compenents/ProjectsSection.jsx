import React from 'react';
import { FaProjectDiagram, FaReact, FaNodeJs, FaDatabase, FaEye, FaGithub, FaServer, FaCloud, FaUpload } from 'react-icons/fa';

const projectsData = [
    
    {
        image: './imgs-portfolio/e.jpg',
        title: 'Social Media App',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://elfanane.com',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/c.jpg',
        title: 'Meta2FX Platform',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://www.meta2fx.com',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/d.jpg',
        title: 'UK IPTV Service',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://ukiptv.ink',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/h.jpg',
        title: 'Portfolio Project',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/g.jpg',
        title: 'Web Application',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/b.jpg',
        title: 'SoufJS Platform',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://souf-js.web.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/j.jpg',
        title: 'Art Portfolio',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://soufiane-art.web.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/F.jpg',
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
        technologies: [
            { icon: <FaReact />, name: 'React' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaDatabase />, name: 'MongoDB' }
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/i.jpg',
        title: 'Creative Project',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/a.jpg',
        title: 'ERR Web Platform',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://err-web.web.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/m.jpg',
        title: 'Artilo Platform',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://artilo.site/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/n.jpg',
        title: 'Planner App',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://planner-app-sepia.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/kk.jpg',
        title: 'Planning Platform',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://planner-app-sepia.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/dsfe.jpg',
        title: '3D STL Viewer',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://nextjs-project-3d-stl-xzw2.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/nh,nj,k.jpg',
        title: '3D Project',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://nextjs-project-3d-stl-xzw2.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/sdfd.jpg',
        title: 'Planning Tool',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://art.nichanlabs.com/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/sqd.jpg',
        title: 'Project Management',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        liveLink: 'https://planner-app-sepia.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/L.jpg',
        title: 'Mobile App',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React Native' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaCloud />, name: 'AWS' }
        ],
        downloadLink: './apps/elfanane.apk',
        isDownloadable: true,
        codeLink: '#'
    }
];

function ProjectsSection() {
    const handleDownload = (downloadLink) => {
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'elfanane.apk';
        link.click();
    };

    return (
        <section id="projects" className="section">
            <div className="section-header">
                <h2><i><FaProjectDiagram /></i> Featured Projects</h2>
                <div className="section-line"></div>
            </div>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card lazy-load">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>
                                        {tech.icon} {tech.name}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.isDownloadable ? (
                                    <button 
                                        onClick={() => handleDownload(project.downloadLink)}
                                        className="btn small"
                                        style={{ color: '#fff' }}
                                    >
                                        <i><FaUpload /></i> Download
                                    </button>
                                ) : (
                                    <a href={project.liveLink} style={{ color: '#fff' }} className="btn small">
                                        <i><FaEye /></i> Live
                                    </a>
                                )}
                                <a href={project.codeLink} className="btn small secondary">
                                    <i><FaGithub /></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;