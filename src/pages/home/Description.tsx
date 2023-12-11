import "../../styles/Description.css";

interface Description {
  description: string;
}

function Description() {
  const DescriptionList: Description[] = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum.",
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
