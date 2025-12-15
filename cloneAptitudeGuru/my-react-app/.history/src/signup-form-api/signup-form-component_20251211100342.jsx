import React, { useEffect, useState } from "react";

const SignupFormComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users (GET)
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:21000/api/v1/User/getUsers");
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error("Fetch users error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Signup (POST) — uses native fetch and refreshes the list on success
  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: e.target.firstname.value,
      email: e.target.email.value,
    };

    try {
      console.log("CHECK ENTRY 2381");
      const res = await fetch(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errBody = await res.text();
        throw new Error(`HTTP ${res.status}: ${errBody}`);
      }

      const json = await res.json();
      console.log("The process is successful", json);

      // clear form inputs
      e.target.firstname.value = "";
      e.target.email.value = "";

      // refresh user list
      fetchUsers();
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" required />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <div>
        <h3>Users</h3>
        {loading && <div>Loading users...</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        {!loading && !error && users.length === 0 && <div>No users found.</div>}
        {!loading && !error && users.length > 0 && (
          <ul>
            {users.map((u, idx) => (
              <li key={u.id ?? idx}>
                {u.firstName ?? u.first_name ?? "(no name)"} — {u.email ?? "(no email)"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SignupFormComponent;