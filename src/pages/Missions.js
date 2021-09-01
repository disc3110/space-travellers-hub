import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { successMission, joinMission } from '../redux/missions/missions';

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

  const JoinMissionBtn = (e) => {
    dispatch(joinMission(e.target));
  };

  const MissionDisplay = () => (
    <tbody>
      {myMissions.map((mission) => (
        <tr key={mission.mission_id}>
          <th scope="row">{mission.mission_name}</th>
          <td>{mission.description}</td>
          <td className="text-center"><p className={(mission.member ? 'text-white bg-success mt-2' : 'text-white bg-secondary mt-2')}>{(mission.member ? 'Actve Member' : 'NOT A MEMBER')}</p></td>
          <td><button type="button" onClick={JoinMissionBtn} id={mission.mission_id} className={(mission.mission_button ? 'btn btn-outline-danger text-nowrap' : 'btn btn-outline-secondary text-nowrap')}>{(mission.mission_button ? 'Leave Mission' : 'Join Mission')}</button></td>
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
            <th scope="col" className="px-5">Status</th>
            <th scope="col" className="px-5"> </th>
          </tr>
        </thead>
        <MissionDisplay />
      </table>
    </div>
  );
};

export default Missions;
