
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const Crypto = () => {
    const [allCrypto, setallCrypto] = useState([])
    console.log(allCrypto);

    useEffect(() => {
        
        const url = "https://rest.coinapi.io/v1/assets?apikey=C3F730FB-A0CF-442E-B0FF-EF73DC1FCDF1";
        fetch(url)
            .then(res => res.json())
            .then(data => setallCrypto(data))
    }, [])

    const cryptos = allCrypto.filter(crypto => crypto.type_is_crypto === 1);
    const descendingCryptos = cryptos.sort((a, b) => (b.price_usd - a.price_usd));
    const topCrypto = descendingCryptos.slice(0, 10);
   
    return (
        <div>
           

            
                
                <Details key={topCrypto.asset_id} topCrypto={topCrypto} ></Details>
            

        </div>
    );
};

export default Crypto;