/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Brain } from "lucide-react";

const FooterSectionThree = () => {
  return (
    <footer className="zubuz-footer-section dark-bg">
      <div className="container">
        {/* Top CTA */}
        <div className="zubuz-footer-extra-top">
          <div className="row">
            <div className="col-lg-7">
              <div className="zubuz-footer-extra-title">
                <h2>Take your startup to the next level</h2>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="zubuz-footer-btn">
                <Link className="zubuz-default-btn pill" href="contact-us">
                  <span>Get started now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main */}
        <div className="zubuz-footer-top">
          <div className="row">
            {/* Logo + Description + Socials */}
            <div className="col-xl-4 col-lg-12">
              <div className="zubuz-footer-textarea light">
                <Link
                  href="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Brain size={32} color="#FF6B35" />
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#ffffff",
                    }}
                  >
                    AvatoAi
                  </span>
                </Link>
                <p>
                  Empowering SMBs with AI-driven tools for growth, automation,
                  compliance, and smarter customer engagement.
                </p>
                <div className="zubuz-social-icon social-box social-box-white">
                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/" target="_blank">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/" target="_blank">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Tools (2 Columns) */}
            <div className="col-xl-5 col-md-6">
              <div className="zubuz-footer-menu light extar-margin">
                <div className="zubuz-footer-title light">
                  <p>AI Tools</p>
                </div>
                <div className="row">
                  {/* Column 1 */}
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link href="#">Smart Content Shield</Link>
                      </li>
                      <li>
                        <Link href="#">Branding Assistant</Link>
                      </li>
                      <li>
                        <Link href="#">AI Video & Avatar Studio</Link>
                      </li>
                      <li>
                        <Link href="#">Communication Automator</Link>
                      </li>
                    </ul>
                  </div>
                  {/* Column 2 */}
                  <div className="col-6">
                    <ul>
                      <li>
                        <Link href="#">Review & Reputation Genie</Link>
                      </li>
                      <li>
                        <Link href="#">Local Lead Radar</Link>
                      </li>
                      <li>
                        <Link href="#">UGC Rights Manager</Link>
                      </li>
                      <li>
                        <Link href="#">Compliance Copilot</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-xl-3 col-md-6">
              <div className="zubuz-footer-menu light info extar-margin">
                <div className="zubuz-footer-title light">
                  <p>Contact Us</p>
                </div>
                <ul>
                  <li>
                    <Link href="#">
                      <img src="/images/icon/call.svg" alt="call" />
                      +1 (800) 123–4567
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="/images/icon/email.svg" alt="email" />
                      hello@avatoai.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="/images/icon/map.svg" alt="map" />
                      San Francisco, CA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="zubuz-footer-bottom center light">
          <div className="zubuz-copywright light">
            <p> &copy; Copyright 2024, All Rights Reserved by AvatoAi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSectionThree;
