import "../../styles/Profile.css";
import { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import jussy from "../../assets/images/profile_pics/justin.jpeg";
import willy from "../../assets/images/profile_pics/william.jpeg";

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
      pfp: willy,
      name: "William Masoen",
      current_location: "Toronto, ON",
      nationality: "Indonesian",
      university: "Toronto Metropolitan University",
      expectedGrad: "Dec 2024",
      degree: "Computer Science Major with Co-Op Program",
      hobby:
        "Cars, Outdoor Activities, Technologies, Working out, Soccer, Movies, Legend of Zelda",
      linkedin: "https://www.linkedin.com/in/williamvm",
      email: "mailto:william_vm@icloud.com",
      skills:
        "React, Javascript, Python, Java, SQL, AWS Cloud Computing, Unit Testing and Debugging",
      summary:
        "An avid enthusiast of both cars and Legend of Zelda, I am also deeply passionate about contributing to the field of software engineering, driven by the eagerness to make a meaningful impact and bring about positive changes in the technological landscape.",
    },
  ];

  const updateIndex = (newIndex: number) => {
    setProfileInformation(newIndex);
  };

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setProfileInformation(-1);
      }
    });
  });

  return (
    <>
      <div className="profile-title" id="about-us">
        <h1>meet the developers.</h1>
      </div>
      <div className="profile-click-me">
        <h4>Click on a person to learn more</h4>
      </div>
      <div className="profile-container" ref={menuRef}>
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
                        <div className="profile-summary">
                          "{profile.summary}"
                        </div>

                        <ul className="profile-list">
                          <li>
                            <strong>Skills:</strong> {profile.skills}
                          </li>
                          <li>
                            <strong>Degree:</strong> {profile.degree}
                          </li>
                          <li>
                            <strong>University:</strong> {profile.university}
                          </li>
                          <li>
                            <strong>Expected Graduation:</strong>{" "}
                            {profile.expectedGrad}
                          </li>
                          <li>
                            <strong>Nationality:</strong> {profile.nationality}
                          </li>
                          <li>
                            <strong>Hobbies:</strong> {profile.hobby}
                          </li>
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
                            <a href={profile.email} className="email-url">
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
