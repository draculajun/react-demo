import './menu.scss';
import {useState} from "react";

export default function Menu({menuInfoList}) {
    const [currentSubmenuInfoList, setCurrentSubmenuInfoList] = useState([]);

    function handleMenuMouserOver(item) {
        return () => {
            setCurrentSubmenuInfoList(item.Sub);
        }
    }

    function handleMenuMouserOut(item) {
        return () => {

        }
    }

    return (
        <div>
            <ul className={'menu'}>
                {
                    menuInfoList.map((item) => (
                        <li key={item.IndustryId}
                            onMouseOver={handleMenuMouserOver(item)}
                            onMouseOut={handleMenuMouserOut(item)}>
                            <div className={'menuItem'}>
                                <img src={item.IndustryIconUrl} alt={item.IndustryName} className={'menuIcon'}/>
                                <div className={'menuName'}>
                                    <span>{item.IndustryName}</span>
                                </div>
                            </div>

                            <div className={'subMenu'}>
                                <ul className={'subMenu_wrapper'}>
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