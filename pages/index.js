import Head from "next/head";
import { useEffect, useRef } from "react";
import { Gradient } from "../lib/vendor/gradient";

const COLORS = ["#ef008f", "#6ec3f4", "#7038ff", "#ffba27"];

export default function HomePage() {
  const [canvas_1, canvas_2] = [useRef(null), useRef(null)];

  useEffect(() => {
    COLORS.forEach((hex, i) => {
      canvas_1.current.style.setProperty(`--gradient-color-${i + 1}`, hex);
      canvas_2.current.style.setProperty(`--gradient-color-${i + 1}`, hex);
    });
    new Gradient().initGradient("#canvas-1");
    new Gradient({ wireframe: true }).initGradient("#canvas-2");
  });

  return (
    <main className="mx-5 mt-10">
      <Head>
        <title>3D Plane Gradients</title>
      </Head>

      <section className="space-y-10">
        <canvas
          id="canvas-1"
          ref={canvas_1}
          data-transition-in
          style={{ height: "calc(50vh - 2.5*1.5rem)" }}
          className="w-full rounded-3xl mx-auto max-w-screen-lg"
        />
        <canvas
          id="canvas-2"
          ref={canvas_2}
          data-transition-in
          style={{ height: "calc(50vh - 2.5*1.5rem)" }}
          className="w-full rounded-3xl mx-auto max-w-screen-lg"
        />
      </section>
    </main>
  );
}
