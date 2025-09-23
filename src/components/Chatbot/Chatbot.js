import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Prevent multiple instances of the script
    if (window.Tawk_API) return;

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/679572753a8427326074df69/1iifse6pa";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    script.onload = () => {
      window.Tawk_API = window.Tawk_API || {};
    };

    return () => {
      // Cleanup script if necessary
      const tawkScript = document.querySelector(
        "script[src='https://embed.tawk.to/679572753a8427326074df69/1iifse6pa']"
      );
      if (tawkScript) {
        tawkScript.remove();
      }
      delete window.Tawk_API;
    };
  }, []);

  return null;
};

export default Chatbot;
