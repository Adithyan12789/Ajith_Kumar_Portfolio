"use client"
import Spline from '@splinetool/react-spline';

export function ServiceSpline3DBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/OawnZdNdfOHLCXgK/scene.splinecode" 
        className="w-full h-full"
        style={{
          mixBlendMode: 'normal',
          opacity: 1
        }}
      />
    </div>
  );
}

export function HeroSpline3DBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/2x1S7V5bYWumZ50f/scene.splinecode"
        className="w-full h-full"
        style={{
          mixBlendMode: 'normal',
          opacity: 1
        }}
      />
    </div>
  );
}

export default Spline; 