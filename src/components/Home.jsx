import React, { useState, useEFfect, useEffect } from 'react'
import Header from './Home/Header';
import Form from './Home/Form';
import ShowsList from './Home/ShowsList';
import { Switch, Link, Route } from 'react-router-dom';
import Axios from 'axios';
import { motion } from 'framer-motion';

const Home = () => {
    const [search, setSearch] = useState('');
    const [shows, setShows] = useState([]);
    const [visibleShows, setVisibleShows] = useState(0)

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 }
        },
        exit: {
            opacity: 0
        }
    }

    useEffect(() => {
        //Ancho de la aplicación - padding
        let appWidth = ((document.querySelector('.App').getBoundingClientRect().width - 80));
        //Ancho total (sobresaliente de la pagina) del slider
        let sliderWidth = (200 * shows.length);

        //Si el ancho del slider es mayor al de la aplicación, calcular el espacio de "juego" sobrante, caso contrario no hay espacio sobrante para jugar
        setVisibleShows(sliderWidth > appWidth ? appWidth - sliderWidth : 0);
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request = await Axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
        if(request.data.length != 0) {
            setShows(request.data);
        } else {
            setShows("empty");
        }

        console.log(shows)
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const info = (show) => {
        console.log(show);
    }

    return (
        <motion.div className='App'
            variants={containerVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
            <Header />
            <Form submit={handleSubmit} change={handleChange}/>
            <ShowsList shows={shows} items={visibleShows} info={info}/>
        </motion.div>
    );
}

export default Home;