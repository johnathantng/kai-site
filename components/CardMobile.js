function CardMobile(props) {
	const { thumb, desc } = props;
	return (
		<div className="card-mobile-container">
			<img src={thumb} alt={desc} />
		</div>
	);
};

export default CardMobile;