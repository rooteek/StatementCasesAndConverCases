// import { HiMiniStar } from "react-icons/hi2";

import '../dropdown/dropdown.css';
const CurrencyDropdown =({
    currencies,currency,setCurrency,fovorites,handleFavorites,title
})=>{
    return(
        <div className="">
            <label htmlFor={title} >{title}</label>
            <div>
                <select value={currency}
                 onChange={(e)=>setCurrency(e.target.value)}
                 className="selectOption"
                 >
                    <hr/>
                   {
                    currencies?.map((currency)=>{
                        return <option value={currency} key={currency}>{currency}</option>;
                    })
                   }
                </select>
                {/* <button><HiMiniStar/></button> */}
            </div>
        </div>
    )
}
export default CurrencyDropdown;