import React from 'react';
import { 
    FaCode, FaDesktop, FaReact, FaVuejs, FaJs, FaHtml5, FaCss3Alt, 
    FaBootstrap, FaSass, FaServer, FaNode, FaPlug, FaDatabase, 
    FaFire, FaWordpress, FaGlobe, FaCloud, FaGithub, FaPalette,
    FaFigma, FaVideo, FaFilm, FaCamera, FaBullhorn, FaHashtag,
    FaFacebook, FaInstagram, FaTiktok, FaChartLine, FaLanguage,
    FaComments, FaTasks, FaUsers, FaClock, FaTools, FaPaintBrush, FaPlusCircle
} from 'react-icons/fa';

function SkillsSection() {
    return (
        <section id="skills" className="section">
            <div className="section-header">
                <h2><FaCode /> Skills & Technologies</h2>
                <div className="section-line"></div>
            </div>
            <div className="skills-container">
                <div className="skill-category">
                    <h3><FaDesktop /> Frontend Development</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i><FaReact /></i>
                            <span>React.js</span>
                            <div className="skill-level" data-level="90"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaVuejs /></i>
                            <span>Vue.js</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaJs /></i>
                            <span>JavaScript</span>
                            <div className="skill-level" data-level="95"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaHtml5 /></i>
                            <span>HTML5</span>
                            <div className="skill-level" data-level="98"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaCss3Alt /></i>
                            <span>CSS3</span>
                            <div className="skill-level" data-level="95"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaBootstrap /></i>
                            <span>Bootstrap</span>
                            <div className="skill-level" data-level="90"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaSass /></i>
                            <span>Tailwind CSS</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i><FaServer /></i> Backend & Database</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i><FaNode /></i>
                            <span>Node.js</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaServer /></i>
                            <span>Express.js</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaPlug /></i>
                            <span>Socket.IO</span>
                            <div className="skill-level" data-level="80"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaDatabase /></i>
                            <span>MongoDB</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaFire /></i>
                            <span>Firebase</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i><FaTools /></i> Tools & Platforms</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i><FaWordpress /></i>
                            <span>WordPress</span>
                            <div className="skill-level" data-level="90"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaGlobe /></i>
                            <span>Namecheap</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaServer /></i>
                            <span>Vercel</span>
                            <div className="skill-level" data-level="92"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaCloud /></i>
                            <span>Hostinger</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaGithub /></i>
                            <span>Git & GitHub</span>
                            <div className="skill-level" data-level="90"></div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i><FaPaintBrush /></i> Design & Media</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i><FaPalette /></i>
                            <span>Photoshop</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaFigma /></i>
                            <span>Figma</span>
                            <div className="skill-level" data-level="80"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaVideo /></i>
                            <span>Video Editing</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaFilm /></i>
                            <span>Adobe Premiere Pro</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaCamera /></i>
                            <span>Photography</span>
                            <div className="skill-level" data-level="82"></div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i><FaBullhorn /></i> Digital Marketing</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i><FaHashtag /></i>
                            <span>Social Media Marketing</span>
                            <div className="skill-level" data-level="90"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaFacebook /></i>
                            <span>Facebook Ads</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaInstagram /></i>
                            <span>Instagram Marketing</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaTiktok /></i>
                            <span>TikTok Marketing</span>
                            <div className="skill-level" data-level="82"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaChartLine /></i>
                            <span>Analytics & SEO</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3><i><FaPlusCircle /></i> Additional Skills</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <i><FaLanguage /></i>
                            <span>Content Writing</span>
                            <div className="skill-level" data-level="88"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaComments /></i>
                            <span>Communication</span>
                            <div className="skill-level" data-level="95"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaTasks /></i>
                            <span>Project Management</span>
                            <div className="skill-level" data-level="85"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaUsers /></i>
                            <span>Team Leadership</span>
                            <div className="skill-level" data-level="90"></div>
                        </div>
                        <div className="skill-item">
                            <i><FaClock /></i>
                            <span>Time Management</span>
                            <div className="skill-level" data-level="92"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;