// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import heroImg from '@/public/heroImg.png';
import banana from '@/public/design/banana.svg';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.left}>
					<h1
						className={`${styles.title} ${design.h1Text}`}
						data-shadowtext="cross the amuzoon jungle!"
					>
						cross the amuzoon jungle!
					</h1>
					<Typography className={styles.desc}>
						It&apos;s like swinging through Amazon&apos;s warehouse,
						dodging price fluctuations and wild market monkeys!
					</Typography>
					<div className={styles.buttons}>
						<Button
							href="https://google.com"
							className={styles.btn}
						>
							<Typography
								className={design.buttonText}
								data-shadowtext="Explore"
							>
								Explore
							</Typography>
						</Button>
					</div>
					<div className={styles.leftBanana}>
						<Image
							src={banana}
							alt=""
							quality={99}
							priority={true}
							className="image"
							onLoad={() => {
								props.setLoading(false);
							}}
						/>
					</div>
				</div>
				<div className={styles.right}>
					<Image
						src={heroImg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
					<div className={styles.rightBanana}>
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
			<div className={styles.heroBg}>
				<div className={styles.heroBgInside}></div>
			</div>
		</div>
	);
}
