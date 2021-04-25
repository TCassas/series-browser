import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom"
import { motion } from 'framer-motion'
import SeriesInfo from './Info/SeriesInfo'

const Info = ({ Match }) => {
    const [show, setShow] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchShow = async () => {
        let show = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        show = show.data;
        
        let episodes = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
        show.episodes = episodes.data;

        return show;
    }

    useEffect(async () => {
        const show = await fetchShow();

        setShow(show);

        setLoading(!loading);
    }, [])

    return (
        loading ? null : <SeriesInfo show={show} />
    )
}

export default Info;