function CardDesktop(props) {
	const { thumb, desc } = props;
	
	return (
		<div className="card-desktop-container">
			<img src={thumb} alt={desc} />
		</div>
	);
};

export default CardDesktop;