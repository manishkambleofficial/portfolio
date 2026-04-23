import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { usePathname } from 'next/navigation';

export default function index() {
	return (
		<>
			<div className={styles.footer}>
				<Magnetic>
					<div className={styles.el}>
						<a
							href="https://www.linkedin.com/in/manishkambleofficial/"
							target="_blank"
						>
							LinkedIn
						</a>
						<div className={styles.indicator}></div>
					</div>
				</Magnetic>
				<Magnetic>
					<div className={styles.el}>
						<a
							href="https://github.com/manishkambleofficial"
							target="_blank"
						>
							GitHub
						</a>
						<div className={styles.indicator}></div>
					</div>
				</Magnetic>
				<Magnetic>
					<div className={styles.el}>
						<a
							href="https://instagram.com/manishkambleofficial"
							target="_blank"
						>
							Instagram
						</a>
						<div className={styles.indicator}></div>
					</div>
				</Magnetic>
				<Magnetic>
					<div className={styles.el}>
						<a
							href="/Manish_resume.pdf"
							target="_blank"
						>
							Resume
						</a>
						<div className={styles.indicator}></div>
					</div>
				</Magnetic>
			</div>
		</>
	);
}
