import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: "React 연습문제",
};

export default Meta;