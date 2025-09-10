/* eslint-disable react/no-unescaped-entities */
"use client";

import Accordion from "react-bootstrap/Accordion";

const FAQSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="zubuz-accordion-wrap zubuz-accordion-wrap2">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Q: What makes your AI platform different?
              </Accordion.Header>
              <Accordion.Body>
                Unlike traditional SaaS tools, our platform is built around{" "}
                <strong>AI automation and real-time insights</strong>. From
                campaign optimization to workflow automation, everything is
                designed to reduce manual work and help you scale smarter, not
                harder.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Q: How secure is my data?</Accordion.Header>
              <Accordion.Body>
                Security is our top priority. All data is{" "}
                <strong>end-to-end encrypted</strong> and stored on compliant
                cloud servers. We run regular audits, penetration tests, and
                follow
                <strong> GDPR / SOC 2 standards</strong> to ensure your
                information stays safe.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q: Can I connect it with tools we already use?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. We support{" "}
                <strong>50+ integrations out of the box</strong> (including
                Slack, Notion, Stripe, and HubSpot). If your team uses custom
                tools, our
                <strong> API and webhooks</strong> make it simple to connect
                everything.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Q: What kind of support do you provide?
              </Accordion.Header>
              <Accordion.Body>
                We offer <strong>24/7 support</strong> via email and chat for
                all paid plans. Pro and Enterprise customers also get{" "}
                <strong>dedicated onboarding specialists</strong> and an account
                manager to ensure smooth scaling.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Q: How does the pricing scale as my business grows?
              </Accordion.Header>
              <Accordion.Body>
                Our plans are <strong>usage-based</strong>. Start free, and as
                your AI needs expand (more credits, more integrations, or
                advanced features), you can easily upgrade. Discounts are
                available for <strong>annual billing and startups</strong>.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
