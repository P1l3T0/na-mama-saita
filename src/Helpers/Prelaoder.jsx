import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", function () {
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading && <div className="preloader"></div>}
    </div>
  );
};

export default Preloader;