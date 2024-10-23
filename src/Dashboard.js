import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        axios.get("/sms/metrics")
            .then(response => {
                setMetrics(response.data.metrics);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>SMS Metrics</h1>
            <table>
                <thead>
                    <tr><th>Country</th><th>SMS Sent</th><th>Success Rate</th></tr>
                </thead>
                <tbody>
                    {metrics.map((metric, index) => (
                        <tr key={index}>
                            <td>{metric.country}</td>
                            <td>{metric.sms_sent}</td>
                            <td>{metric.success_rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
