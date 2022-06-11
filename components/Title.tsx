import React from 'react'
import { motion } from "framer-motion"

interface TitleProps {
}

export const Title: React.FC<TitleProps> = ({ }) => {
	return (
		<div className="flex flex-col items-center pt-36 z-10">
			<motion.h1
				className="text-[70px] font-semibold text-text-light-1"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: .8 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				The Distributed
			</motion.h1>
			<motion.h1
				className="text-[70px] font-semibold text-text-light-1 flex mt-[-25px]"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: .8 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: .2 }}
			>
				<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-3 mr-3">Storage</h1>
				Solution
			</motion.h1>
			<h2 className="text-text-light-2 text-[18px] mt-4">The decentralized peer-to-peer storage network.</h2>
		</div>
	);
}