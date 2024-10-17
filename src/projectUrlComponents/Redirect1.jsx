

import { useEffect } from "react";

const Redirect = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null; // You don't need to render anything here
};

export default Redirect;
