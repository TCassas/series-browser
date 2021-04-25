import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header>
            <motion.h1 drag>
                <span>TV Shows</span>
                <span>Movies</span>
                <span className='resaltar'>Search</span>
            </motion.h1>
        </header>
    )
}

export default Header;