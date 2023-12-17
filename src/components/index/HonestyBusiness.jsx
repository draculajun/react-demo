import BusinessCard from "../business/BusinessCard";
import './HonestyBusiness.scss'

export default function HonestyBusiness({honestyBusinessList}) {

    return (
        <div className="honestyBusinessContainer">
            {
                honestyBusinessList.length > 0 ? (
                    <div className="businessCard_wrapper">
                        {
                            honestyBusinessList.map(item =>
                                (<BusinessCard key={item.ShopId} cardInfo={item}></BusinessCard>))
                        }
                    </div>
                ) : <h1>noData</h1>
            }
        </div>
    )
}
