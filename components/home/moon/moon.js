// >> Modules
import styles from './moon.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import roadmap from '@/public/roadmap.png';
import roadmapBg from '@/public/design/roadmapBg.svg';
import banana from '@/public/design/banana.svg';

// >> Script
export default function Moon(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.left}>
					<h1
						className={`${styles.title} ${design.h1Text}`}
						data-shadowtext="To the moon! literally..."
					>
						To the moon! literally...
					</h1>
					<div className={styles.leftBg}>
						<Image
							src={roadmapBg}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
				<div className={styles.right}>
					<Image
						src={roadmap}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>

					<div className={styles.topBanana}>
						<Image
							src={banana}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>

					<div className={styles.bottomBanana}>
						<Image
							src={banana}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
