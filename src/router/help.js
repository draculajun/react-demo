import ShoppingProcess from "../pages/help/ShoppingProcess";
import Help from "../pages/help/Help";
import DeliveryMethod from "../pages/help/DeliveryMethod";

const help = {
    path: "help",
    title: '帮助中心',
    element: <Help/>,
    children: [
        {
            path: "shoppingProcess",
            title: '购物指南',
            element: <ShoppingProcess/>,
        }, {
            path: "deliveryMethod",
            title: '配送方式',
            element: <DeliveryMethod/>,
        }
    ]
}

export default help;