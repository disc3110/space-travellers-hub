import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rockets.entities);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === 'true');
  const renderReservedRockets = () => reservedRockets.map((rocket) => (
    <tr key={rocket.id}><td>{`🚀 ${rocket.name}`}</td></tr>
  ));
  return (
    <div>
      <h1>My Rockets</h1>
      <table className="table">
        <tbody>
          {renderReservedRockets()}
        </tbody>
      </table>
    </div>
  );
};

export default RocketProfile;
