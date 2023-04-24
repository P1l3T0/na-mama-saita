import { useEffect, useState } from 'react';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", function () {
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            {isLoading && <div id="preloader"></div>}
        </div>
    );
}