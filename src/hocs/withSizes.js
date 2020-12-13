import React, { useEffect, useState } from "react";

const withSizes = (WrappedComponent) => {
  return (props) => {
    const [isMobile, setIsMobile] = useState();
    const [isDesktop, setIsDektop] = useState();

    useEffect(() => {
      if (window) {
        if (window.innerWidth > 500) {
          setIsMobile(false);
          setIsDektop(true);
        } else {
          setIsMobile(true);
          setIsDektop(false);
        }
      }
    }, []);

    return (
      <WrappedComponent {...props} isMobile={isMobile} isDesktop={isDesktop} />
    );
  };
};

export default withSizes;
