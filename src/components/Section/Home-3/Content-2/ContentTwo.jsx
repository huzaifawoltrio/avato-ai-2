const ContentSectionTwo = () => {
  return (
    <div className="section zubuz-section-padding2 dark-bg">
      <div className="container">
        <div className="row">
          {/* Right side image */}
          <div className="col-lg-5 order-lg-2">
            <div className="zubuz-v3-thumb2">
              <img src="/images/v3/thumb-v3-3.png" alt="" />
              <div className="zubuz-v3-card2">
                <img src="/images/v3/card-v3-5.png" alt="" />
              </div>
            </div>
          </div>

          {/* Left side content */}
          <div className="col-lg-7">
            <div className="zubuz-default-content m-right light">
              <h2>How our AI apps simplify your growth</h2>
              <div className="zubuz-extara-mt">
                {/* Step 1 */}
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-number">1</div>
                  <div className="zubuz-iconbox-data data-small light">
                    <span>Connect your business:</span>
                    <p>
                      Import your contacts, campaigns, and media into our
                      Mission Control Dashboard. Everything you need lives in
                      one place.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-number">2</div>
                  <div className="zubuz-iconbox-data data-small light">
                    <span>Automate with AI:</span>
                    <p>
                      Launch content, emails, texts, videos, and compliance
                      checks automatically — no manual heavy lifting required.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="zubuz-iconbox-wrap-left mw-100">
                  <div className="zubuz-iconbox-number">3</div>
                  <div className="zubuz-iconbox-data data-small light">
                    <span>Track & grow:</span>
                    <p>
                      Watch your analytics, reputation, and leads improve in
                      real-time with insights surfaced by AI-powered analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
