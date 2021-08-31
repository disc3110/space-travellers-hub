import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const myState = useSelector((state) => state.missions);
  const myMissions = myState.filter((mission) => mission.member === true);

  const MissionDisplay = () => (
    <tbody>
      {myMissions.map((mission) => (
        <tr key={mission.mission_id}>
          <th>🌎 &nbsp;{mission.mission_name}</th>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
        <h1>My Missions</h1>
      <table className="table table-hover border border-solid">
        <MissionDisplay />
      </table>
    </div>
  );
};

export default ProfileMissions;
