import { useEffect } from "react";


const ScrollToTop = () => {

useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return null;
};

export default ScrollToTop;
/*
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
*/
/*
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
*/