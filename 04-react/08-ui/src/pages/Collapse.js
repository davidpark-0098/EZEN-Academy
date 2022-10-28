import React, { memo } from "react";

import CollapseCp from "../components/CollapseCp";

const content = [
    {
        title: "Open Collapsible",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
    {
        title: "Open Collapsible",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
    {
        title: "Open Collapsible",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
    {
        title: "Open Collapsible",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
    {
        title: "Open Collapsible",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    }
];

const Collapse = memo(() => {
    return (
        <div>
            <h2>Collapse</h2>
            {content.map(({title, content}, i) => <CollapseCp key={i} title={title} content={content} />)}
        </div>
    );
});

export default Collapse;
