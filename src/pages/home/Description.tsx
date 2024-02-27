import "../../styles/Description.css";
import Divider from "../../components/Divider.tsx";
import vision from "../../assets/images/description/vision.png";
import mission from "../../assets/images/description/mission.png";
import values from "../../assets/images/description/values.png";

interface Description {
  title: string;
  description: string;
  image: any;
}

function Description() {
  const DescriptionList: Description[] = [
    // {
    //   description:
    //     "This website serves to showcase our sprinkles of creativity and commitment to our career growth in the technology space. " +
    //     "Combining both of our skillsets, our collaboration aims to create as many meaningful and practical applications as we can to " +
    //     "(definitely) generate a boost of productivity and efficiency to our day-to-day errands and challenges. " +
    //     "We hope that you learn something about us from here and feel absolutely free to reach out to us for a chat about opportunities, " +
    //     "collaborations, or even coffee :)",
    // },

    {
      title: "vision.",
      description:
        "This website serves to showcase our sprinkles of creativity and commitment to our career growth in the technological space.",
      image: vision,
    },
    {
      title: "mission.",
      description:
        "Combining both of our skillsets, our collaboration aims to create as many meaningful and practical applications as we can to " +
        "(definitely) generate a boost of productivity and efficiency to our day-to-day errands and challenges. ",
      image: mission,
    },
    {
      title: "values.",
      description:
        "We hope that you learn something about us from here and feel absolutely free to reach out to us for a chat about opportunities, " +
        "collaborations, or even coffee :)",
      image: values,
    },
  ];

  return (
    <>
      <div>
        {DescriptionList.map((description, index) => {
          return (
            // <div className="home-description">{description.description}</div>
            <>
              {/* <div
                style={{
                  visibility: index === 0 ? "hidden" : "visible",
                }}
              >
                <Divider />
              </div> */}
              <div
                className="home-description-title"
                style={{
                  textAlign: index % 2 === 0 ? "left" : "right",
                }}
              >
                <h1>{description.title}</h1>
              </div>
              <div
                className="description-container"
                style={{
                  flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                }}
              >
                <div
                  className="home-description"
                  style={{ order: index % 2 === 0 ? 2 : 1 }}
                >
                  {description.description}
                </div>
                <div>
                  <img
                    src={description.image}
                    alt=""
                    className="description-image"
                    style={{ order: index % 2 === 0 ? 1 : 2 }}
                  />
                </div>
              </div>
              <Divider />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Description;
