import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <span>
        <a
          href="https://github.com/mstfsgdc/redux-toolkit-todo"
          target="_blank"
          rel="noreferrer"
        >
          To-Do List
        </a>{" "}
        -{" "}
        <a href="https://www.mstfsgdc.com/" target="_blank" rel="noreferrer">
          mstfsgdc
        </a>{" "}
        - Copyright&copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
