import "../../styles/Description.css";

interface Description {
  description: string;
}

function Description() {
  const DescriptionList: Description[] = [
    {
      description:
        "This website serves to showcase our sprinkles of creativity and commitment to our career growth in the technology space. " +
        "Combining both of our skillsets, our collaboration aims to create as many meaningful and practical applications as we can to " +
        "(definitely) generate a boost of productivity and efficiency to our day-to-day errands and challenges. " +
        "We hope that you learn something about us from here and feel absolutely free to reach out to us for a chat about opportunities, " +
        "collaborations, or even coffee :)",
    },
  ];

  return (
    <>
      <div>
        {DescriptionList.map((description) => {
          return (
            <div className="home-description">{description.description}</div>
          );
        })}
      </div>
    </>
  );
}

export default Description;
