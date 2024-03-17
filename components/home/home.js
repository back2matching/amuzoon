// >> Modules
import styles from './home.module.scss';

import Nav from './nav/nav';
import Hero from './hero/hero';
import Token from './token/token';
import Moon from './moon/moon';
import Apply from './apply/apply';

// >> Script
export default function Home(props) {
	return (
		<div className={styles.page}>
			<Nav />
			<Hero setLoading={props.setLoading} />
			<Token />
			<Moon />
			<Apply />
		</div>
	);
}
