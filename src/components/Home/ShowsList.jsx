import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ShowsList(props) {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            x: '0',
            transition: { delay: 0.5, stiffnes: 1 }
        },
        exit: {
            opacity: 0,
            x: '-100vw'
        }
    }

    return(
        <section id='show-list-container'>
            {props.shows != "empty" ?
                <motion.div id='show-list'
                    drag='x'
                    dragConstraints={{right: 0, left: props.items}}
                >
                {props.shows.map(show =>
                    <motion.article key={show.show.id}
                        variants={containerVariants}
                        initial = 'hidden'
                        animate = 'visible'
                        exit = 'exit'
                    >
                        <article 
                            className='show-image'
                            style={{backgroundImage: show.show.image && `url(${show.show.image.medium})`}}
                        />
                        
                        <Link to={`/show/${show.show.id}`} key={show.show.id}> {show.show.name} </Link>
                    </motion.article>            
                )}
                </motion.div>
            :
                <p className="error">No shows has been found (╯°益°)╯彡┻━┻</p>
            }
        </section>
    )
}