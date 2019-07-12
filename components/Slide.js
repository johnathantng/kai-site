function Slide(props) {
	const { pres } = props;
	return (
		<div className="slide-container">
			<img className="presentation-image" src={pres} />
		</div>
	);
}

export default Slide;