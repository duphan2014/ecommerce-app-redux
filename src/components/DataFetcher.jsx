//example: hook - useEffect
import React, { useState, useEffect } from 'react';

function DataFetcher(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('error occured:', error);
                setLoading(false);
            });

            return () => {
                console.log('Cleanup');
            };
    }, []);

    if (loading) return <p>Đang tải dữ liệu...</p>;
    if (!data) return <p>Không có dữ liệu</p>;

    return (
        <div>
            <h1>Dữ liệu đã fetch</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );

}

export default DataFetcher;