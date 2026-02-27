"use client";

export default function PrivacyPolicyContent() {
  return (
    <div className="legal-body">
      
      <h2 id="collect">1. Information We Collect</h2>
      
      <h3>Information You Provide</h3>
      <p>
        When you interact with us — by requesting a demo, signing up for a trial, contacting sales, or opening a 
        support ticket — we collect contact information such as name, email address, phone number, company name, 
        job title, and any other information you choose to provide in your message.
      </p>

      <h3>Information from Our Website</h3>
      <p>
        When you visit our website, we collect limited technical information including IP address (anonymized after 
        30 days), browser type and version, operating system, referring URL, pages viewed, and time spent on pages. 
        We use privacy-respecting analytics and do not use third-party advertising trackers.
      </p>

      <h3>Information from the Genovation Platform</h3>
      <div className="callout">
        <p>
          <strong>Critical distinction:</strong> Genovation is an on-premise / self-hosted platform. Your organizational 
          data — the documents, databases, and content processed by Mentis agents — never leaves your infrastructure. 
          We do not have access to it, we do not collect it, and we cannot see it. This section refers only to 
          account-level metadata (e.g., user login events, license usage counts) transmitted for licensing and support purposes.
        </p>
      </div>
      <p>
        Platform telemetry, when enabled by your administrator, may include agent invocation counts, license seat usage, 
        software version information, and aggregate error logs (which are stripped of content before transmission). This 
        telemetry can be fully disabled for air-gapped deployments.
      </p>

      <h2 id="use">2. How We Use Your Information</h2>
      <p>We use your personal information for the following purposes:</p>
      <ul>
        <li><strong>Service delivery</strong> — to provide, maintain, and improve the Genovation platform and respond to your requests</li>
        <li><strong>Communication</strong> — to respond to inquiries, send service-related announcements, and provide requested information about our products</li>
        <li><strong>Security</strong> — to detect, prevent, and respond to fraud, abuse, and security incidents</li>
        <li><strong>Legal compliance</strong> — to comply with applicable laws, regulations, and legal processes</li>
        <li><strong>Analytics</strong> — to understand how our website and platform are used so we can improve the experience</li>
      </ul>
      <p>
        We do not use your data for automated decision-making or profiling. We do not sell your personal information. 
        We do not use it for advertising purposes.
      </p>

      <h2 id="legal-basis">3. Legal Basis for Processing</h2>
      <p>
        If you are located in the European Economic Area, United Kingdom, India, or any jurisdiction that requires a 
        legal basis for processing personal data, we process data in accordance with the Digital Personal Data Protection 
        Act, 2023 (India), the GDPR (EU/EEA/UK), and other applicable laws. Our legal bases:
      </p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Providing our services</td>
            <td>Performance of a contract</td>
          </tr>
          <tr>
            <td>Responding to your inquiries</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Security and fraud prevention</td>
            <td>Legitimate interest</td>
          </tr>
          <tr>
            <td>Marketing (where applicable)</td>
            <td>Consent</td>
          </tr>
          <tr>
            <td>Legal compliance</td>
            <td>Legal obligation</td>
          </tr>
        </tbody>
      </table>

      <h2 id="sharing">4. Sharing & Disclosure</h2>
      <p>We do not sell, rent, or trade your personal information. We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> — infrastructure and tooling providers that help us operate our business 
          (e.g., cloud hosting for our website, email delivery), under strict data processing agreements
        </li>
        <li>
          <strong>Legal requirements</strong> — when required by law, regulation, legal process, or enforceable 
          governmental request
        </li>
        <li>
          <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets (with prior 
          notice to affected individuals)
        </li>
        <li>
          <strong>With your consent</strong> — when you have explicitly asked us to share information
        </li>
      </ul>
      <p>We do not share data with advertising networks, data brokers, or social media platforms.</p>

      <h2 id="retention">5. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfill the purposes described in this policy. 
        Specific retention periods:
      </p>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account information</td>
            <td>Duration of the business relationship + 12 months</td>
          </tr>
          <tr>
            <td>Sales inquiry data</td>
            <td>24 months from last interaction</td>
          </tr>
          <tr>
            <td>Website analytics</td>
            <td>14 months (aggregated), IP anonymized after 30 days</td>
          </tr>
          <tr>
            <td>Support tickets</td>
            <td>36 months from resolution</td>
          </tr>
          <tr>
            <td>Platform telemetry</td>
            <td>12 months (aggregated)</td>
          </tr>
        </tbody>
      </table>
      <p>When retention periods expire, data is securely deleted or irreversibly anonymized.</p>

      <h2 id="security">6. Security</h2>
      <p>
        We implement technical and organizational measures appropriate to the sensitivity of the data we process, including 
        encryption in transit (TLS 1.3) and at rest (AES-256), access controls based on least-privilege principles, regular 
        security assessments, and employee security training. Our platform is designed from the ground up around a zero-trust, 
        data-sovereign architecture — see our Security page for details.
      </p>

      <h2 id="international">7. International Transfers</h2>
      <p>
        If we transfer personal data outside your jurisdiction, we ensure appropriate safeguards are in place, including 
        Standard Contractual Clauses (SCCs) approved by the European Commission, adequacy decisions where applicable, and 
        supplementary measures as required by applicable law. Your platform data, by design, remains within your own 
        infrastructure and is not subject to international transfer by Genovation.
      </p>

      <h2 id="rights">8. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li><strong>Access</strong> your personal data and obtain a copy</li>
        <li><strong>Rectify</strong> inaccurate or incomplete data</li>
        <li><strong>Erase</strong> your data (&quot;right to be forgotten&quot;)</li>
        <li><strong>Restrict</strong> processing in certain circumstances</li>
        <li><strong>Port</strong> your data to another provider</li>
        <li><strong>Object</strong> to processing based on legitimate interest</li>
        <li><strong>Withdraw consent</strong> where processing is based on consent</li>
      </ul>
      <p>
        To exercise these rights, submit a request via our <a href="/dsar-request">DSAR Request</a> page. We will 
        respond within 30 days (or sooner, as required by applicable law).
      </p>

      <h2 id="children">9. Children</h2>
      <p>
        Genovation is an enterprise platform. We do not knowingly collect personal information from individuals under 
        16 years of age. If you believe we have inadvertently collected such data, please contact us and we will 
        promptly delete it.
      </p>

      <h2 id="changes">10. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be communicated via email to registered 
        contacts and posted prominently on our website at least 30 days before they take effect. Continued use of 
        our services after changes take effect constitutes acceptance.
      </p>

      <h2 id="contact">11. Contact Us</h2>
      <p>For privacy-related questions or requests:</p>
      <p>
        <strong>Genovation Technological Solutions Pvt Ltd — Privacy Team</strong><br />
        Email: <a href="mailto:privacy@genovation.ai">privacy@genovation.ai</a><br />
        Registered Office: Kolkata, West Bengal, India<br />
        Data Protection Officer: <a href="mailto:dpo@genovation.ai">dpo@genovation.ai</a>
      </p>
      <p>
        If you are unsatisfied with our response, you have the right to lodge a complaint with the relevant data 
        protection authority, including the Data Protection Board of India under the DPDP Act, 2023.
      </p>

    </div>
  );
}