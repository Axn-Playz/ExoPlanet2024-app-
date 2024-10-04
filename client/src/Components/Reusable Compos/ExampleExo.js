import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ExampleExo = () => {
    const [orbitSpeed, setOrbitSpeed] = useState(0.02);
    const [orbitRadius, setOrbitRadius] = useState(6);
    const [planetSize, setPlanetSize] = useState(0.7);
    const [planetCameraView, setPlanetCameraView] = useState(false);

    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const starRef = useRef(null);
    const planetRef = useRef(null);
    const orbitRingRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Set refs
        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;

        // Load background texture
        const loader = new THREE.TextureLoader();
        scene.background = loader.load('https://static.vecteezy.com/system/resources/thumbnails/003/706/970/original/4k-3d-seamless-loop-of-traveling-to-glow-stars-filed-on-black-background-graphic-motion-overlay-effect-loop-with-galaxy-sky-twinkling-light-in-the-space-animation-galaxy-exploration-free-video.jpg');

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        const pointLight = new THREE.PointLight(0xffd700, 2, 1000);
        pointLight.position.set(0, 0, 0);
        scene.add(ambientLight, pointLight);

        // Load star texture
        const starTexture = loader.load('https://media.istockphoto.com/id/1061398870/vector/silver-glitter-shiny-vector-background.jpg?s=612x612&w=0&k=20&c=qSQ774l-VWUb16c3MkKgk6Axb_VLAwpi4Ju3gS5ri2s=');
        const starGeometry = new THREE.SphereGeometry(2, 64, 64);
        const starMaterial = new THREE.MeshBasicMaterial({ map: starTexture });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        scene.add(star);
        starRef.current = star;

        // Load planet texture
        const planetTexture = loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZDJDQLjo1qRYcTN4OJl7RI1arg9Jwl6myw&s');
        const planetGeometry = new THREE.SphereGeometry(planetSize, 64, 64);
        const planetMaterial = new THREE.MeshPhongMaterial({ map: planetTexture });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        scene.add(planet);
        planetRef.current = planet;

        // Create orbit ring
        const orbitGeometry = new THREE.TorusGeometry(orbitRadius, 0.05, 16, 100);
        const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbitRing.rotation.x = Math.PI / 2;
        scene.add(orbitRing);
        orbitRingRef.current = orbitRing;

        // Camera positioning
        camera.position.set(0, 5, 15);
        camera.lookAt(0, 0, 0);

        // Initialize controls
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = orbitControls;

        let planetAngle = 0;

        function animate() {
            requestAnimationFrame(animate);

            // Update planet position
            planetAngle += orbitSpeed;
            if (planetRef.current) {
                planetRef.current.position.set(orbitRadius * Math.cos(planetAngle), 0, orbitRadius * Math.sin(planetAngle));
                planetRef.current.scale.set(planetSize, planetSize, planetSize);
            }

            // Update orbit ring if needed
            if (orbitRingRef.current) {
                orbitRingRef.current.geometry.dispose();
                orbitRingRef.current.geometry = new THREE.TorusGeometry(orbitRadius, 0.05, 16, 100);
            }

            // Adjust camera view if in planet camera mode
            if (planetCameraView) {
                const cameraDistance = 5;
                camera.position.set(planetRef.current.position.x, planetRef.current.position.y + cameraDistance, planetRef.current.position.z - cameraDistance);
                camera.lookAt(planetRef.current.position);
            }

            // Rotate star and planet
            if (starRef.current) starRef.current.rotation.y += 0.002;
            if (planetRef.current) planetRef.current.rotation.y += 0.01;

            // Update controls if initialized
            if (controlsRef.current) {
                controlsRef.current.update();
            }

            renderer.render(scene, camera);
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            if (renderer && camera) {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            }
        });

        animate(); // Start animation

        // Cleanup on component unmount
        return () => {
            if (controlsRef.current) controlsRef.current.dispose();
            if (rendererRef.current) {
                rendererRef.current.dispose();
                document.body.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    useEffect(() => {
        if (orbitRingRef.current) {
            orbitRingRef.current.geometry.dispose();
            orbitRingRef.current.geometry = new THREE.TorusGeometry(orbitRadius, 0.05, 16, 100);
        }
    }, [orbitRadius]);

    useEffect(() => {
        if (planetRef.current) {
            planetRef.current.scale.set(planetSize, planetSize, planetSize);
        }
    }, [planetSize]);

    const throttle = (callback, delay) => {
        let lastCall = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastCall < delay) return;
            lastCall = now;
            callback(...args);
        };
    };

    const handleOrbitRadiusChange = throttle((value) => {
        setOrbitRadius(value);
    }, 100);

    const handleSpeedChange = throttle((value) => {
        setOrbitSpeed(value);
    }, 100);

    const handleSizeChange = throttle((value) => {
        setPlanetSize(value);
    }, 100);

    const toggleCameraView = () => {
        setPlanetCameraView(!planetCameraView);
    };

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <div className="info">
                <h2>Planet Information</h2>
                <p>Planet Name: Proxima Centauri b</p>
                <p>Type: Super Earth</p>
                <p>Mass: 1.07 Earths</p>
                <p>Orbital Radius: {orbitRadius} AU</p>
                <p>Orbital Period: 11.2 days</p>
                <p>Eccentricity: 0.02</p>
                <button onClick={toggleCameraView}>Toggle Planet Camera View</button>
                {/* Add sliders for speed, size, etc. */}
            </div>
        </div>
    );
};

export default ExampleExo;
