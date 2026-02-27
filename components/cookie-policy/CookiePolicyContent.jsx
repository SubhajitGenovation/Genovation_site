"use client";

export default function CookiePolicyContent() {
  return (
    <div className="legal-body">
      
      <h2 id="what">1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help the site 
        remember your preferences and understand how you interact with it. Some cookies are essential for 
        the website to function; others help us improve the experience.
      </p>

      <h2 id="types">2. Cookies We Use</h2>
      <p>
        We categorize our cookies into three types. We do not use advertising or tracking cookies of any kind.
      </p>

      <h2 id="essential">3. Essential Cookies</h2>
      <p>These are required for the website to function. They cannot be disabled.</p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gv_session</code></td>
            <td>Maintains your session state and authentication</td>
            <td>Session</td>
          </tr>
          <tr>
            <td><code>gv_csrf</code></td>
            <td>Prevents cross-site request forgery attacks</td>
            <td>Session</td>
          </tr>
          <tr>
            <td><code>gv_consent</code></td>
            <td>Stores your cookie consent preferences</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>

      <h2 id="analytics">4. Analytics Cookies</h2>
      <p>
        We use privacy-respecting analytics to understand how visitors use our website. We use a self-hosted 
        analytics platform that does not share data with any third party, does not use cross-site tracking, 
        and anonymizes IP addresses by default.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gv_analytics</code></td>
            <td>Anonymous page view and interaction tracking</td>
            <td>14 months</td>
          </tr>
          <tr>
            <td><code>gv_ref</code></td>
            <td>Remembers how you arrived at our site (referral source)</td>
            <td>30 days</td>
          </tr>
        </tbody>
      </table>
      <p>Analytics cookies are only set if you consent to them.</p>

      <h2 id="preferences">5. Preference Cookies</h2>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gv_theme</code></td>
            <td>Remembers your preferred color scheme (light/dark)</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td><code>gv_locale</code></td>
            <td>Stores your language and region preferences</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>
      <p>Preference cookies are only set if you consent to them.</p>

      <h2 id="no-use">6. What We Don&apos;t Use</h2>
      <div className="callout">
        <p>
          Genovation does <strong>not</strong> use: third-party advertising cookies, social media tracking pixels, 
          cross-site tracking, fingerprinting techniques, Google Analytics, Meta Pixel, or any other surveillance-based 
          analytics tool. Our analytics are self-hosted, privacy-first, and compliant with the GDPR, India&apos;s DPDP Act, 
          and other applicable data protection laws by design.
        </p>
      </div>

      <h2 id="control">7. Your Controls</h2>
      <p>You can manage your cookie preferences at any time:</p>
      <ul>
        <li>
          <strong>Consent banner:</strong> When you first visit our site, you can accept or reject non-essential cookies. 
          You can change your preference at any time by clicking &quot;Cookie Settings&quot; in the footer.
        </li>
        <li>
          <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies. Note that blocking 
          essential cookies may prevent the website from functioning correctly.
        </li>
        <li>
          <strong>Do Not Track:</strong> We honor the Do Not Track (DNT) browser signal. If your browser sends a DNT 
          header, we will not set analytics or preference cookies.
        </li>
      </ul>

      <h2 id="updates">8. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated 
        &quot;Last updated&quot; date.
      </p>

      <h2 id="contact">9. Contact</h2>
      <p>
        For questions about our cookie practices: <a href="mailto:privacy@genovation.ai">privacy@genovation.ai</a>
      </p>

    </div>
  );
}