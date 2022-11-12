import { useState, useEffect } from 'react'
import Cat from './Cat'

const Catslist = () => {
	const apiKey =
		'live_7cyNUTid0Tu2ijf2Kt2JjD5anv0KgirgjdoJ60SUW1sPQBSMtOcDPByzCVMw0nTT'
	// const url = 'https://api.thecatapi.com/v1/images/0XYvRd7oD'

	const [cats, setCats] = useState([])

	useEffect(() => {
		const url2 = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`
		const options = {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		}
		;(async () => {
			const response = await fetch(url2, options)
			const body = await response.json()
			setCats(Object.values(body))
		})()
	}, [])

	// get cats
	// map through

	return (
		<main className="catslist">
			<ul>
				{cats.length > 0 &&
					cats.map((cat) => (
						<li key={cat.id}>
							<Cat cat={cat} />
						</li>
					))}
			</ul>
		</main>
	)
}

export default Catslist
