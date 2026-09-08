import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useLayoutEffect(() => {
    const prevPath = prevPathRef.current;
    prevPathRef.current = pathname;

    // Do not instantly reset scroll if simply switching partners on the Partners page
    const isPartnerSwitch =
      prevPath.startsWith("/partners") && pathname.startsWith("/partners");

    if (!isPartnerSwitch) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;