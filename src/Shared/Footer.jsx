

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  <img className="w-[20%] md:w-[25%]" src="https://i.ibb.co/2KbSFkF/download-removebg-preview.png" alt="Website Logo" />
    <p>Blood Donation Ltd.<br/>Providing reliable tech since 2000</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Donation blood</a>
    <a className="link link-hover">Donation request</a>
    <a className="link link-hover">Health Check</a>

  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;