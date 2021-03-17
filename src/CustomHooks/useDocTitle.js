import { useEffect } from "react";

const useDocTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
    return () => {
      //
    };
  }, [count]);
};

export default useDocTitle;
