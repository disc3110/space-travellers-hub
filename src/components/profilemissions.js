import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const myState = useSelector((state) => state.missions);
  const myMissions = myState.filter((mission) => mission.member === true);

  const MissionDisplay = () => (
    <tbody>
      {myMissions.map((mission) => (
        <tr key={mission.mission_id}>
          <th scope="row">{mission.mission_name}</th>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="p-5">
      <table className="table table-hover border border-solid">
        <thead>
          <tr>
            <th scope="col">My Mission</th>
          </tr>
        </thead>
        <MissionDisplay />
      </table>
    </div>
  );
};

export default ProfileMissions;
