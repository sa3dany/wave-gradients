/**
 * Demo ppage showcasing the wave gradients.
 */

import dynamic from "next/dynamic";
import { getPlaiceholder } from "plaiceholder";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { usePalette } from "../lib/huemint";

const WaveGradient = dynamic(() => import("../components/gradient"));

/**
 * Prepares the CSS for the placeholder
 * @returns {object}
 */
export const getStaticProps = async () => {
  const { css } = await getPlaiceholder("/gradient-placeholder.webp", {
    size: 5,
  });
  return { props: { css } };
};

/**
 * Demo Page
 * @returns {React.ReactElement}
 */
export default function DemoPage({ css }) {
  const palette = usePalette();

  const [reducedMotion, setReducedMotion] = useState();
  const [colors, setColors] = useState([
    "#5a43a8",
    "#ffc674",
    "#e7eceb",
    "#8fb7f3",
  ]);

  // Respect `prefers-reduced-motion`
  useEffect(() => {
    const { matches } = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(matches);
  }, []);

  return (
    <Layout>
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Placeholder using static CSS gradients */}
        <div
          style={css}
          className="absolute inset-0 h-full w-full
            rotate-6 scale-150 blur-3xl saturate-150"
        />

        {reducedMotion === false && (
          <WaveGradient
            className="animate-fadein"
            // --
            colors={colors}
            seed={2411.5}
            time={8000}
            wireframe={false}
          />
        )}
      </div>
    </Layout>
  );
}
