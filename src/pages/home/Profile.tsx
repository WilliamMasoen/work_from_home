import "../../styles/Profile.css";
import { useState } from "react";
import pfp1 from "../../assets/images/profile/profile.png";

interface Profile {
  pfp: any;
  name: string;
  nationality: string;
  university: string;
  expectedGrad: number;
  degree: string;
  hobby: string;
  linkedin: string;
  skills: any;
  summary: string;
}

function Profile() {
  const [profileInformation, setProfileInformation] = useState(-1);
  const ProfileList: Profile[] = [
    {
      pfp: pfp1,
      name: "Justin Alianto",
      nationality: "Indonesian",
      university: "University of Toronto",
      expectedGrad: 2025,
      degree: "Computer Science with PEY Program",
      hobby: "Soccer",
      linkedin: "https:...",
      skills: "None",
      summary: "Hello my name is jussy",
    },
    {
      pfp: pfp1,
      name: "William Masoen",
      nationality: "Indonesian",
      university: "Toronto Metropolitan University",
      expectedGrad: 2024,
      degree: "Computer Science with Co-op Program",
      hobby: "Zelda",
      linkedin: "https:...",
      skills: "Everything",
      summary: "Hello my name is willy",
    },
  ];

  const updateIndex = (newIndex: number) => {
    setProfileInformation(newIndex);
  };

  return (
    <>
      <div className="profile-title" id="about-us">
        <h1>Meet the Developers</h1>
      </div>
      <div className="profile-container">
        <div className="profile-picture">
          {ProfileList.map((profile, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <div
                  className={
                    index === profileInformation ? "profile-active" : "profile"
                  }
                >
                  <img src={profile.pfp} alt="" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="profile-information-container">
          <div
            className="profile-information-item"
            style={{ transform: `translate(-${profileInformation * 100}%)` }}
          >
            {ProfileList.map((profile) => {
              return (
                <div className="profile-information">
                  {profileInformation === -1 ? (
                    <div></div>
                  ) : (
                    <div className="profile-card">
                      <h1 className="profile-name">{profile.name}</h1>
                      <div>
                        <ul className="profile-list">
                          <li>Nationality: {profile.nationality}</li>
                          <li>University: {profile.university}</li>
                          <li>Expected Graduation: {profile.expectedGrad}</li>
                          <li>Degree: {profile.degree}</li>
                          <li>Hobby: {profile.hobby}</li>
                          <li>LinkedIn: {profile.linkedin}</li>
                          <li>Skills: {profile.skills}</li>
                          <li>Summary: {profile.summary}</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
