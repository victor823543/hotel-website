import { useRef, useEffect, useState } from 'react'

const useContainerWidth = () => {
    const [containerWidth, setContainerWidth] = useState(0)
    const elementRef = useRef<HTMLDivElement>(null)
    const [widthExcludingPadding, setWidthExcludingPadding] = useState(0);

    useEffect(() => {
        // Function to update the width
        const updateWidth = () => {
        if (elementRef.current) {
            const element = elementRef.current;
            const computedStyle = getComputedStyle(element);

            const width = element.offsetWidth;
            const paddingLeft = parseFloat(computedStyle.paddingLeft);
            const paddingRight = parseFloat(computedStyle.paddingRight);

            const widthExcludingPadding = width - paddingLeft - paddingRight;

            setContainerWidth(width);
            setWidthExcludingPadding(widthExcludingPadding);

        }
        };

        // Measure the width after the component has mounted
        updateWidth();

        // Add event listener to handle window resize
        window.addEventListener('resize', updateWidth);

        // Clean up event listener on component unmount
        return () => {
        window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return {
        elementRef,
        containerWidth,
        widthExcludingPadding,
    }
    }

export default useContainerWidth