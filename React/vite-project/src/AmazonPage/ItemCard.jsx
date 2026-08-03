function ItemCard() {
  const description =
    "A powerful, low-cost exercise that improves heart health, burns calories, and builds body coordination";

  const amount = "KES 2,000";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "2px solid rgba(0,0,0,0.2)",
        padding: "2px 4px 2px 4px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          width={"200px"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWBb8RKMiA4Ub9ovHzVEQt8D1cg1YChDCCOqN8vvnHQ&s=10"
          alt="Exercise"
        />
      </div>

      <div style={{ textAlign: "left", fontSize: "10px" }}>{description}</div>
      <div style={{ fontSize: "20px" }}>{amount}</div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            border: "2px solid rgba(0,0,0,0.1)",
            padding: "2px 4px",
            color: "white",
            backgroundColor: "orange",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
