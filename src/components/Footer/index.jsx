import React, { useState } from "react";
import "./footer.css";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineArrowForward } from "react-icons/md";
import FooterLogo from "../../assets/svgs/footer-logo.svg";
import { useLenis } from "@studio-freight/react-lenis";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
const Footer = () => {
  const secretKey = "a0d59f43aeaaeac6e7683403a9955183";
  const publicKey = "6d90c12c6b1775632442321fc5e29029";
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState("");
  const lenis = useLenis(({ scroll }) => {});
  const footerLink = [
    { href: "#", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "https://eonfund.medium.com", label: "Blog" },
  ];
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    const data = {
      Messages: [
        {
          From: {
            Email: email,
            // Name: "Dozie",
          },
          To: [
            {
              Email: "eonbrands1@gmail.com",
            },
          ],
          Subject: `${email} subscribed to Eonfund`,
          TextPart: `${email} joined Eonfund fans`,
        },
      ],
    };
    axios
      .post(
        "https://api.mailjet.com/v3//REST/contactslist/331297/managemanycontacts",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${publicKey}:${secretKey}`,
          },
        }
      )
      .then((response) => {
        console.log("Email sent:", response.data);
        setSending(false);
        alert("Email sent");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSending(false);
        alert("Email not sent");
      });
  };
  return (
    <section className="app-footer">
      <div className="container">
        <div className="flex top">
          <div className="footer-infos">
            <h2 className="footer-title">
              <span>Stay updated</span>
            </h2>
            <p className="footer-desc">
              Join over 100 other Eonfund fans curious about tech happenings in
              Africa.
            </p>

            <div className="flex form-wrap">
              <form onSubmit={handleSubmit} className="input-wrap">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  disabled={sending}
                />
                <button type="submit" disabled={sending} className="flex">
                  <BsArrowRight />
                </button>
              </form>
              <div className="vertical" />
              <a
                href="https://twitter.com/eonfund"
                target="_blank"
                className="join-discord flex"
              >
                <FaXTwitter />
                <p className="discord-text">
                  <span>Follow us on X</span>
                </p>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-wrap">
              {footerLink.map((footerLink, index) => (
                <a
                  href={footerLink.href}
                  onClick={() =>
                    footerLink.label !== "Blog" &&
                    lenis.scrollTo(
                      footerLink.href === "#" ? "unknown" : footerLink.href
                    )
                  }
                  key={index}
                  className="footer-link"
                  target={footerLink.label === "Blog" && "_blank"}
                >
                  {footerLink.label}
                  <MdOutlineArrowForward />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="footer-logo">
            <img src={FooterLogo} alt="eon-logo" />
          </div>
        </div>
        <div className="footer-divider" />
        <div className="bottom flex">
          <p className="copyright">©2024 Eonfund. All Right Reserved </p>
          <div className="flex regulation">
            <a
              href="https://docs.eonfund.vc/privacy-policy"
              target="_blank"
              className="policy"
            >
              Privacy policy
            </a>
            <a
              href="https://docs.eonfund.vc/terms-and-conditions"
              target="_blank"
              className="terms"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
