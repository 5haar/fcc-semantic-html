import { Link } from "react-router-dom";

export default function Contact() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Contact</h2>
        <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      </main>
    );
  }