import React from "react";
import {Glyph} from "elemental";

export default class PageNav extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        let swatchStyle = {
            backgroundColor: 'red'
        };
        return (
            <nav className="primary-nav">
                <a href="https://github.com/neonmori" target="_blank" title="View on GitHub" className="primary-nav-icon">
                    <Glyph icon="mark-github" />
                </a>
                <div className="primary-nav-icon right">
                    <div className="primary-nav-swatch" style={swatchStyle}></div>
                </div>
            </nav>
        );
    }
};