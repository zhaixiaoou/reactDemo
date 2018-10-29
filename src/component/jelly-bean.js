import React, {PureComponent} from 'react';
import { ENUM_JELLY_BEAN } from '../Constant';

import { NavLink, Link } from 'react-router-dom';

import '../sass/component/jelly-bean.scss';

export default class JellyBean extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        const itemWidth = document.body.clientWidth;
        const datael = this.props.data.map((item, index)=> {
            let topel ='';
            if (item.topType === ENUM_JELLY_BEAN.IMG) {
                topel = <img className="jelly-img" src={item.topel}/>
            } else {
                topel = <div>{item.topel}</div>
            }
            return (
                <Link className="jelly-item" style={{width: itemWidth/ 4 }}  key={index} to={item.link}> 
                    {topel}
                    <div style={{marginTop: '5px' }}>{item.bottomel}</div>
                </Link>
            )
        });
        return(
            <div className="jelly-container">
                {datael}
            </div>
        );
    }
}


