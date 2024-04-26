import { useState } from "react";
import { useMediaQueryLayoutEffect } from "../../hooks/useMediaQueryLayoutEffect";

// used this way instead of object to not get the component re-render
// when the user resize the window because objects aren't the same
// so when the hook useMediaQueryLayoutEffect call the setter it will
// see the result isn't the same as it is on the object itself

export function usePieData() {
  const [svgSm, setSvgSm] = useState(false);
  const [svgMd, setSvgMd] = useState(false);
  const [heading, setHeading] = useState("h2");
  const onFirstMatch = () => {
    setSvgMd(true);
  };
  const onFirstNotMatch = () => {
    setSvgMd(false);
  };

  useMediaQueryLayoutEffect(1160, onFirstMatch, onFirstNotMatch);

  const onSecondMatch = () => {
    setHeading("h3");
  };
  const onSecondNotMatch = () => {
    setHeading("h2");
  };

  useMediaQueryLayoutEffect(600, onSecondMatch, onSecondNotMatch);

  const onThirdMatch = () => {
    setSvgMd(false);
    setSvgSm(true);
  };
  const onThirdNotMatch = () => {
    setSvgMd(true);
    setSvgSm(false);
  };

  useMediaQueryLayoutEffect(400, onThirdMatch, onThirdNotMatch);

  return { svgMd, heading, svgSm };
}
