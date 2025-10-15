"use client";
import Spline from "@splinetool/react-spline";
import LightRays from "./reactBits/LightRays";
import PixelBlast from "./reactBits/PixelBlast";
import LiquidEther from "./reactBits/LiquidEther";

export function HeroSpline3DBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/2x1S7V5bYWumZ50f/scene.splinecode"
        className="w-full h-full"
        style={{
          mixBlendMode: "normal",
          opacity: 1,
        }}
      />
    </div>
  );
}

export function ProjectsSpline3DBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/OawnZdNdfOHLCXgK/scene.splinecode"
        className="w-full h-full"
        style={{
          mixBlendMode: "normal",
          opacity: 1,
        }}
      />
    </div>
  );
}

export function ServiceSpline3DBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/jj0CesQLAr3YN6pg/scene.splinecode"
        className="w-full h-full"
        style={{
          mixBlendMode: "normal",
          opacity: 1,
        }}
      />
    </div>
  );
}

export function LightRaysBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
}

export function LiquidEtherBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Remove pointer-events-none to allow background to receive interactions */}
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        // Add these props to ensure it always runs
        style={{ pointerEvents: "auto" }}
        className="liquid-ether-bg"
      />
    </div>
  );
}

export function PixelBlastBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples={true}
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={true}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent={true}
        className="w-full h-full"
        style={{
          mixBlendMode: "normal",
          opacity: 0.8,
        }}
        antialias={true}
        autoPauseOffscreen={false}
        noiseAmount={0.05}
      />
    </div>
  );
}

export default Spline;
