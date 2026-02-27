"use client";

import { Check } from 'lucide-react';

export default function DSARRequestContent({ formSubmitted, onFormSubmit }) {
  return (
    <div className="legal-body">
      
      <h2 id="overview">1. Overview</h2>
      <p>
        A Data Subject Access Request (DSAR) allows you to exercise your rights under data protection laws 
        such as GDPR (EU), CCPA (California), LGPD (Brazil), and the DPDP Act (India). You can request access 
        to, correction of, or deletion of your personal data that Genovation holds.
      </p>

      <h2 id="rights">2. Your Rights</h2>
      <p>You may request:</p>
      <ul>
        <li><strong>Access</strong> — a copy of the personal data we hold about you</li>
        <li><strong>Rectification</strong> — correction of inaccurate or incomplete data</li>
        <li><strong>Erasure</strong> — deletion of your personal data (&quot;right to be forgotten&quot;)</li>
        <li><strong>Restriction</strong> — temporary halt of processing while a dispute is resolved</li>
        <li><strong>Portability</strong> — your data in a structured, machine-readable format</li>
        <li><strong>Objection</strong> — objection to processing based on legitimate interest</li>
        <li><strong>Withdrawal of consent</strong> — withdrawal of previously given consent</li>
      </ul>

      <h2 id="form">3. Submit a Request</h2>
      <div style={{
        background: 'rgba(255,255,255,0.8)',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '20px',
        padding: '36px',
        margin: '1.5rem 0'
      }}>
        {!formSubmitted ? (
          <form onSubmit={onFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="ff">
                <input type="text" id="dsarFirst" placeholder=" " required />
                <label htmlFor="dsarFirst">First name *</label>
              </div>
              <div className="ff">
                <input type="text" id="dsarLast" placeholder=" " required />
                <label htmlFor="dsarLast">Last name *</label>
              </div>
              <div className="ff md:col-span-2">
                <input type="email" id="dsarEmail" placeholder=" " required />
                <label htmlFor="dsarEmail">Email address *</label>
              </div>
              <div className="ff md:col-span-2">
                <input type="text" id="dsarCompany" placeholder=" " />
                <label htmlFor="dsarCompany">Company (if applicable)</label>
              </div>
            </div>
            
            <div className="mt-6 mb-6">
              <div className="text-[13px] font-light text-gray-800 mb-3">Type of request *</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] cursor-pointer hover:border-emerald-400/40 transition-colors">
                  <input type="radio" name="dsarType" value="access" required className="accent-emerald-500" />
                  <span className="text-[13px] font-light">Access my data</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] cursor-pointer hover:border-emerald-400/40 transition-colors">
                  <input type="radio" name="dsarType" value="rectify" className="accent-emerald-500" />
                  <span className="text-[13px] font-light">Rectify my data</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] cursor-pointer hover:border-emerald-400/40 transition-colors">
                  <input type="radio" name="dsarType" value="erase" className="accent-emerald-500" />
                  <span className="text-[13px] font-light">Erase my data</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] cursor-pointer hover:border-emerald-400/40 transition-colors">
                  <input type="radio" name="dsarType" value="restrict" className="accent-emerald-500" />
                  <span className="text-[13px] font-light">Restrict processing</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] cursor-pointer hover:border-emerald-400/40 transition-colors">
                  <input type="radio" name="dsarType" value="portability" className="accent-emerald-500" />
                  <span className="text-[13px] font-light">Data portability</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-black/[0.06] cursor-pointer hover:border-emerald-400/40 transition-colors">
                  <input type="radio" name="dsarType" value="object" className="accent-emerald-500" />
                  <span className="text-[13px] font-light">Object to processing</span>
                </label>
              </div>
            </div>
            
            <div className="ff">
              <textarea id="dsarDetails" placeholder=" " rows={4}></textarea>
              <label htmlFor="dsarDetails">Additional details (optional)</label>
            </div>
            
            <p style={{
              fontSize: '12px',
              color: 'rgba(0,0,0,0.4)',
              margin: '12px 0 20px'
            }}>
              We will verify your identity before processing this request. You may be asked to provide additional information.
            </p>
            
            <button 
              type="submit" 
              style={{
                padding: '14px 40px',
                borderRadius: '12px',
                background: '#1a1a2e',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '300',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Submit Request
            </button>
          </form>
        ) : (
          <div style={{
            display: 'block',
            textAlign: 'center',
            padding: '40px 0'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Check className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '300',
              marginBottom: '8px'
            }}>
              Request Submitted
            </h3>
            <p style={{
              fontSize: '14px',
              fontWeight: '300',
              color: 'rgba(0,0,0,0.5)'
            }}>
              We&apos;ll verify your identity and respond within 30 days. Check your email for confirmation.
            </p>
          </div>
        )}
      </div>

      <h2 id="process">4. Our Process</h2>
      <p>After receiving your request, we will:</p>
      <ul>
        <li><strong>Acknowledge</strong> your request within 3 business days</li>
        <li><strong>Verify your identity</strong> — we may ask for additional information to confirm you are the data subject (or authorized representative)</li>
        <li><strong>Process</strong> your request and take the appropriate action</li>
        <li><strong>Respond</strong> with the outcome, including any data or confirmation of action taken</li>
      </ul>

      <h2 id="timeline">5. Timeline</h2>
      <table>
        <thead>
          <tr>
            <th>Jurisdiction</th>
            <th>Response Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GDPR (EU/EEA/UK)</td>
            <td>30 days (extendable to 90 in complex cases)</td>
          </tr>
          <tr>
            <td>CCPA (California)</td>
            <td>45 days (extendable to 90)</td>
          </tr>
          <tr>
            <td>LGPD (Brazil)</td>
            <td>15 days</td>
          </tr>
          <tr>
            <td>DPDP Act (India)</td>
            <td>As prescribed by the Data Protection Board</td>
          </tr>
          <tr>
            <td>All other jurisdictions</td>
            <td>30 days</td>
          </tr>
        </tbody>
      </table>

      <h2 id="contact">6. Contact</h2>
      <p>
        For questions about DSARs or your privacy rights:<br />
        <a href="mailto:privacy@genovation.ai">privacy@genovation.ai</a> · DPO: <a href="mailto:dpo@genovation.ai">dpo@genovation.ai</a>
      </p>

    </div>
  );
}