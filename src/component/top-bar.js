import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../sass/component/top-bar.scss';
import backIcon from '../images/component/topbar/icon-arrow.png';
export default class TopBar extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { leftEl, showLeftBack, title, rightEl} = this.props;
        let leftContent = null;
        if (leftEl){
            leftContent = leftEl;
        } else if (showLeftBack){
            leftContent = <img src={backIcon}/> ;
        }
        return (
            <div className="top-bar-container">
                <div className="left-wrap" onClick={this.props.leftClick}>
                    {leftContent}
                </div>
                <div className="center">
                    {title}
                </div>
                <div className="right-wrap">
                   {rightEl}
                </div>
            </div>
        );
    }
}

TopBar.propTypes = {
    showLeftBack: PropTypes.bool,
    title: PropTypes.string,
    rightEl: PropTypes.node,
    leftEl: PropTypes.node,
    leftClick: PropTypes.func
}