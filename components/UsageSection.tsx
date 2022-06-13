import { motion } from 'framer-motion'
import React from 'react'
import { ChevronRightIcon } from "@heroicons/react/outline"

interface UsageSectionProps {
}

export const UsageSection: React.FC<UsageSectionProps> = ({ }) => {
	return (
		<section className="h-[700px] bg-primary-light relative ">
			<div className="absolute w-full h-24 bg-primary-dark"></div>
			<div className="max-w-[1250px] h-full mx-auto flex justify-center">
				<div
					className="w-1/2 flex relative"
				>
					<motion.div
						viewport={{ once: true }}
						whileInView={{ opacity: 1, right: 0 }}
						initial={{ opacity: 0, right: 10 }}
						transition={{ ease: "easeOut", duration: 0.6 }}
						className="absolute"
					>
						<div className="py-40 flex flex-col">
							<h1 className="text-[50px] font-semibold flex">
								<h1 className="mr-3">The</h1>
								<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-3 mr-3">Future</h1>
								<h1>of Data Storage</h1>
							</h1>
							<span className="text-text-dark-2 text-[16px] mt-3">Upload your data with one click, to a secure distributed network.</span>
							<button className="py-5 text-[16px] font-semibold text-text-dark-1 w-fit hover:text-accent-1 transition flex items-center">
								Try it out
								<ChevronRightIcon className="ml-0.5 text-accent-1" width={20} height={20} />
							</button>
						</div>
					</motion.div>
				</div>
				<div
					className="w-1/2 relative"
				>
					<motion.div
						whileInView={{ opacity: 1, left: 20 }}
						viewport={{ once: true }}
						initial={{ opacity: 0, left: 100 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="bg-primary-light rounded-md mt-10 h-1/2 absolute w-full mx-20 border-secondary-light border px-12 pt-10 shadow-2xl"
					>
						test
					</motion.div>
				</div>
			</div>
		</section>
	);
}