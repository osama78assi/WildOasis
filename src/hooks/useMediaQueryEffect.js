import { useCallback, useEffect } from "react";

export function useMediaQueryEffect(query, onMatch, onNotMatch) {
  if (onMatch === undefined || onNotMatch === undefined)
    throw new Error("missing functions");
  const memoizedOnMatch = useCallback(onMatch, []); // No dependency to make sure the function stay the same across re-renders
  const memoizedOnNotMatch = useCallback(onNotMatch, []);
  useEffect(() => {
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
