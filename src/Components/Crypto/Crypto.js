
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const Crypto = () => {
    const [allCrypto, setallCrypto] = useState([])
    console.log(allCrypto);

    useEffect(() => {
        // const url ="https://rest.coinapi.io/v1/assets?apikey=3FE4E05A-58EE-45C4-9C89-8A4E01F00F8B"; C3F730FB-A0CF-442E-B0FF-EF73DC1FCDF1
        const url = "https://rest.coinapi.io/v1/assets?apikey=C3F730FB-A0CF-442E-B0FF-EF73DC1FCDF1";
        fetch(url)
            .then(res => res.json())
            .then(data => setallCrypto(data))
    }, [])

    const cryptos = allCrypto.filter(crypto => crypto.type_is_crypto === 1);
    console.log(cryptos);
    const descendingCryptos = cryptos.sort((a, b) => (b.price_usd - a.price_usd));
   
    const topCrypto = descendingCryptos.slice(0, 10);
    console.log('Ordered list', topCrypto);
    return (
        <div>
           

            
                
                <Details key={topCrypto.asset_id} topCrypto={topCrypto} ></Details>
            

        </div>
    );
};

export default Crypto;