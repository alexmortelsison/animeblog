import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-transparent">
      <p className="text-muted-foreground text-sm bottom-0 flex items-center justify-center">
        &#169; | {year} | anime.List | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
