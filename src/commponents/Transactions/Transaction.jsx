import React, { useState } from 'react';
import axios from 'axios';
import './Transaction.css';

const Transaction = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [scanResult, setScanResult] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleScan = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
    
            try {
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setScanResult(response.data);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };
    

    return (
        <div className='transactions'>
            <div className='purchases-and-sales'>
                <h1>Purchases</h1>
                <br />
                <div className="scan-button">
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleScan}>Scan</button>
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
                                    <th>Date</th>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Tax</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scanResult.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Transaction;
