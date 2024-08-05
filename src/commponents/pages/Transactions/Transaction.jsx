import React, { useContext, useState } from 'react';
import axios from 'axios';
import './Transaction.css';
import { StoreContext } from '../../../context/StoreContext';

const Transaction = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [scanResult, setScanResult] = useState(null);
    const { salesItems } = useContext(StoreContext);
    const [isLoading,setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleScan = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                setIsLoading(true)
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                response.data.map((e)=>{
                    console.log(e);
                })
               
                setScanResult(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div className='transactions'>
            <div className='purchases'>
                <h1>Purchases</h1>
                <br />
                <div className="scan-button">
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleScan} disabled={isLoading}>{isLoading ? 'Scanning...' : 'Scan'}</button>
                </div>
                <br />
                <div className="cart-items-title">
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                {scanResult && (
                    <div className="scan-results">
                        <h2>Scan Results:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {scanResult.map((item, index) => (
                                
                                    <tr key={index}>
                                        <td>{item.Item}</td>
                                        <td>{item.Quantity}</td>
                                        <td>{item.Price}</td>
                                        <td>{item.total ?? 0}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className='sales'>
                <h1>Sales</h1>
                <br />
                <div className="cart-items-title">
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <hr />
                {salesItems.map((item, index) => (
                    <div key={index} className='cart-items-item'>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                        <p>${item.total}</p>
                    </div>
                    
                ))}
                <hr />
            </div>
        </div>
    );
};

export default Transaction;
