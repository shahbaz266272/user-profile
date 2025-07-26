import React, { useState } from "react";
import styles from "./UserList.module.css";
import type { User } from "../../constants/types";
import UserProfileCard from "../userProfileCard/UserProfileCard";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  const [query, setQuery] = useState("");
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedUserId((prev) => (prev === id ? null : id));
  };
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className={styles.search}
        placeholder="Search by name or email..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.grid}>
        {filtered.map((user) => (
          <UserProfileCard
            key={user.id}
            user={user}
            isExpanded={user.id === expandedUserId}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </>
  );
};

export default UserList;
