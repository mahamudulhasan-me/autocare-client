import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed right-0 top-1/2 cursor-pointer border z-50"
          onClick={scrollToTop}
        >
          <div className="flex flex-col items-center justify-center rounded-md">
            <div className="bg-slate-900 text-primary px-2 py-4 text-xl">
              <FaArrowUp />
            </div>
            <h3 className="bg-primary text-white p-1.5">UP</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default BackToTop;
