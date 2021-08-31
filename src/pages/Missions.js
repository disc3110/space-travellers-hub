import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { successMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMissions = async () => {
      const url = 'https://api.spacexdata.com/v3/missions';
      const missionsFecth = await fetch(url);
      const missionsData = await missionsFecth.json();
      return dispatch(successMission(missionsData));
    };
    fetchMissions();
  }, []);

  const myMissions = useSelector((state) => state.missions);

  const MissionDisplay = () => (
    <tbody>
      {myMissions.map((mission) => (
        <tr key={mission.mission_id}>
          <th scope="row">{mission.mission_name}</th>
          <td>{mission.description}</td>
          <td>Member</td>
          <td><button type="button" className="btn btn-light">Join</button></td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="p-5">
      <table className="table table-striped table-hover border border-solid">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <MissionDisplay />
      </table>
    </div>
  );
};

export default Missions;
