import { useEffect, useState } from 'react';

export const useResize = (): number | null => {
    const [windowSize, setWindowSize] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize(window.innerWidth);

            const handleResize = (): void => {
                setWindowSize(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return (): void => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return windowSize;
};
