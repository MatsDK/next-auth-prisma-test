import React from 'react'
import Head from "next/head"
import { Header } from "./Header"

interface LayoutProps {
	children: any
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="w-full h-full bg-primary-dark overflow-y-scroll scroll-smooth">
			<Head>
				<title>Next auth App</title>
				<link rel="icon" href="/logo.svg" />
			</Head>
			<div className="">
				<Header />
				{children}
			</div>
		</div>
	);
}