import React from 'react'
import { motion } from 'framer-motion'

export default function Form(props) {
    return(
        <form onSubmit={props.submit}>
            <input 
                type='text' 
                name='search' 
                id='search' 
                placeholder='Matrix'
                onChange={props.change}
            ></input>
            <button type='button'
                
            ><motion.i whileHover={{transform: 'rotate(-90deg)'}} class="fas fa-search"></motion.i></button>
        </form>
    )
}