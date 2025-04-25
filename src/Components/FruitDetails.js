import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { addItem } from "./CartSlice";
import { useDispatch } from "react-redux";

function FruitDetails() {
  const { id } = useParams();
  const location = useLocation();
  const fruit = location.state;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(fruit));
  };

  if (!fruit) {
    return <h1>No fruit details available.</h1>;
  }

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: "600px",
        margin: "30px auto",
        backgroundColor: "#f8f9fa",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      key={id}
    >
      <motion.h1
        variants={textVariants}
        style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}
      >
        Fruit Details
      </motion.h1>

      <motion.img
        src={fruit.img}
        alt={fruit.name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "20px",
          border: "2px solid rgb(48, 89, 9)",
        }}
        variants={imageVariants}
        whileHover="hover"
      />

      <motion.div
        variants={textVariants}
        style={{
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h2 style={{ fontSize: "24px", color: "#555", marginBottom: "10px" }}>
          {fruit.name}
        </h2>
        <h4 style={{ fontSize: "20px", color: "#888", marginBottom: "15px" }}>
          Price: ${fruit.price}
        </h4>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          {fruit.description}
        </p>
      </motion.div>

      <motion.button
        variants={textVariants}
        onClick={handleAddToCart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add To Cart
      </motion.button>
    </motion.div>
  );
}

export default FruitDetails;
