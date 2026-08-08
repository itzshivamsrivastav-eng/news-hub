function Contact() {
  return (
    <div
      className="contact-page"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/searchBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Contact Us</h1>

      <p>
        If you have any questions, suggestions, or feedback,
        feel free to reach out to us!
      </p>

      <img
        src="/cntact.png"
        alt="Contact Card"
        className="contact-image"
      />
    </div>
  );
}

export default Contact;