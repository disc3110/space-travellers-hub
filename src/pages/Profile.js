import React from 'react';
import ProfileMissions from '../components/profilemissions';
import RocketProfile from '../components/RocketsProfile';

const Profile = () => (
  <div>
    <div className="row align-items-center">
      <div className="col">
        <ProfileMissions />
      </div>
      <div className="col">
        <RocketProfile />
      </div>
    </div>
  </div>
);

export default Profile;
