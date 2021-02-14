import { Composition } from "remotion";
import { IconSequence } from "./IconSequence";
import { BadFile } from "./LogoVideo/BadFile";
import { GoodFile } from "./LogoVideo/GoodFile";
import { SpinLogo } from "./LogoVideo/Logo";
import { SingleConversion } from "./SingleConversion";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="GifSource"
        component={IconSequence}
        durationInFrames={425}
        fps={25}
        width={128}
        height={128}
        defaultProps={{
          badFiles: [
            {
              color: "#DC2626",
              label: "TIFF"
            },
            {
              color: "#5B21B6",
              label: "PSD",
              goodLabel: "PNG"
            },
            {
              color: "#9D174D",
              label: "HEIC"
            },
            {
              color: "#B45309",
              label: "RAW"
            }
          ]
        }}
      />
      <Composition
        id="FullSequence"
        component={IconSequence}
        durationInFrames={510}
        fps={30}
        width={500}
        height={500}
        defaultProps={{
          badFiles: [
            {
              color: "#DC2626",
              label: "TIFF"
            },
            {
              color: "#5B21B6",
              label: "PSD",
              goodLabel: "PNG"
            },
            {
              color: "#9D174D",
              label: "HEIC"
            },
            {
              color: "#B45309",
              label: "RAW"
            }
          ]
        }}
      />
      <Composition
        id="SingleConversion"
        component={SingleConversion}
        durationInFrames={120}
        fps={30}
        width={500}
        height={500}
        defaultProps={{
          badFile: {
            color: "#DC2626",
            label: "TIFF"
          }
        }}
      />
      <Composition
        id="SpinLogo"
        component={SpinLogo}
        durationInFrames={60}
        fps={30}
        width={500}
        height={500}
      />
      <Composition
        id="GoodFile"
        component={GoodFile}
        durationInFrames={45}
        fps={30}
        width={500}
        height={500}
      />
      <Composition
        id="BadFile"
        component={BadFile}
        durationInFrames={45}
        fps={30}
        width={500}
        height={500}
        defaultProps={{ label: "TIFF", color: "#DC2626" }}
      />
    </>
  );
};
