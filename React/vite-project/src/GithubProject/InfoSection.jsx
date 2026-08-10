function InfoSection(props) {
  // Destructure the people array from props
  const { people } = props;

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Display the total number of users */}
      <b style={{ fontSize: "28px" }}>{people.length}</b>

      {/* Display the text next to the count */}
      <span
        style={{
          fontSize: "14px",
          marginLeft: "10px",
        }}
      >
        User results
      </span>
    </div>
  );
}

export default InfoSection;
