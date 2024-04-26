import { useCallback, useLayoutEffect } from "react";
export function useMediaQueryLayoutEffect(query, onMatch, onNotMatch) {
  if (onMatch === undefined || onNotMatch === undefined)
    throw new Error("missing functions");
  const memoizedOnMatch = useCallback(onMatch, [onMatch]);
  const memoizedOnNotMatch = useCallback(onNotMatch, [onNotMatch]);
  useLayoutEffect(() => {
    function handleMediaQuery() {
      if (window.matchMedia(`(max-width: ${query}px)`).matches) {
        memoizedOnMatch();
      } else {
        memoizedOnNotMatch();
      }
    }
    handleMediaQuery();
    window.addEventListener("resize", handleMediaQuery);
    return () => window.removeEventListener("resize", handleMediaQuery);
  }, [query, memoizedOnMatch, memoizedOnNotMatch]);
}
