import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Accounting Firm
      </h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}