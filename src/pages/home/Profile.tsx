import "../../styles/Profile.css";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import jussy from "../../assets/images/profile_pics/justin.jpeg";

// Profile image needs to be (width: 590px, height: 590px)
interface Profile {
  pfp: any;
  name: string;
  current_location: string;
  nationality: string;
  university: string;
  expectedGrad: string;
  degree: string;
  hobby: string;
  linkedin: string;
  email: string;
  skills: any;
  summary: string;
}

function Profile() {
  const [profileInformation, setProfileInformation] = useState(-1);
  const ProfileList: Profile[] = [
    {
      pfp: jussy,
      name: "Justin Alianto",
      current_location: "Toronto, ON",
      nationality: "Indonesian",
      university: "University of Toronto St George",
      expectedGrad: "May 2025",
      degree: "Computer Science Specialist + Statistics Minor + Co-Op",
      hobby: "Gymming, Food, Nature, Walking, Coffee, Football (Soccer...)",
      linkedin: "https://www.linkedin.com/in/justinalianto",
      email: "mailto:justinalianto@gmail.com",
      skills:
        "Python (scikit-learn, PySpark, pandas, numpy), Spark, SQL, Airflow, Hive, Power BI, Docker, Firebase Cloud, Java, React",
      summary:
        "I am a committed coffee-lover seeking to actively garner as much " +
        "data science and/or data engineering experience as I can in the pursuit " +
        "of leveraging my knowledge and skills to make meaningful data-driven contributions " +
        "to our community.",
    },
    {
      pfp: jussy,
      name: "William Masoen",
      current_location: "Toronto, ON",
      nationality: "Indonesian",
      university: "Toronto Metropolitan University",
      expectedGrad: "Dec 2024",
      degree: "Computer Science with Co-Op Program",
      hobby: "Zelda",
      linkedin: "https://",
      email: "mailto:williamvm@icloud.com",
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
        <h1>meet the developers.</h1>
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
                    <div id="profile-neutral"></div>
                  ) : (
                    <div className="profile-card">
                      <div className="profile-header">
                        <h1 className="profile-name">{profile.name}</h1>
                        <p className="profile-current-location">
                          {profile.current_location}
                        </p>
                      </div>
                      <div>
                        <ul className="profile-list">
                          <li>Nationality: {profile.nationality}</li>
                          <li>University: {profile.university}</li>
                          <li>Expected Graduation: {profile.expectedGrad}</li>
                          <li>Degree: {profile.degree}</li>
                          <li>Hobby: {profile.hobby}</li>
                          <li>Skills: {profile.skills}</li>
                          <li>Summary: {profile.summary}</li>
                        </ul>

                        <div className="profile-media">
                          <p className="profile-media-text">Reach me via:</p>
                          <div className="profile-media-logo-box">
                            <a
                              href={profile.linkedin}
                              className="linkedin-url"
                              target="_blank"
                            >
                              <FaLinkedin id="linkedin-logo" />
                            </a>
                            <a
                              href={profile.email}
                              className="email-url"
                              // target="_blank"
                            >
                              <GrMail id="email-logo" />
                            </a>
                          </div>
                        </div>
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
