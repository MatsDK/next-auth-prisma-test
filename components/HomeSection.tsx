import React, { useState } from 'react'
import { ChevronRightIcon } from "@heroicons/react/outline"
import { Title } from '../components/Title'

interface HomeSectionProps {

}

export const HomeSection: React.FC<HomeSectionProps> = ({ }) => {
	return (
		<div className="h-[900px] flex flex-col items-center relative ">
			<Title />
			<Background />
			<div className="h-[800px] absolute w-full">
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-dark via-[#18181800] to-primary-dark"></div>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-dark via-[#00000000] to-primary-dark "></div>
			</div>
			<div className="flex items-center justify-center pt-10 gap-10 z-10">
				<button className="px-5 border border-accent-1 rounded py-2 text-[16px] font-semibold text-text-light-1 hover:border-accent-3 transition duration-300 flex items-center">
					Get Started
					<ChevronRightIcon className="ml-0.5 text-accent-1" width={20} height={20} />
				</button>
				<button className="text-text-light-1 font-semibold text-[16px]">How it works</button>
			</div>
		</div>
	);
}

// import { motion as motion3d, MotionCanvas, LayoutCamera } from "framer-motion-3d"
import { motion } from 'framer-motion';

const Background = () => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<motion.div
			className="absolute inset-0 h-[800px] z-[0]"
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(true)}
		>
			<Scene isHovered={isHovered} />
		</motion.div >
	)
}

import { Canvas } from "@react-three/fiber"
import { motion as motion3d } from "framer-motion-3d"

const Scene = ({ isHovered }: { isHovered: boolean }) => {
	return (
		<Canvas
			resize={{ offsetSize: true }}
			dpr={[1, 2]}
			camera={{ position: [0, 0, 5.5], fov: 45, }}
		>
			<pointLight
				intensity={1000}
				position={[0, 0, 0]}
				color="#e27"
			/>
			<group dispose={null}>
				<motion3d.mesh
					rotation={[-Math.PI / 4, 0, 0]}
					position={[0, .4, 0]}
					scale={1}
					variants={{
						unliked: {
							x: [0, 0],
							y: [0, 0],
							scale: .9
						},
						liked: {
							x: 4,
							y: [0, -1.5, 2],
							scale: 0.9,
							transition: { duration: 0.5 }
						},
						hover: {
							rotateZ: 0,
							rotateY: 0.3,
							scale: 3,
							transition: {
								rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
							}
						}
					}}
				>
					<planeBufferGeometry attach="geometry" args={[20, 20, 40, 30]} />
					<meshPhongMaterial
						wireframe
						opacity={0.2}
						transparent
						// emissive="#e2a"
						emissive="#26e"
					// shininess="100"
					/>
				</motion3d.mesh>
			</group>
		</Canvas>
	)
}