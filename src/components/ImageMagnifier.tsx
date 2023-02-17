import { forwardRef, LegacyRef, useState } from "react";

type ImageMagnifierProps = {
  src: string;
  width: string;
  height: string;
  magnifierHeight: number;
  magnifieWidth: number;
  zoomLevel: number;
};

const ImageMagnifier = forwardRef(
  (props: ImageMagnifierProps, ref: LegacyRef<HTMLImageElement>) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    return (
      <div
        style={{
          position: "relative",
          height: props.height,
          width: props.width,
        }}
      >
        <img
          ref={ref}
          src={props.src}
          style={{
            height: props.height,
            width: props.width,
            position: "relative",
            zIndex: 0,
          }}
          onMouseEnter={(e) => {
            // update image size and turn-on magnifier
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            // calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // close magnifier
            setShowMagnifier(false);
          }}
          alt={"img"}
        />

        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",

            // prevent maginier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${props.magnifierHeight}px`,
            width: `${props.magnifieWidth}px`,
            // move element center to cursor pos
            top: `${y - props.magnifierHeight / 2}px`,
            left: `${x - props.magnifieWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            borderRadius: "50%",
            backgroundColor: "var(--black)",
            backgroundImage: `url('${props.src}')`,
            backgroundRepeat: "no-repeat",

            //calculate zoomed image size
            backgroundSize: `${imgWidth * props.zoomLevel}px ${
              imgHeight * props.zoomLevel
            }px`,

            //calculete position of zoomed image.
            backgroundPositionX: `${
              -x * props.zoomLevel + props.magnifieWidth / 2
            }px`,
            backgroundPositionY: `${
              -y * props.zoomLevel + props.magnifierHeight / 2
            }px`,
          }}
        ></div>
      </div>
    );
  }
);

export default ImageMagnifier;
