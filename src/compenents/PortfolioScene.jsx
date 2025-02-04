import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const PortfolioScene = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        console.log('Initializing Portfolio Scene');
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        rendererRef.current = renderer;

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 3;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const pointLight = new THREE.PointLight(0x4f46e5, 2);
        pointLight.position.set(5, 5, 5);
        scene.add(ambientLight, pointLight);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMesh = new THREE.Points(
            particlesGeometry,
            new THREE.PointsMaterial({
                size: 0.005,
                color: 0x4f46e5,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            })
        );
        scene.add(particlesMesh);

        const animate = () => {
            animationFrameRef.current = requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            console.log('Cleaning up');
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (particlesGeometry) {
                particlesGeometry.dispose();
            }
            if (scene) {
                scene.clear();
            }
        };
    }, []);

    return (
        <div className="portfolio-scene">
            <canvas ref={canvasRef} className="webgl" />
        </div>
    );
};

export default PortfolioScene;
