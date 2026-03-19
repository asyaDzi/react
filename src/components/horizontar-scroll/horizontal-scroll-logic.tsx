import { useState } from "react";

export default function useScrollLogic() {
  const [progress, setProgress] = useState(0);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    setProgress((scrollTop / (scrollHeight - containerHeight)) * 100);
  };

  return {
    progress,
    scrollHandler,
  };
}
