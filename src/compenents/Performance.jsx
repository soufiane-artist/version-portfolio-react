import React from 'react';
import { FaTachometerAlt, FaUniversalAccess, FaAward, FaSearch } from 'react-icons/fa';

function Performance() {
    const metrics = [
        {
            icon: <FaTachometerAlt />,
            title: 'Performance',
            description: 'Implemented critical optimizations including:',
            items: [
                'Minification of CSS and JavaScript',
                'Lazy loading of images and resources',
                'Efficient asset compression',
                'Reduced initial load time by 40%'
            ]
        },
        {
            icon: <FaUniversalAccess />,
            title: 'Accessibility',
            description: 'Enhanced user experience with:',
            items: [
                'WCAG 2.1 compliance',
                'Improved color contrast',
                'Semantic HTML structure',
                'Keyboard navigation support'
            ]
        },
        {
            icon: <FaAward />,
            title: 'Best Practices',
            description: 'Implemented industry-standard techniques:',
            items: [
                'Modern JavaScript practices',
                'Responsive design principles',
                'Cross-browser compatibility',
                'Security headers implementation'
            ]
        },
        {
            icon: <FaSearch />,
            title: 'SEO Optimization',
            description: 'Improved search engine visibility:',
            items: [
                'Optimized meta tags',
                'Improved page speed',
                'Structured data implementation',
                'Mobile-first indexing'
            ]
        }
    ];

    return (
        <section id="performance-insights" className="section">
            <div className="container">
                <h2 className="section-title">Performance & Optimization Insights</h2>
                <div className="performance-container">
                    <div className="performance-image">
                        <img src="./imgs-portfolio/performance.jpg" alt="Website Performance Metrics" className="img-fluid" />
                        <img src="./imgs-portfolio/Capture.JPG" alt="Website Performance Metrics" className="img-fluid" />
                    </div>
                    <div className="performance-details">
                        <h3>Comprehensive Website Optimization</h3>
                        <div className="performance-metrics">
                            {metrics.map((metric, index) => (
                                <div key={index} className="metric">
                                    <i>{metric.icon}</i>
                                    <h4>{metric.title}</h4>
                                    <p>{metric.description}</p>
                                    <ul>
                                        {metric.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Performance;