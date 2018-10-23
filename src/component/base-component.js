import React, { PureComponent } from 'react';

export default class BaseComponent extends PureComponent {
    constructor(props){
        super(props);
    } 
    
    _render() {

    }
    
    render(){
        return(
            <div style={{width: '100%', height:'100%', background: 'green'}}>
                <div>123456</div>
                {this._render()}
            </div>
        );
    }
}