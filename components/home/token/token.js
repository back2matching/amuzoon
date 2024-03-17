// >> Modules
import styles from './token.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import coin1 from '@/public/design/coin1.svg';
import coin2 from '@/public/design/coin2.svg';
import coin3 from '@/public/design/coin3.svg';

// >> Script
export default function Token(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<h1
					className={`${styles.title} ${design.h1Text}`}
					data-shadowtext="amuzoon token was..."
				>
					amuzoon token was...
				</h1>
				<Typography className={styles.desc}>
					...created when Jeff Bezos accidentally whispered
					&apos;Alexa, make me a cryptocurrency,&apos; and Alexa took
					it way too seriously...
				</Typography>

				<div className={styles.coin1}>
					<Image
						src={coin1}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.coin2}>
					<Image
						src={coin2}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.coin3}>
					<Image
						src={coin3}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
			<div className={styles.tokenBg}>
				<div className={styles.tokenBgInside}></div>
			</div>
		</div>
	);
}
