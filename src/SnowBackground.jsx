import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function SnowBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // keeps it behind everything
        },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: { min: 0.5, max: 2 },
            straight: false,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
