// voice projects jsx
import React from 'react'
import { FaVolumeUp  } from 'react-icons/fa';

function VoiceOver() {
    const projectsData = [
        {
            video:'https://media-hosting.imagekit.io/5041234d5fc34b9e/%D9%82%D9%85%D8%B1%20%D9%85%D8%B6%D9%88%D9%8A%202.mp4?Expires=1838747295&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RzEI-mvWm2C45jJJzSV6yGjuUcza1gum5poNG0DH9itrQ0E7WqO7-7VeI0mo6QSL9UBTVonRh6WUUOXyoxVGmRMH~Qfa~9LXTrIzhKCexy~RgrgLmIjOFYpS9SRicxAwWLwiz6ri523SiL3BjQqCA9AfXInogYPSTVR7DrgBGv~UhlSfdH2T7w9SkAG8kpQlZkFzM~qnMDGSG5Qd9dka3qZ5F94y6093uM0QJSxfmZyXHfKHuoQI8fkL35ggmrm85mqK-pkHptLjav8vDBbXWzdZipQ8NE4zGhHfmePkbVCkNnJVxEvVmgGgJyfsvEeMSZuSG-PigMU7soAO-eDvcA__',
            title:'Project 1',
            description:'Project 1 description'
        },
        {
            video:'https://media-hosting.imagekit.io/c72c1b2934cd4a37/%D9%82%D9%85%D8%B1%20%D9%85%D8%B6%D9%88%D9%8A.mp4?Expires=1838747295&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g93OpUbHCb60~yQhtpRKxbSz2-saQ-S-ewvX51ZDFrTAkCMhmqDBxTEc5F3tba4Nkf0E4EdW6HWeSMtIFNNc2zoIu7SGuf3mGEZhnyHeTnA97GXAWEdpTWTN27xiCvCrdJRA4umcKjjfpc~sbajK34YkeQE8eQCVAb7Y5lpTDf1ZFB2S-DnLdAC9Qc4~IFZWGbLu~9xpa6NH~HdYaGKmxS9HVrPQ4ANz-0ocCVpQe2htpVpnHFrKWrNX~wlDiYglj4I4-ga8MyNTwcY7K8ucEHKF93sLB0xOuyritbrKjwPYfYM6qkMUvv~23~MInB7dBu5a4d5ixODg9KU06BleeA__',
            title:'Project 2',
            description:'Project 2 description'
        },
        {
            video:'https://media-hosting.imagekit.io/82746b91eb9845fd/%D9%85%D8%B6%D8%A7%D8%AF%20%D9%84%D9%84%D8%B5%D8%AF%D9%85%D8%A7%D8%AA%20.mp4?Expires=1838747810&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vLLZEkRg~rCx2-USx7-qEgk0ynjqgpA7m86wQSvS62F3c9V-R-vi9YGXbf0RzAWtFbUIRjkrNb-cFOIxbskZ9kjO8-bG4k1NczE6h2h8GDRLLmkW57cN7DEjU91aOsYjy2y6~tzXJIn6P2iQ4J7J5605ij-zlmJEl7CzNAEi5K8txujn91tZpBb~8LlYCW9Zbr8JjjniTlBBo1N8SqMmieKecHpVGyqfMKgucrQcl0SrRbn-ZkaYk7WfZUl7qDHQ-rpuY3C8BHYzGnvW2cIoHmkNKUqK2FCvQoEpt84BDxG19CsrJaI1Bs73PD1l~SjAfaG-vQwQEcXFMW-w9F-1iw__',
            title:'Project 3',
            description:'Project 3 description'
        }
    ]
  return (
        <section id="voice-over" className="section">
            <div className="section-header">
                <h2><FaVolumeUp /> Voice Over and video editing projects</h2>
                <div className="section-line"></div>
            </div>
            <div className="video-editing-container">
                <div className="video-editing-content">
                    <div className="projects-grid">
                        {projectsData.map((project, index) => (
                            <div key={index} className="project-card lazy-load">
                               <iframe  style={{width: '100%',height:'300px', borderRadius: '10px 10px 0 0'}} controls  src={project.video}></iframe>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>   
  )      
}

export default VoiceOver
