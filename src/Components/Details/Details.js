import React from 'react';

const Details = ({ topCrypto }) => {
    console.log(topCrypto);

    return (
        <div>
            <h3>Top 10 Crypto with price </h3>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Price</th>


                    </tr>
                </thead>
                <tbody>



                    {
                        topCrypto.map((crypto, index) => <tr key={crypto.asset_id} >
                            <td>{index + 1}</td>

                            <td>{crypto.name}</td>

                            <td>$ {crypto.price_usd} </td>


                        </tr>)

                    }


                </tbody>
            </table>
        </div>
    );
};

export default Details;