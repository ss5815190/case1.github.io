import { useEffect } from "react";
import { useLocation} from "react-router-dom";


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
/*
const ScrollToTop = () => {

useEffect(() => {
    window.history.scrollRestoration = 'manual'
    console.log("manual")
  }, []);

  return null;
};

export default ScrollToTop;


  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
*/