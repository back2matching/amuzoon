// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect, useState } from 'react';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/fonts.css';
import '@/styles/globals.scss';

// >> Script
function MyApp({ Component, pageProps }) {
	// >> Variables
	const [loading, setLoading] = useState(true);
	const [loaded, setLoaded] = useState(true);

	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);

	useEffect(() => {
		setLoaded(loading);
	}, [loading]);

	// >> Render
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />

			<Component {...pageProps} setLoading={setLoading} />

			<div className="pageLoader" data-visible={loaded}>
				<div className="grass1" data-visible={loaded}></div>
				<div className="grass1_1" data-visible={loaded}></div>
				<div className="grass2" data-visible={loaded}></div>
				<div className="grass2_1" data-visible={loaded}></div>
			</div>
		</StyledEngineProvider>
	);
}

export default MyApp;
