import { useAuth } from "../context/useAuth";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome, {user?.name} 👋</h1>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}