import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import sample from '../assets/img/sample.png'


const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>

                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property='og:type' content='props.website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:image' content={props.image} />
                <meta property='og:url' content={props.url} />

                <link rel="shortcut icon" href={props.image} type="image/png" />
                <link rel="icon" href={props.image} type="image/png" />
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    author: 'teacher',
    image: sample,
    url: window.location.href
};

export default Meta;