// >> Styles
import Head from 'next/head';

// >> Components
import Home from '@/components/home/home';

// >> Script
export default function Page(props) {
	// >> Render
	return (
		<>
			<Head>
				<title>Amuzoon</title>
			</Head>

			<div className="base">
				<Home setLoading={props.setLoading} />
			</div>
		</>
	);
}
