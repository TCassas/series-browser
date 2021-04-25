import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import DOMpurify from 'dompurify'
import Episode from './Episode'

const SeriesInfo= (props) => {
    const [menuOption, setMenuOption] = useState(true);

    const containerVariants = {
        hidden: {
            opacity: 0
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

    const handleOption = () => {
        setMenuOption(!menuOption);
        console.log(props.show);
        console.log(menuOption)
    }

    return (
        <motion.div className='App info'
            variants={containerVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
            <section className='info-left'>
                <h2> {props.show.name} </h2>
                <article 
                        className='info-show-image'
                        style={{backgroundImage: props.show.image && `url(${props.show.image.medium})`}}
                />
                <div className='info-show-summary' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(props.show.summary)}}></div>
                <Link to={`/`}> Go Back </Link>
            </section>
            <section className='info-right'>
                <section id='show-menu'>
                    <h2 id='selected' onClick={handleOption} > Information</h2>
                    <h2 onClick={handleOption} >Episodes</h2>
                </section>
                {menuOption ? 
                    <AnimatePresence>
                        <motion.section id='show-information'
                            variants={containerVariants}
                            initial = 'hidden'
                            animate = 'visible'
                            exit = 'exit'
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Status</td>
                                        <td>{props.show.status}</td>
                                    </tr>
                                    <tr>
                                        <td>Genres</td>
                                        <td>xD</td>
                                    </tr>
                                    <tr>
                                        <td>Network</td>
                                        <td>{props.show.network.name} ({props.show.network.country.name})</td>
                                    </tr>
                                    <tr>
                                        <td>Premiered</td>
                                        <td>{props.show.premiered}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>{props.show.type}</td>
                                    </tr>
                                    <tr>
                                        <td>Runtime</td>
                                        <td>{props.show.runtime}</td>
                                    </tr>
                                    <tr>
                                        <td>Schedule</td>
                                        <td>{props.show.schedule.days[0]} - {props.show.schedule.time}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><a href={props.show.officialSite}>Official Site</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <article>
                                <p><i>Network: {props.show.network.name} ({props.show.network.country.name})</i></p>
                            </article>
                        </motion.section>
                    </AnimatePresence>
                :
                    <AnimatePresence>
                        <motion.section className='episodes'
                            variants={containerVariants}
                            initial = 'hidden'
                            animate = 'visible'
                            exit = 'exit'
                            key={props.show.id}
                        >
                            {props.show.episodes.map((episode, i) =>
                                <Episode episode={episode} key={episode.id} i={i} />
                            )}
                        </motion.section>
                    </AnimatePresence>
                }
            </section>
        </motion.div>
    )
}

export default SeriesInfo