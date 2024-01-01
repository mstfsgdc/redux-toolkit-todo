import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <span>
        To-Do List -{" "}
        <a href="https://github.com/mstfsgdc" target="_blank" rel="noreferrer">
          mstfsgdc
        </a>{" "}
        - Copyright&copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
