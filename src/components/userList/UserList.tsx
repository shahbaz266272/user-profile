import React, { useState, useEffect } from "react";
import styles from "./UserList.module.css";
import type { User } from "../../constants/types";
import UserProfileCard from "../userProfileCard/UserProfileCard";
import NoDataFound from "../noDataFound/NoDataFound";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedUserId((prev) => (prev === id ? null : id));
  };

   useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(debouncedQuery.toLowerCase())
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
        {filtered.length === 0 ? (
          <NoDataFound />
        ) : (
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
        )}
      </div>
    </>
  );
};

export default UserList;
