import './menu.scss';
import {Component} from "react";

export default class Menu extends Component {
    state = {
        currentMenuId: null,
        currentSubmenuInfoList: [],
    }

    handleMenuMouserOver = (item) => {
        return () => {
            this.setState({currentMenuId: item.IndustryId});
            this.setState({currentSubmenuInfoList: item.Sub})
        }
    }

    handleMenuMouserOut = (item) => {
        return () => {

        }
    }

    render() {
        const {menuInfoList} = this.props;

        const {currentSubmenuInfoList} = this.state;
        return (
            <div>
                <ul className='menu'>
                    {
                        menuInfoList.map((item) => (
                            <li key={item.IndustryId}
                                onMouseOver={this.handleMenuMouserOver(item)}
                                onMouseOut={this.handleMenuMouserOut(item)}>
                                <div className='menuItem'>
                                    <img src={item.IndustryIconUrl} alt={item.IndustryName} className='menuIcon'/>
                                    <div className="menuName">
                                        <span>{item.IndustryName}</span>
                                    </div>
                                </div>

                                <div className='subMenu'>
                                    <ul className="subMenu_wrapper">
                                        {
                                            currentSubmenuInfoList.map((subItem) => (
                                                <li key={subItem.IndusId}>
                                                    {subItem.Name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}