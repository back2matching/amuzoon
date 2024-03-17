// >> Modules
import styles from './apply.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import leftLeaves from '@/public/design/leftLeaves.png';
import rightLeaves from '@/public/design/rightLeaves.png';

// >> Script
export default function Apply(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<h1
					className={`${styles.title} ${design.h1Text}`}
					data-shadowtext="apply for amuzoon"
				>
					apply for amuzoon
				</h1>

				<div className={styles.buttons}>
					<Button href="https://google.com" className={styles.btn}>
						<Typography
							className={design.buttonText}
							data-shadowtext="apply on telegram"
						>
							apply on telegram
						</Typography>
					</Button>
					<Button href="https://google.com" className={styles.btn}>
						<Typography
							className={design.buttonText}
							data-shadowtext="apply on x"
						>
							apply on x
						</Typography>
					</Button>
				</div>
			</div>
			<div className={styles.leaves}>
				<div className={styles.leftLeaves}>
					<Image
						src={leftLeaves}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.rightLeaves}>
					<Image
						src={rightLeaves}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
			<div className={styles.bg}>
				<div className={styles.bgInside}></div>
			</div>
		</div>
	);
}
