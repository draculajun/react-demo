import CommercialHeader from "../../components/commercial/CommercialHeader";
import {useLocation} from "react-router-dom";

export default function Index() {

    let menuInfoList;
    const location = useLocation();
    if (location.state) {
        menuInfoList = location.state;
    }

    return (
        <div>
            <CommercialHeader menuInfoList={menuInfoList}></CommercialHeader>
        </div>
    )
}