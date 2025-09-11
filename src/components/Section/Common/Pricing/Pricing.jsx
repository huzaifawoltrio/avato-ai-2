"use client";

import Link from "next/link";
import { useState } from "react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const priceToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Choose the plan that powers your AI growth</h2>
        </div>

        {/* Toggle */}
        <div className="pricing-btn">
          <div className="toggle-btn">
            <label>Monthly </label>
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              onClick={priceToggle}
            />
            <label> Annually</label>
          </div>
        </div>

        {/* Pricing Grid */}
        <div
          className="row zubuz-pricing-four-column justify-content-center"
          id="table-price-value"
          data-pricing-dynamic
        >
          {/* Starter Plan */}
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Starter</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div className="zubuz-price dynamic-value">
                  {isMonthly ? 0 : 0}
                </div>
                <p>/{isMonthly ? "Monthly" : "Yearly"}</p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Test the waters with our free AI tools.</p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Access to core AI
                    features
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> 500 AI credits /
                    month
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Community support
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> 5 integrations
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Basic analytics
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="contact-us">
                Get Started Free
              </Link>
            </div>
          </div>

          {/* Growth Plan - Now Highlighted */}
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap active">
              <div className="zubuz-pricing-header">
                <h5>Growth</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div className="zubuz-price dynamic-value">
                  {isMonthly ? 29 : 29}
                </div>
                <p>/{isMonthly ? "Monthly" : "Yearly"}</p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Perfect for startups scaling with AI automation.</p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Everything in
                    Starter
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> 10K AI credits /
                    month
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Email + chat
                    support
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Unlimited projects
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> 15 integrations
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn active" href="contact-us">
                Start Growth
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="col-xl-3 col-md-6">
            <div className="zubuz-pricing-wrap">
              <div className="zubuz-pricing-header">
                <h5>Pro</h5>
              </div>
              <div className="zubuz-pricing-price">
                <h2>$</h2>
                <div className="zubuz-price dynamic-value">
                  {isMonthly ? 59 : 59}
                </div>
                <p>/{isMonthly ? "Monthly" : "Yearly"}</p>
              </div>
              <div className="zubuz-pricing-description">
                <p>Advanced AI power for fast-growing teams.</p>
              </div>
              <div className="zubuz-pricing-body">
                <ul>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Everything in
                    Growth
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> 50K AI credits /
                    month
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Priority support
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> Custom dashboards
                  </li>
                  <li>
                    <img src="/images/v3/check.png" alt="" /> 30 integrations
                  </li>
                </ul>
              </div>
              <Link className="zubuz-pricing-btn" href="contact-us">
                Go Pro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
