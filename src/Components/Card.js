import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ fruits }) {
  const navigate = useNavigate();

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {fruits.map((item) => (
        <motion.div
          key={item.id}
          className="card"
          style={{
            width: "18rem",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            cursor: "pointer",
            padding: "10px",
            transition: "transform 0.2s ease-in-out",
          }}
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
            {item.id}
          </h2>
          <motion.img
            src={item.img}
            alt={item.name}
            style={{
              height: "110px",
              width: "80%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            whileHover={{ scale: 1.05 }}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#333",
                margin: "15px 0",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              {item.name}
            </h5>
            <h2
              style={{
                fontSize: "18px",
                color: "#555",
                marginBottom: "15px",
              }}
            >
              Price: ${item.price}
            </h2>
            <p
              className="card-text"
              style={{
                fontSize: "14px",
                color: "#777",
                lineHeight: "1.5",
                marginBottom: "20px",
              }}
            >
              {item.description}
            </p>
            <motion.button
              className="btn btn-primary"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/fruits/${item.id}`, { state: item })}
              variants={buttonVariants}
              whileHover="hover"
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Card;
