///---------------Working Code------------------
import './globals.css';
import Header from '../components/Header';
import CustomCursor from '../common/CustomCursor'; // 👈 ADD THIS
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lexend',
	weight: ['100','200','300','400','500','600','700','800','900'],
});

export const metadata = {
	title: 'Manish Kamble - Software Developer',
	description: 'Portfolio of Manish Kamble - Software Developer specializing in modern web development with Next.js, React, and cutting-edge technologies.',
	keywords: ['Manish Kamble', 'Software Developer', 'Web Developer', 'Next.js', 'React', 'Portfolio'],
	authors: [{ name: 'Manish Kamble' }],
	icons: {
  		icon: '/favicon.ico',
			},
	openGraph: {
		title: 'Manish Kamble - Software Developer',
		description: 'Portfolio of Manish Kamble - Software Developer',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Manish Kamble - Software Developer',
		description: 'Portfolio of Manish Kamble - Software Developer',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={lexend.variable}>
			<head>
				<meta
					name="google-site-verification"
					content="StKnFVMdxYtC2pDJPSr7oQjfKmXrAl1UXRLLkokFj8o"
				/>
				<meta
					name="google-site-verification"
					content="P2_1zWxkE0R-QmgUGw4dGpmHqVlIO0X-SaoFDdH-ciM"
				/>
			</head>
			<body>
				<CustomCursor /> {/* 👈 Cursor added globally */}
				<Header />
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}