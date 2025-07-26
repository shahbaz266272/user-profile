import React from "react";
import styles from "./UserProfileCard.module.css";
import type { User } from "../../constants/types";

interface Props {
  user: User;
  isExpanded: boolean;
  onToggle: (id: number) => void;
}

const UserProfileCard: React.FC<Props> = ({ user, isExpanded, onToggle }) => {
  return (
    <div className={styles.card}>
      <img src={user.profilePic} alt={user.name} className={styles.avatar} />
      <h2>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.bio}>{user.bio}</p>

 
      <button
        onClick={() => onToggle(user.id)}
        className={styles.button}
      >
        Show More
      </button>
 
      {isExpanded && (
        <div className={styles.detailsOverlay}>
          <button
            onClick={() => onToggle(user.id)}
            className={styles.closeButton}
            aria-label="Close"
          >
            ×
          </button>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          {user.hobbies?.length && (
            <>
              <p><strong>Hobbies:</strong></p>
              
                {user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
              
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
