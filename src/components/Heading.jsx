const Heading = ({ content }) => {
  const { mainHeading, subHeading } = content;
  return (
    <div className="text-center py-4 mx-5">
      <h2 className="py-4">{mainHeading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};
export default Heading;
