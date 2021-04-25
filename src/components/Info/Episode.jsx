import { React, useState, useEffect } from 'react'
import DOMpurify from 'dompurify'
import { motion, AnimatePresence } from 'framer-motion'

const Episode = (props) => {
    const [loading, setLoading] = useState(true);
    const [showInfo, setShowInfo] = useState(false);

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: -10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 * props.i }
        },
        exit: {
            opacity: 0,
            y: -10
        }
    }

    useEffect(async() => {
        if(props.episode.summary !== "" && props.episode.summary) {
            props.episode.summary = await props.episode.summary.replace('</p><p><br />', '');
        }
        setLoading(!loading);
    }, [])

    const handleInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <motion.article className='episode-article'
            variants={containerVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
            {!loading ?
            <div>
                <div className='episode-header'>
                    <span className='episode-number'>#{props.episode.number}</span>
                    <p className='episode-title'>{props.episode.name}</p>
                    {props.episode.summary ?
                        <span 
                            className='episode-infoButton'
                            onClick={handleInfo}
                        >
                            {showInfo ? 
                                "⤊"
                            : 
                                "⤋"
                            }
                        </span>
                    :
                        null
                    }
                </div>
                    <AnimatePresence>
                        {showInfo ? 
                            
                                <motion.div className='episode-info'
                                    key={ props.episode.id }
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }} 
                                    exit={{ height: 0, opacity: 0 }}
                                    
                                >
                                    <p className='tick'>╔</p>
                                    <i dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(props.episode.summary)}}></i>
                                    <p className='tick'>╝</p>
                                </motion.div>
                            
                        :
                            null
                        }
                    </AnimatePresence>
            </div>
            : null}
        </motion.article>
    )
}

export default Episode;