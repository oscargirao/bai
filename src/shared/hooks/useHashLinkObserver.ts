import { useEffect, useRef } from "react";
import { useLocation, NavigateFunction } from "react-router-dom";

const useHashLinkObserver = (navigate: NavigateFunction) => {
  const location = useLocation();
  const observerRef = useRef<MutationObserver | null>(null);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const unregister = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };

    if (location.hash) {
      const hash = location.hash.substr(1);
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView();
      } else {
        const onMutation: MutationCallback = (mutations, observer) => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView();
            unregister();
          }
        };

        observerRef.current = new MutationObserver(onMutation);
        observerRef.current.observe(document.body, {
          childList: true,
          subtree: true,
        });

        timeoutIdRef.current = setTimeout(() => {
          unregister();
        }, 5000);
      }
    }

    return () => {
      unregister();
    };
  }, [navigate, location]);
};

export default useHashLinkObserver;
