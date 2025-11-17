import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1>
          <Link href={"/"}>Simple Memo</Link>
        </h1>
        <div className="login-btns">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
}
