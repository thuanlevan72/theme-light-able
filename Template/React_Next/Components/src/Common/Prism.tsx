import React, { useEffect, useRef } from "react";
import Prism from 'prismjs'

const PrismCode = (props: any) => {
    const ref = useRef<any>();

    useEffect(() => {
        highlight();
    }, []);

    const highlight = () => {
        if (ref && ref.current) {
            Prism.highlightElement(ref.current);
            ref.current.setAttribute('tabindex', '0');
        }
    };

    const { code } = props;
    return (
        <React.Fragment>
            <pre className="language-markup">
                <code ref={ref} className="language-markup">
                    {code.trim()}
                </code>
            </pre>
        </React.Fragment>
    );
};

export default PrismCode;
