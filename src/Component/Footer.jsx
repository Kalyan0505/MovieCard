function Footer() {
  return (
    <div className="footerContainer">
      <div className="Footer_logo">
        <i
          style={{ color: "rgb(13,148,136)" }}
          className="fa-solid fa-warehouse"
        ></i>
        <h2 className="gColor">Logoipsum</h2>
      </div>
      <p className="halfPara">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>

      <ul className="footerUl">
        <li className="footerLi">About</li>
        <li className="footerLi">Careers</li>
        <li className="footerLi">History</li>
        <li className="footerLi">Services</li>
        <li className="footerLi">Projects</li>
        <li className="footerLi">Blog</li>
      </ul>

      <div className="footerIcon">
        <i className="ri-facebook-circle-fill"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-twitter-fill"></i>
        <i className="ri-github-fill"></i>
        <i className="ri-basketball-line"></i>
      </div>
    </div>
  );
}

export default Footer;
