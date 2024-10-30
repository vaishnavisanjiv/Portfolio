import "./Style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact-info">
        <p className="footer-heading">Contact Me</p>
        <a href="mailto:vaishnavisanjiv2312@gmail.com" className="footer-link">
          Email
        </a>
        <br />
        <a
          href="https://linkedin.com/in/vaishnavisanjiv"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/vaishnavisanjiv"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="shortcuts">
        <p className="footer-heading">Visit</p>
        <a href="#home" className="footer-link">
          Home
        </a>
        <br />
        <a href="#skills" className="footer-link">
          Skills
        </a>
        <br />
        <a href="#projects" className="footer-link">
          Projects
        </a>
        <br />
        <a href="#about" className="footer-link">
          About
        </a>
      </div>

      <div className="footer-bottom">&copy; 2024 | Vaishnavi Patil</div>
    </div>
  );
}

export default Footer;
