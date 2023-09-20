import React from "react";
import { EffectComposer } from "@react-three/postprocessing";
import {
  BlurPass,
  Resizer,
  KernelSize,
  Resolution,
  BlendFunction,
} from "postprocessing";
import {
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer resolutionScale={0}>
      <Bloom
        intensity={0.25} // The bloom intensity.
        kernelSize={KernelSize.LARGE} // blur kernel size
        luminanceThreshold={2} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
        resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL} // blend mode
        offset={[0.0001, 0.0001]} // color offset
      />
    </EffectComposer>
  );
};

export default Effects;
