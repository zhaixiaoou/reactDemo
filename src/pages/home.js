import React, { PureComponent } from 'react';

import TopBar from '../component/top-bar.js';
import JellyBean from '../component/jelly-bean.js';

import '../sass/pages/home.scss';
import { HomeImg } from '../images/pages/home';
import { ENUM_JELLY_BEAN } from '../Constant';

const jellyData = [
    { topel: HomeImg.iconAssess, topType: ENUM_JELLY_BEAN.IMG, bottomel: '评估管理', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/assess' },
    { topel: HomeImg.iconPurchase, topType: ENUM_JELLY_BEAN.IMG, bottomel: '采购订单', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/purchase' },
    { topel: HomeImg.iconSale, topType: ENUM_JELLY_BEAN.IMG, bottomel: '销售订单', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/sales' },
    { topel: HomeImg.iconOverhaul, topType: ENUM_JELLY_BEAN.IMG, bottomel: '整备管理', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/overhaul' },

    { topel: HomeImg.iconLicense, topType: ENUM_JELLY_BEAN.IMG, bottomel: '牌证管理', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/license' },
    { topel: HomeImg.iconSync, topType: ENUM_JELLY_BEAN.IMG, bottomel: '同步管理', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/sync' },
    { topel: HomeImg.iconStaff, topType: ENUM_JELLY_BEAN.IMG, bottomel: '员工管理', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/staff' },
    { topel: HomeImg.iconPrice, topType: ENUM_JELLY_BEAN.IMG, bottomel: '行情估价', bottomType: ENUM_JELLY_BEAN.TEXT, link: '/price' }
]

class Home extends PureComponent{
    constructor(props){
        super(props);
    }

    // getJellyBean(){
    //     let jellyData = [
    //         { topel: HomeImg.iconAssess, topType: ENUM_JELLY_BEAN.IMG, bottomel: '评估管理', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //         { topel: HomeImg.iconPurchase, topType: ENUM_JELLY_BEAN.IMG, bottomel: '采购订单', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //         { topel: HomeImg.iconSale, topType: ENUM_JELLY_BEAN.IMG, bottomel: '销售订单', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //         { topel: HomeImg.iconOverhaul, topType: ENUM_JELLY_BEAN.IMG, bottomel: '整备管理', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },

    //         { topel: HomeImg.iconLicense, topType: ENUM_JELLY_BEAN.IMG, bottomel: '牌证管理', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //         { topel: HomeImg.iconSync, topType: ENUM_JELLY_BEAN.IMG, bottomel: '同步管理', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //         { topel: HomeImg.iconStaff, topType: ENUM_JELLY_BEAN.IMG, bottomel: '员工管理', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //         { topel: HomeImg.iconPrice, topType: ENUM_JELLY_BEAN.IMG, bottomel: '行情估价', bottomType: ENUM_JELLY_BEAN.TEXT, onclick: '' },
    //     ];
    //     return jellyData
    // }
    
    render(){
        return(
            <div className="home-container" >
                <TopBar title='首页'/>
                <JellyBean data={jellyData} />
            </div>
        );
    }
}

export default Home;
