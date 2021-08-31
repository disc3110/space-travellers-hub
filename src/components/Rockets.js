import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockesSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.entities);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const renderRockets = (rocketCollection) => rocketCollection.map((rocketInfo) => (
    <Rocket
      key={rocketInfo.id}
      name={rocketInfo.name}
      image={rocketInfo.images[0]}
      description={rocketInfo.description}
    />
  ));

  return (
    <div>
      {renderRockets(rockets)}
    </div>
  );
};

export default Rockets;
