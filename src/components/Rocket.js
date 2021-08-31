import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    name, image, description,
  } = props;
  Rocket.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  return (
    <div className="d-flex my-2">
      <img src={image} alt={name} className="w-25" />
      <div className="w-75 p-2">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" className="btn btn-primary">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
