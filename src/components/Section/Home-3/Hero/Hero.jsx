const HeroSection = () => {
  return (
    <div className="zubuz-hero-section">
      <div className="container">
        <div className="zubuz-hero-content center">
          <h1>
            Turning Businesses into{" "}
            <span className="text-gradient font-bold">AI-Powered Machines</span>
            <span className="zubuz-title-shape">
              <img src="/images/v3/shape-v3-01.png" alt="AI Shape" />
            </span>
          </h1>
          <p>
            All-in-one AI platform for small & medium businesses. Create
            content, launch campaigns, track analytics, and stay fully compliant
            — everything from one simple mission control dashboard.
          </p>
          <div className="zubuz-extara-mt">
            <div className="zubuz-subscribe-three">
              <form action="#">
                <input type="email" placeholder="Enter your email address" />
                <button
                  className="zubuz-default-btn zubuz-subscription-btn three"
                  id="zubuz-subscription-btn"
                  type="submit"
                >
                  <span>Start Free Trial</span>
                </button>
                <div className="zubuz-input-email">
                  <img src="/images/icon/email2.svg" alt="email icon" />
                </div>
              </form>
            </div>
            <div className="zubuz-icon-list">
              <ul>
                <li>
                  <img src="/images/v3/check.png" alt="check" /> No credit card
                  required
                </li>
                <li>
                  <img src="/images/v3/check.png" alt="check" /> 7-day free
                  trial
                </li>
                <li>
                  <img src="/images/v3/check.png" alt="check" /> Cancel anytime
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="zubuz-border-btoom">
          <div className="zubuz-hero-thumb3">
            <img src="/images/v3/thumb-v3-01.png" alt="dashboard preview" />
            <div className="zubuz-hero-thumb-card1">
              <img src="/images/v3/card-v3-1.png" alt="AI content card" />
            </div>
            <div className="zubuz-hero-thumb-card2">
              <img src="/images/v3/card-v3-2.png" alt="analytics card" />
            </div>
            <div className="zubuz-hero-thumb-card3">
              <img src="/images/v3/card-v3-3.png" alt="automation card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
