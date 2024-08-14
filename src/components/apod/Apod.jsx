import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./Apod.css";

function ApodCard({ title, date, url, explanation, copyright }) {
    return (
        <div className="picture-card">
            <h3>{title}</h3>
            <h4>{date}</h4>
            <img src={url} alt="Astronomy Picture of the Day" />
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
    );
}

function Apod() {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(API_URL);
            const res = await data.json();
            setPicture(res);
        };

        fetchData().catch((err) => console.error(err));
    }, []);

    console.log(picture);

    return (
        <div className="picture-container">
            {!picture ? (
                <CircularProgress sx={{ color: "#271084" }} />
            ) : (
                picture.map((item, idx) => <ApodCard key={idx} {...item} />)
            )}
        </div>
    );
}

export default Apod;