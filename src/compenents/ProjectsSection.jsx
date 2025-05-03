import React from 'react';
import { FaProjectDiagram, FaReact, FaNodeJs, FaSocket, FaDatabase, FaEye, FaGithub, FaServer, FaCloud, FaUpload, FaHtml5, FaJs, FaCss3 } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

const projectsData = [
    {
        image: './imgs-portfolio/m.jpg',
        title: 'www.artilo.site',
        description: 'My website, Artilo.site, offers high-quality printable digital art with limited-time offers.',
        technologies: [
            { icon: <FaReact />, name: "React.js" },
            { icon: <FaServer />, name: "Firebase" },
            { icon: <FaCloud />, name: "MongoDB" },
            { icon: <FaNodeJs />, name: "Node.js" }
        ],
        liveLink: 'https://artilo.site/',
        codeLink: '#'
    },
   
    {
        image: './imgs-portfolio/o.png',
        title: 'www.onwork.ma',
        description: 'Digital marketing agency in Fes with a complete management system',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
            { icon: <FaServer />, name: 'Vercel' },
            { icon: <FaCloud />, name: 'Cloudflare' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaJs />, name: 'Typescript' },
            { icon: <SiRedux />, name: 'Redux' }
        ],
        liveLink: 'https://onwork.ma',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/p.jpg',
        title: 'www.recipegrove.net',
        description: 'Web site for American Home Cooking Made Simple & Delicious',
        technologies: [
            { icon: <FaReact />, name: 'Next.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
            { icon: <FaServer />, name: 'Vercel' },
            { icon: <FaCloud />, name: 'Cloudflare' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaJs />, name: 'Typescript' },
            { icon: <SiRedux />, name: 'Redux' }
        ],
        liveLink: 'https://recipegrove.net',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/a.jpg',
        title: 'www.errachidia.online',
        description: 'A website that helps people register so we can support them in growing their startups and local businesses',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
        ],
        liveLink: 'https://errachidia.online',
        codeLink: '#'
    },
    
    {
        image: './imgs-portfolio/d.jpg',
        title: 'www.ukiptv.ink',
        description: 'UK IPTV Service ',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaDatabase />, name: 'MongoDB' }
        ],
        liveLink: 'https://ukiptv.ink',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/nh,nj,k.jpg',
        title: '3D Project',
        description: 'My website is an online store for selling 3D items in STL format, where users can browse, purchase, and download ready-made models easily and professionally',
        technologies: [
            { icon: <FaReact />, name: 'Next.js' },
            { icon: <FaServer />, name: 'Vercel' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
            { icon: <SiRedux />, name: 'Redux' }
        ],
        liveLink: 'https://nextjs-project-3d-stl-xzw2.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/sdfd.jpg',
        title: 'art.nichanlabs.com',
        description: 'My website is a branch of Nishan Labs, dedicated to showcasing my hand-drawn artistic works. It offers visitors the chance to explore my original paintings and enjoy their intricate details, with options to order printed or digital copies',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaServer />, name: 'Vercel' },
            { icon: <FaNodeJs />, name: 'Node.js' },
        ],
        liveLink: 'https://art.nichanlabs.com/',
        codeLink: '#'
    },
    
    {
        image: './imgs-portfolio/e.jpg',
        title: 'www.elfanane.com',
        description: 'Social media platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <SiRedux />, name: 'Redux' }
        ],
        liveLink: 'https://elfanane-7a30c.web.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/L.jpg',
        title: 'Mobile App',
        description: 'I have converted my website elfanane.com into a fully functional mobile application, allowing users to easily browse and purchase artworks from their smartphones, while also enabling artists to showcase and sell their own paintings through the app',
        technologies: [
            { icon: <FaServer />, name: 'Median' },
        ],
        downloadLink: './apps/elfanane.apk',
        isDownloadable: true,
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/kk.jpg',
        title: 'planner-app-sepia.vercel.app',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaHtml5 />, name: 'Html' },
            { icon: <FaJs />, name: 'JavaScript' },
        ],
        liveLink: 'https://planner-app-sepia.vercel.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/c.jpg',
        title: 'www.meta2fx.com',
        description: 'Trading platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
            { icon: <FaServer />, name: 'Firebase' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <SiRedux />, name: 'Redux' },
            { icon: <FaSocket />, name: 'Socket.io' }
        ],
        liveLink: 'https://www.meta2fx.com',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/h.jpg',
        title: 'IPTV subscriptions',
        description: 'Attractive website design for selling IPTV subscriptions.',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/g.jpg',
        title: 'IPTV subscriptions',
        description: 'Attractive website design for selling IPTV subscriptions.',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/b.jpg',
        title: 'Portfolio Project',
        description: 'Portfolio website with React.js',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaServer />, name: 'Firebase' },

        ],
        liveLink: 'https://souf-js.web.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/j.jpg',
        title: 'Art Portfolio',
        description: 'Mobile-first social platform with real-time features',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaServer />, name: 'Firebase' },
        ],
        liveLink: 'https://soufiane-art.web.app/',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/F.jpg',
        title: '2metabank – A digital banking',
        description: 'experience with seamless money transfers between users, easy account top-ups, and comprehensive account management.',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaDatabase />, name: 'MongoDB' },
            { icon: <FaServer />, name: 'Not hosting' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
    {
        image: './imgs-portfolio/i.jpg',
        title: 'Modern Design',
        description: 'AI payroll platform with a modern design, clear marketing message, and a call to join.',
        technologies: [
            { icon: <FaHtml5 />, name: 'Html' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
    
   
    {
        image: './imgs-portfolio/n.jpg',
        title: 'Amazigh website features',
        description: 'Your Amazigh website features a simple and elegant design with touches of Amazigh culture, using warm colors and geometric symbols that reflect the heritage.',
        technologies: [
            { icon: <FaHtml5 />, name: 'Html' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
    
    {
        image: './imgs-portfolio/dsfe.jpg',
        title: '3D STL Viewer',
        description: 'My website is an online platform for showcasing 3D models in STL format, allowing users to view, upload, and download their files easily and professionally',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
   
    
    {
        image: './imgs-portfolio/sqd.jpg',
        title: 'Lab de biologique',
        description: 'An attractive and interactive front-end interface for a digital laboratory platform, designed to provide a seamless, modern user experience with a dynamic layout that reflects the spirit of a digital lab',
        technologies: [
            { icon: <FaReact />, name: 'React.js' },
        ],
        liveLink: '#',
        codeLink: '#'
    },
    
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
            <div className="under-development" style={{ animation: 'pulse 2s infinite' }}>
                <h3 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    🚧 Under Development 🚧
                </h3>
                <p style={{ color: '#ffffff', fontSize: '18px', margin: '0', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                    This section is currently under construction. Please check back later for updates!
                </p>
            </div>
            <style>
                {`
                    .under-development {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 25px;
                        margin: 20px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    }

                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.02); }
                        100% { transform: scale(1); }
                    }
                `}
            </style>
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
                                        <i style={{color: '#000'}}><FaUpload />Download</i> 
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