const Cat = ({ cat }) => {
	console.log('FROM CAT:', cat)
	const { url, id, breeds } = cat
	const { name, description, wikipedia_url } = breeds[0]

	return (
		<div className="cat">
			<img src={url} alt={`${name} cat with id ${id}`} />
			<p>{description}</p>
			<a
				href={wikipedia_url}
				target="_blank"
				rel="noreferrer"
			>{`${name} cats on Wikipedia`}</a>
		</div>
	)
}

export default Cat
