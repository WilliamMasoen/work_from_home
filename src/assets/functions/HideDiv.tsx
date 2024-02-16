// This function is to hide divs when other parts of the page is clicked

import React, { useEffect } from "react";

const HideDiv: React.FC = () => {
  useEffect(() => {
    const divToHide = document.getElementById("divToHide");

    const handleClick = (e: MouseEvent) => {
      if (
        divToHide &&
        e.target instanceof HTMLElement &&
        e.target.id !== "divToHide"
      ) {
        divToHide.style.display = "none";
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <></>; // This component doesn't render anything
};

export default HideDiv;
