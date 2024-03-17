// >> Modules
import styles from './nav.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

import logo from '@/public/logo.svg';

// >> Script
export default function Nav(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Link to="Home" className={styles.logo}>
					<Image
						src={logo}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</Link>
				<div className={styles.center}>
					<Link to="Home" className={styles.oneCenter} data-value="1">
						<Typography
							className={design.buttonText}
							data-shadowtext="Home"
						>
							Home
						</Typography>
					</Link>
					<Link
						to="About"
						className={styles.oneCenter}
						data-value="2"
					>
						<Typography
							className={design.buttonText}
							data-shadowtext="About"
						>
							About
						</Typography>
					</Link>
					<a
						to="FAQ"
						className={styles.oneCenter}
						data-value="1"
						href="https://t.me/AmuzoonCoin"
						target="_blank"
					>
						<Typography
							className={design.buttonText}
							data-shadowtext="FAQ"
						>
							FAQ
						</Typography>
					</a>
				</div>
			</div>
		</div>
	);
}
