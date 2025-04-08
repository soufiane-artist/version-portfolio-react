// video editing .JSX

import React from 'react';
import { FaVideo } from 'react-icons/fa';

function VideoEditing() {

    const projectsData = [
        {
            title: 'Project 1',
            description: 'Project 1 description',
            videoIframe: 'https://media-hosting.imagekit.io/4625906a099e4f6b/2025-04-08%2016-34-25.mp4?Expires=1838734565&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pKJ0aNi0UGAnQLb7gTIAq28FB8F9Vkwl52ChDn74Fb37ga7KiADLm4HbegNX4qa5uThdr2dpzaiDrZhidxBoZXbqEZdplc1K9EJfqiRVDYDXnwUSzRma1tOSTUIDvA45DMb2jmk8SJcA2WKI~JBDl0d9aqMVE5KBkxvR9VR4r1hYoUj3eNhgbg0Okk2VoaKSVlUoDcVqeeh3yp2Pk-oUl~PDO5-Mox5WJ2SMl6rsxzJMBW8rClPI9zAAFK44Cnp8Jt20pIct3BnEUCX-94DAVBVQ8AsGx3JbUarctFHzgkVEmeaL8LQNw-yPu7wzu5Iozw5jHM1QsdV3oPvccbiZqQ__'
        },
        {
            title: 'Project 2',
            description: 'Project 2 description',
            videoIframe: 'https://media-hosting.imagekit.io/4625906a099e4f6b/2025-04-08%2016-34-25.mp4?Expires=1838734565&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pKJ0aNi0UGAnQLb7gTIAq28FB8F9Vkwl52ChDn74Fb37ga7KiADLm4HbegNX4qa5uThdr2dpzaiDrZhidxBoZXbqEZdplc1K9EJfqiRVDYDXnwUSzRma1tOSTUIDvA45DMb2jmk8SJcA2WKI~JBDl0d9aqMVE5KBkxvR9VR4r1hYoUj3eNhgbg0Okk2VoaKSVlUoDcVqeeh3yp2Pk-oUl~PDO5-Mox5WJ2SMl6rsxzJMBW8rClPI9zAAFK44Cnp8Jt20pIct3BnEUCX-94DAVBVQ8AsGx3JbUarctFHzgkVEmeaL8LQNw-yPu7wzu5Iozw5jHM1QsdV3oPvccbiZqQ__'
        },
        {
            title: 'Project 3',
            description: 'Project 3 description',
            videoIframe: 'https://media-hosting.imagekit.io/4625906a099e4f6b/2025-04-08%2016-34-25.mp4?Expires=1838734565&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pKJ0aNi0UGAnQLb7gTIAq28FB8F9Vkwl52ChDn74Fb37ga7KiADLm4HbegNX4qa5uThdr2dpzaiDrZhidxBoZXbqEZdplc1K9EJfqiRVDYDXnwUSzRma1tOSTUIDvA45DMb2jmk8SJcA2WKI~JBDl0d9aqMVE5KBkxvR9VR4r1hYoUj3eNhgbg0Okk2VoaKSVlUoDcVqeeh3yp2Pk-oUl~PDO5-Mox5WJ2SMl6rsxzJMBW8rClPI9zAAFK44Cnp8Jt20pIct3BnEUCX-94DAVBVQ8AsGx3JbUarctFHzgkVEmeaL8LQNw-yPu7wzu5Iozw5jHM1QsdV3oPvccbiZqQ__'
        }
    ];

    return (
        <section id="video-editing" className="section">
            <div className="section-header">
                <h2><FaVideo /> Video editing projects</h2>
                <div className="section-line"></div>
            </div>
            <div className="video-editing-container">
                <div className="video-editing-content">
                    <div className="projects-grid">
                        {projectsData.map((project, index) => (
                            <div key={index} className="project-card lazy-load">
                                        <iframe 
                                            style={{width: '100%',height: '200px', borderRadius: '10px 10px 0 0'}} 
                                            controls 
                                            autoPlay 
                                            muted 
                                            src={project.videoIframe} 
                                            title="video player" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerpolicy="strict-origin-when-cross-origin" 
                                        />
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
    );
}

export default VideoEditing;

