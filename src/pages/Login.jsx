import { useAuth } from "../context/useAuth";

export default function Login() {
  const { login } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Caffeine Home ☕</h1>
      <p>Sign in to continue</p>

      <button onClick={() => login("google")} style={btnStyle}>
        Continue with Google
      </button>
      <br /><br />
      <button onClick={() => login("github")} style={btnStyle}>
        Continue with GitHub
      </button>
    </div>
  );
}

const btnStyle = {
  padding: "10px 24px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "6px",
  border: "1px solid #ccc",
};