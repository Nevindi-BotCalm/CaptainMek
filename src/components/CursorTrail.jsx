import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const trailRef = useRef([]);

  useEffect(() => {
    const updateTrail = (e) => {
      // create a new spark
      const spark = document.createElement("div");
      spark.className ="absolute w-4 h-4 bg-yellow-400 rounded-full pointer-events-none cursor-spark";

      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      spark.style.transition = "all 0.3s ease";

      document.body.appendChild(spark);
      trailRef.current.push(spark);

      // remove old sparks to limit DOM elements
      if (trailRef.current.length > 10) {
        const old = trailRef.current.shift();
        old.remove();
      }
    };

    window.addEventListener("mousemove", updateTrail);
    return () => window.removeEventListener("mousemove", updateTrail);
  }, []);

  return null; // no visible JSX needed
}
