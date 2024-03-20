const Heading = ({ content }) => {
  const { mainHeading, subHeading } = content;
  return (
    <div className="text-center py-md-4 py-1 mx-md-5 mx-2">
      <h2 className="py-4">{mainHeading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};
export default Heading;
