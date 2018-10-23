import React, { PureComponent } from 'react';

import TopBar from '../component/top-bar.js';
import '../sass/pages/home.scss';


class Home extends PureComponent{
    constructor(props){
        super(props);
    }
    
    render() {
        var leftEl = <div> 返回</div>;
        return(
            <div className="home-container" >
                <TopBar title='首页'/>
                就安静安静
            </div>
        );
    }
}

export default Home;
