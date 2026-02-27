"use client";

export default function AcceptableUseContent() {
  return (
    <div className="legal-body">
      
      <h2 id="scope">1. Scope</h2>
      <p>
        This Acceptable Use Policy (&quot;AUP&quot;) applies to all use of the Genovation platform, including 
        Mentis AgentOS, JUDGE, CipherVault, and all associated components, APIs, and interfaces. It applies to 
        all Authorized Users and Customers as defined in the Terms of Service.
      </p>
      <p>
        Because the Genovation platform operates within your infrastructure, enforcement of this policy is a shared 
        responsibility. Genovation provides the governance tools (JUDGE) to help you enforce these standards; Customer 
        is responsible for configuring and applying them within their deployment.
      </p>

      <h2 id="acceptable">2. Acceptable Use</h2>
      <p>You may use the Genovation platform for:</p>
      <ul>
        <li>Lawful business operations within the scope of your license agreement</li>
        <li>Processing, analyzing, and generating content from data you have the legal right to use</li>
        <li>Building and deploying agentic workflows that comply with applicable laws and regulations</li>
        <li>Internal research, testing, and development within your licensed environment</li>
        <li>Training and onboarding your team members who are Authorized Users</li>
      </ul>

      <h2 id="prohibited">3. Prohibited Use</h2>
      <p>You may <strong>not</strong> use the Genovation platform to:</p>
      <ul>
        <li>
          Violate any applicable law, regulation, or legal obligation, including the Information Technology Act, 
          2000 (India), data protection laws (DPDP Act, GDPR), and export control regulations
        </li>
        <li>Process personal data without a valid legal basis under applicable data protection regulations</li>
        <li>Infringe, misappropriate, or violate any third party&apos;s intellectual property, privacy, or other rights</li>
        <li>
          Generate, store, or disseminate content that is defamatory, obscene, harassing, threatening, or that 
          incites violence or discrimination
        </li>
        <li>
          Develop, deploy, or facilitate weapons systems, surveillance infrastructure targeting individuals based 
          on protected characteristics, or tools designed to deceive or manipulate
        </li>
        <li>Attempt to circumvent, disable, or tamper with JUDGE governance rules, audit trails, or security controls</li>
        <li>Reverse-engineer, decompile, disassemble, or extract source code from the platform</li>
        <li>Resell, sublicense, or provide access to the platform to unauthorized third parties</li>
        <li>Introduce malicious code, viruses, or malware into the platform or its operating environment</li>
        <li>Exceed your licensed capacity without authorization</li>
      </ul>

      <h2 id="ai-specific">4. AI-Specific Restrictions</h2>
      <p>Given the agentic nature of the Genovation platform, the following additional restrictions apply:</p>
      <ul>
        <li>
          <strong>No autonomous high-stakes decisions without human oversight:</strong> Agents must not be configured 
          to make final decisions in high-stakes domains (healthcare, legal, financial, criminal justice) without human 
          review in the loop. JUDGE governance rules must enforce human checkpoints.
        </li>
        <li>
          <strong>No deceptive impersonation:</strong> Agent outputs must not be presented to end users as human-generated 
          content without disclosure. Where agents interact with individuals, their AI nature must be disclosed.
        </li>
        <li>
          <strong>No discriminatory profiling:</strong> Agents must not be configured to profile, score, or make decisions 
          about individuals based on protected characteristics (race, gender, religion, disability, etc.).
        </li>
        <li>
          <strong>Audit trails must be preserved:</strong> Customers must not disable, delete, or tamper with the JUDGE 
          audit trail. Immutable records are a core architectural requirement.
        </li>
        <li>
          <strong>Compliance with AI regulations:</strong> Customers operating in jurisdictions with AI-specific regulations 
          (e.g., the EU AI Act, India&apos;s evolving AI governance framework) are responsible for classifying their use 
          cases and ensuring compliance with applicable requirements.
        </li>
      </ul>

      <h2 id="monitoring">5. Monitoring & Enforcement</h2>
      <p>
        Because the platform operates within your infrastructure, Genovation does not actively monitor your use. However, 
        we may audit compliance with this AUP in connection with support engagements, license renewals, or upon credible 
        reports of violations. JUDGE is designed to help you self-enforce these policies through configurable governance rules.
      </p>

      <h2 id="reporting">6. Reporting Violations</h2>
      <p>
        If you become aware of a violation of this AUP — by an Authorized User within your organization or by another 
        Genovation customer — please report it to <a href="mailto:compliance@genovation.ai">compliance@genovation.ai</a>. 
        All reports are treated confidentially.
      </p>

      <h2 id="consequences">7. Consequences of Violation</h2>
      <p>Violations of this AUP may result in:</p>
      <ul>
        <li>Written warning and requirement to remediate</li>
        <li>Suspension of access to the platform or affected features</li>
        <li>Termination of the license agreement</li>
        <li>Legal action, where warranted</li>
      </ul>
      <p>
        Genovation will make reasonable efforts to provide notice and an opportunity to cure before suspension or 
        termination, except in cases of serious or ongoing harm.
      </p>

      <h2 id="changes">8. Changes to This Policy</h2>
      <p>
        We may update this AUP from time to time. Material changes will be communicated with at least 30 days&apos; notice. 
        Continued use of the platform after changes take effect constitutes acceptance.
      </p>
      <p>
        <strong>Contact:</strong> <a href="mailto:legal@genovation.ai">legal@genovation.ai</a>
      </p>

    </div>
  );
}