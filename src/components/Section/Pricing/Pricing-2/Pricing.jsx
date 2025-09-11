import Link from "next/link";

const PricingSectionTwo = () => {
  return (
    <>
      <div className="zubuz-divider"></div>

      <div className="section zubuz-section-padding3">
        <div className="container">
          <div className="zubuz-section-title zubuz-two-column-title">
            <div className="row">
              <div className="col-lg-7">
                <h2>Complete AI feature comparison</h2>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <p>
                  Compare all AvatoAI features across our plans. Choose the
                  perfect solution to accelerate your AI journey and unlock
                  unprecedented productivity gains for your team.
                </p>
              </div>
            </div>
          </div>

          <div className="zubuz-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Feature Name:</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI Credits per month</td>
                  <td>500 credits</td>
                  <td>10K credits</td>
                  <td>50K credits</td>
                </tr>
                <tr>
                  <td>Team members</td>
                  <td>1 user</td>
                  <td>Up to 5 users</td>
                  <td>Up to 20 users</td>
                </tr>
                <tr>
                  <td>Core AI features</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Advanced AI models</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/icon/minus.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Custom dashboards</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/icon/minus.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/icon/minus.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>API integrations</td>
                  <td>5 integrations</td>
                  <td>15 integrations</td>
                  <td>30 integrations</td>
                </tr>
                <tr>
                  <td>Priority support</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/icon/minus.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/v3/check.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Analytics & insights</td>
                  <td>Basic</td>
                  <td>Advanced</td>
                  <td>Enterprise-level</td>
                </tr>
                <tr>
                  <td>Project limits</td>
                  <td>3 projects</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link className="zubuz-default-btn" href="contact-us">
                      <span>Get Started Free</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="zubuz-default-btn" href="contact-us">
                      <span>Start Growth</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="zubuz-default-btn" href="contact-us">
                      <span>Go Pro</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSectionTwo;
