import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Lens Touch`;
  }, [title]);
};

export default useTitle;
