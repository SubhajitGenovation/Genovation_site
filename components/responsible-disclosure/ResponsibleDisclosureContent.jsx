"use client";

export default function ResponsibleDisclosureContent() {
  return (
    <div className="legal-body">
      
      <h2 id="scope">1. Scope</h2>
      <p>
        This Responsible Disclosure Policy covers all Genovation-owned systems, including our website (genovation.ai), 
        APIs, documentation sites, and the Genovation platform software itself. We invite security researchers, customers, 
        and members of the public to report vulnerabilities responsibly.
      </p>

      <h2 id="reporting">2. How to Report</h2>
      <p>Send your report to:</p>
      <div className="callout">
        <p>
          <strong>Email:</strong> <a href="mailto:security@genovation.ai">security@genovation.ai</a><br />
          <strong>PGP key:</strong> Available at <a href="#">genovation.ai/.well-known/security.txt</a><br />
          <strong>Encryption:</strong> We strongly encourage encrypting your report using our PGP key.
        </p>
      </div>
      <p>Your report should include:</p>
      <ul>
        <li>A clear description of the vulnerability</li>
        <li>Steps to reproduce, including any tools, scripts, or payloads used</li>
        <li>The potential impact and severity (if known)</li>
        <li>Your assessment of the affected component (website, API, platform)</li>
        <li>Screenshots or proof-of-concept, where helpful</li>
        <li>Your name and contact information (if you&apos;d like to be credited)</li>
      </ul>

      <h2 id="expect">3. What to Expect</h2>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acknowledgment of your report</td>
            <td>Within 2 business days</td>
          </tr>
          <tr>
            <td>Initial triage and severity assessment</td>
            <td>Within 5 business days</td>
          </tr>
          <tr>
            <td>Regular status updates</td>
            <td>Every 7 days until resolved</td>
          </tr>
          <tr>
            <td>Resolution and fix deployment</td>
            <td>Varies by severity (target: 30 days for critical)</td>
          </tr>
          <tr>
            <td>Public disclosure (if agreed)</td>
            <td>After fix is deployed + 30 days</td>
          </tr>
        </tbody>
      </table>

      <h2 id="guidelines">4. Guidelines</h2>
      <p>To qualify for responsible disclosure protection, please:</p>
      <ul>
        <li><strong>Do</strong> report vulnerabilities to us before disclosing them publicly</li>
        <li><strong>Do</strong> provide enough detail for us to understand and reproduce the issue</li>
        <li><strong>Do</strong> give us reasonable time to address the vulnerability before any disclosure</li>
        <li><strong>Don&apos;t</strong> access, modify, or delete data that does not belong to you</li>
        <li><strong>Don&apos;t</strong> perform denial-of-service attacks, social engineering, or physical attacks</li>
        <li><strong>Don&apos;t</strong> access customer environments or customer data</li>
        <li><strong>Don&apos;t</strong> exploit the vulnerability beyond what is necessary to demonstrate it</li>
      </ul>

      <h2 id="in-scope">5. In-Scope Targets</h2>
      <table>
        <thead>
          <tr>
            <th>Target</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>genovation.ai</td>
            <td>Website</td>
          </tr>
          <tr>
            <td>api.genovation.ai</td>
            <td>API</td>
          </tr>
          <tr>
            <td>docs.genovation.ai</td>
            <td>Documentation</td>
          </tr>
          <tr>
            <td>Genovation Platform (self-hosted)</td>
            <td>Software (use your own test instance)</td>
          </tr>
        </tbody>
      </table>

      <h2 id="out-scope">6. Out of Scope</h2>
      <p>The following are <strong>not</strong> in scope and should not be tested:</p>
      <ul>
        <li>Customer-hosted platform instances (these belong to the customer, not Genovation)</li>
        <li>Denial-of-service (DoS/DDoS) attacks against any target</li>
        <li>Social engineering or phishing of Genovation employees</li>
        <li>Physical attacks against Genovation offices or infrastructure</li>
        <li>Automated scanning that generates excessive traffic or load</li>
        <li>Findings from automated tools without manual verification</li>
        <li>Missing security headers that do not lead to a demonstrable exploit</li>
        <li>SPF/DKIM/DMARC configuration issues without a proof-of-concept</li>
      </ul>

      <h2 id="recognition">7. Recognition</h2>
      <p>We believe in recognizing the work of security researchers. With your permission, we will:</p>
      <ul>
        <li>Credit you on our Security Acknowledgments page</li>
        <li>Provide a letter of acknowledgment (useful for your portfolio or CV)</li>
        <li>Consider financial rewards for critical and high-severity vulnerabilities (evaluated on a case-by-case basis)</li>
      </ul>
      <p>
        We do not currently operate a formal bug bounty program with fixed payouts, but we are generous with 
        researchers who report significant issues responsibly.
      </p>

      <h2 id="legal">8. Legal Safe Harbor</h2>
      <div className="callout">
        <p>
          Genovation Technological Solutions Pvt Ltd will not initiate legal action against security researchers who 
          comply with this policy. We consider responsible security research conducted in accordance with these guidelines 
          to be authorized, lawful, and helpful. We will not pursue civil action or criminal complaints against researchers 
          acting in good faith.
        </p>
      </div>
      <p>
        If a third party initiates legal action against you for activities conducted in accordance with this policy, 
        Genovation will make reasonable efforts to make it known that your actions were conducted in compliance with our policy.
      </p>

      <h2 id="contact">9. Contact</h2>
      <p>
        <strong>Security reports:</strong> <a href="mailto:security@genovation.ai">security@genovation.ai</a><br />
        <strong>General security inquiries:</strong> <a href="mailto:info@genovation.ai">info@genovation.ai</a><br />
        <strong>PGP fingerprint:</strong> <code className="font-mono text-[13px]">4A3B 8F2C 91D7 E6A5 ... (full key at security.txt)</code>
      </p>

    </div>
  );
}