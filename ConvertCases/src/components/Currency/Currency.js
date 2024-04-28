import React, { useEffect, useState } from 'react'
import CurrencyDropdown from '../dropdown/dropdown';
import { HiArrowsRightLeft } from 'react-icons/hi2';

export default function Currency() {

    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCrrency] = useState("USD");
    const [toCurrency, setToCrrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [converting, setConverting] = useState(false);

    const fetchCurrency = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json()
            setCurrencies(Object.keys(data));
        }
        catch (error) {
            console.error("Errro fetching ", error)
        }
    };
    useEffect(() => {
        fetchCurrency();
    }, []);
    console.log(currencies);
    console.log(fromCurrency);
    console.log(toCurrency);
    console.log(amount);
    // https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD ;
    const currencyConver = async () => {
        if (!amount) return;
        setConverting(true);
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json()
            setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
        }
        catch (error) {
            console.error("Errro fetching ", error)
        }
        finally {
            setConverting(false)
        }
    }

    // const handleFavorites = (currency) => {

    // }
    const swapCurrencies = () => {
        console.log("ok")
        setFromCrrency(toCurrency);
        setToCrrency(fromCurrency)
    }
    return (
        // https://api.frankfurter.app/currencies ;

        <div className='container border my-4 p-3'>
            <h2>Currency Convertor</h2>

            <div className='grid d-flex justify-content-between w-75 align-items-center'>
                <CurrencyDropdown currencies={currencies} title='From :' currency={fromCurrency}
                    setCurrency={setFromCrrency} />

                <button className='currencySwap'>
                    <HiArrowsRightLeft onClick={swapCurrencies} />
                </button>
                <CurrencyDropdown currencies={currencies} title='To:' currency={toCurrency}
                    setCurrency={setToCrrency} />
            </div>
            <div className='amountFiled'>

                <div className='amountEnter'>
                    <label>Amount :</label>
                    <input type='number' onChange={(e) => { setAmount(e.target.value) }} value={amount} />
                </div>
                {convertedAmount && <div>
                    Converted Amount: {convertedAmount}
                </div>}
            </div>
            <div>
                <button onClick={currencyConver}
                    className={`${converting ? "animation-pulse" : ""} currencyConvertor`}
                >Convert</button>
            </div>


        </div>
    )
}
