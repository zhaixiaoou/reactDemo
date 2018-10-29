import React, { PureComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';

import homeIcon from '../images/component/footer/icon_home.png';
import homeActiveIcon from '../images/component/footer/icon_home_selected.png';
import auctionIcon from '../images/component/footer/icon_auction.png';
import auctionActiveIcon from '../images/component/footer/icon_auction_selected.png';
import inventoryIcon from '../images/component/footer/icon_car.png';
import inventoryActiveIcon from '../images/component/footer/icon_car_selected.png';
import mineIcon from '../images/component/footer/icon_me.png';
import mineActiveIcon from '../images/component/footer/icon_me_selected.png';


const FooterData = [
    { text: '首页', icon: homeIcon, activeIcon: homeActiveIcon, link: '/home'},
    { text: '收车', icon: auctionIcon, activeIcon: auctionActiveIcon, link: '/home/auction'},
    { text: '库存', icon: inventoryIcon, activeIcon: inventoryActiveIcon, link: '/home/inventory'},
    { text: '我的', icon: mineIcon, activeIcon: mineActiveIcon, link: '/home/mine'},
];
class Footer extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    handleTabClick(index){
       this.setState({currentIndex: index});
    }
    
    render() {
        var currentIndex = this.state.currentIndex;
        var dataRender = FooterData.map((item, index) => {
            return (
                <Link className="footer-item" key={index} to={item.link} onClick={()=>this.handleTabClick(index)}>
                    <img src={currentIndex === index ? item.activeIcon : item.icon} />
                    <span className={currentIndex === index ? 'span-selected' : 'span-normal'}>{item.text}</span>
                </Link>
            )
        })
        return (
            <div className="app-footer">
                {dataRender}
            </div>
        );
    }

}
export default Footer;