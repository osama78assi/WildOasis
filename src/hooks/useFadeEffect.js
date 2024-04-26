import { useEffect, useRef } from "react";

/**
 * @param {*} openState
 * @param {*} hideFn
 * @param {*} time
 */
export function useFadeEffect(openState, hideFn, time = 1000) {
  const fadeRef = useRef(null);
  useEffect(() => {
    if (fadeRef.current && openState != "") {
      fadeRef.current.style.opacity = 0;
      let opacity = 0;
      let fading = setInterval(() => {
        opacity += 0.1;
        fadeRef.current.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fading);
      }, time / 100);
    }
  }, [openState, fadeRef, time]);

  function fadeOut() {
    if (fadeRef.current) {
      let opacity = 1;
      let fading = setInterval(() => {
        opacity -= 0.1;
        fadeRef.current.style.opacity = opacity;
        if (opacity <= 0) {
          clearInterval(fading);
          hideFn?.();
        }
      }, time / 50);
    }
  }

  return { fadeRef, fadeOut };
}
