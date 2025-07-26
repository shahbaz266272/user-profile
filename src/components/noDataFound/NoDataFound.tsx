 import React from "react";
import styles from "./NoDataFound.module.css";

const NoDataFound: React.FC = () => {
  return (
    <div className={styles.noDataContainer}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="No data"
        className={styles.image}
      />
      <h2>Oops!</h2>
      <p>No Data Found!</p>
    </div>
  );
};

export default NoDataFound;
