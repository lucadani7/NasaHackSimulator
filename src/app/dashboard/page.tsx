"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [power, setPower] = useState(97);
    const [satellites, setSatellites] = useState(128);

    useEffect(() => {
        const interval = setInterval(() => {
            setPower((p) => (p > 50 ? p - Math.floor(Math.random() * 2) : p));
            setSatellites((s) => s + (Math.random() > 0.8 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard">
            <h1>NASA CONTROL PANEL — SIM</h1>
            <div className="panel">
                <p>🛰 Active Satellites: {satellites}</p>
                <p>🔋 Power Level: {power}%</p>
                <div className="bar">
                    <div style={{ width: `${power}%` }} />
                </div>
                <p>🛡 Security: COMPROMISED 😈</p>
                <p>🌌 Mission: MARS_COLONY_V4</p>
                <p>💻 Easter Egg: type `sudo make me a hacker` in terminal 😎</p>
            </div>
        </div>
    );
}