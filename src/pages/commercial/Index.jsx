import CommercialHeader from "../../components/commercial/CommercialHeader";
import {useLocation} from "react-router-dom";

export default function Index() {

    const location = useLocation();

    return (
        <div>
            <CommercialHeader {...location.state}></CommercialHeader>
        </div>
    )
}