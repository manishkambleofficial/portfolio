import styles from './styles.module.scss';
import { useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { slideUp, opacity } from './animation';
import Magnetic from '../../common/Magnetic';
import Circuit from '../Circuit/Circuit';
import toast from 'react-hot-toast';

export default function Description() {
	const phrase = `Actively seeking remote or hybrid software development opportunities to contribute, build impactful solutions, and continue growing.`;
	const description = useRef(null);
	const isInView = useInView(description);
	const handleDownload = () => {
		window.open('/Manish_resume.pdf', '_blank');
	};
	const hasPlayed = useRef(false);
	useEffect(() => {
		if (isInView && !hasPlayed.current) {
			hasPlayed.current = true;
			const timers = [];
			timers.push(
				setTimeout(() => toast.success(`Lights out and away we go — always ready to build, learn, and move forward.`), 500)
			);
			timers.push(
				setTimeout(() => toast.success('Hover over milestones to view their positions.', {duration: 6000}), 3200)
			);
			return () => timers.forEach(clearTimeout);
		}
	}, [isInView]);

	return (
		<div>
			<div ref={description} className={styles.description}>
				<div className={styles.body}>
					<p>
						{phrase.split(' ').map((word, index) => (
							<span key={index} className={styles.mask}>
								<motion.span
									variants={slideUp}
									custom={index}
									animate={isInView ? 'open' : 'closed'}
								>
									{word}
								</motion.span>
							</span>
						))}
					</p>
					<motion.p
						variants={opacity}
						animate={isInView ? 'open' : 'closed'}
					>
						Beyond Computers, I enjoy anime, Video Game, Cars and Bikes, Sleeping, and Movies that offer valuable life lessons.
					</motion.p>
					<div id="about">
						<Magnetic>
							<div
								className={styles.button}
								onClick={handleDownload}
							>
								Download Resume
							</div>
						</Magnetic>
					</div>
				</div>
			</div>
			<div>
				<Circuit />
			</div>
		</div>
	);
}
