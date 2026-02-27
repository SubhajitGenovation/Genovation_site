"use client";
import { X, Check, ArrowRight, XCircle, Dna } from "lucide-react";

export default function ChunkingSection() {
  return (
    <section
      className="py-32 md:py-48 relative overflow-hidden"
      id="chunking"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%,rgba(139,92,246,0.04) 0%,transparent 50%),radial-gradient(circle at 80% 30%,rgba(217,70,239,0.03) 0%,transparent 50%)",
      }}
    >
      <div className="absolute inset-0 mesh-bg" style={{ opacity: 0.15 }} />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(139,92,246,0.05)", top: "5%", left: "15%" }} />
      <div className="orb" style={{ width: 400, height: 350, background: "rgba(217,70,239,0.04)", bottom: "15%", right: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ── LEFT: Content ── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Label */}
            <div className="flex items-center gap-3 r-left">
              <span
                className="text-violet-600 font-mono uppercase"
                style={{ fontSize: 11, letterSpacing: "0.2em" }}
              >
                PROPRIETARY
              </span>
              <div className="w-8 h-px" style={{ background: "rgba(139,92,246,0.4)" }} />
            </div>

            {/* Heading */}
            <h2
              className="display-section r-left"
              style={{ fontSize: "clamp(2.8rem,5vw,4rem)", lineHeight: 1.0 }}
            >
              Semantic Boundary<br />
              <span className="text-gradient-violet">Chunking</span>
            </h2>

            {/* Comparison card */}
            <div className="card-static p-6 r-left">
              {/* Bad */}
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(239,68,68,0.1)" }}
                >
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  <span className="font-medium text-gray-700">Standard RAG systems</span> chunk
                  by fixed token counts — breaking mid-sentence, mid-thought, mid-context.
                  The LLM fills gaps with{" "}
                  <span className="text-red-500">hallucinated content</span>.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-5" style={{ background: "rgba(0,0,0,0.06)" }} />

              {/* Good */}
              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  <span className="font-medium text-gray-700">Our algorithm</span> detects{" "}
                  <span className="text-violet-600 font-medium">subject and object transitions</span>{" "}
                  — chunking only when semantic focus changes. Each chunk is metatagged with
                  full context.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 r-left">
              <div>
                <div
                  className="text-3xl font-light text-gradient-emerald"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  73%
                </div>
                <div className="text-gray-400 font-mono" style={{ fontSize: 10 }}>
                  less hallucination
                </div>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(0,0,0,0.06)" }} />
              <div>
                <div
                  className="text-3xl font-light text-gradient-violet"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  2.4x
                </div>
                <div className="text-gray-400 font-mono" style={{ fontSize: 10 }}>
                  answer accuracy
                </div>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(0,0,0,0.06)" }} />
              <div>
                <div
                  className="text-3xl font-light text-gradient-sky"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  100%
                </div>
                <div className="text-gray-400 font-mono" style={{ fontSize: 10 }}>
                  traceable citations
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Dark terminal demo ── */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 r-right">
            <div className="dark-terminal">
              {/* Terminal header */}
              <div className="dark-terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(254,188,46,0.6)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,200,64,0.6)" }} />
                  </div>
                  <div
                    className="flex items-center gap-2 pl-3"
                    style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center"
                      style={{ background: "#8b5cf6" }}
                    >
                      <Dna className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-400 font-mono" style={{ fontSize: 12 }}>
                      semantic_chunking_analysis
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-violet-400" style={{ fontSize: 10 }}>✦</span>
                  <span className="text-violet-400 font-mono" style={{ fontSize: 10 }}>
                    Subject-Object Detection
                  </span>
                </div>
              </div>

              <div className="p-5">
                {/* Source text */}
                <div
                  className="p-4 rounded-xl mb-5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="text-gray-500 font-mono uppercase mb-2"
                    style={{ fontSize: 9, letterSpacing: "0.1em" }}
                  >
                    SOURCE: GDPR-POLICY.PDF
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed" style={{ fontSize: 11 }}>
                    <span
                      className="px-1 rounded"
                      style={{ background: "rgba(14,165,233,0.15)", color: "#7dd3fc" }}
                    >
                      Personal data of EU residents must be retained for a maximum period of
                      three (3) years following the date of last interaction.
                    </span>{" "}
                    <span
                      className="px-1 rounded ml-1"
                      style={{ background: "rgba(139,92,246,0.15)", color: "#c4b5fd" }}
                    >
                      Consent records and audit logs, however, must be maintained for seven
                      (7) years to comply with regulatory requirements.
                    </span>{" "}
                    <span
                      className="px-1 rounded ml-1"
                      style={{ background: "rgba(16,185,129,0.15)", color: "#6ee7b7" }}
                    >
                      The Data Protection Officer is responsible for enforcing these retention
                      periods across all business units.
                    </span>
                  </p>
                </div>

                {/* Detected transitions */}
                <div
                  className="text-gray-500 font-mono uppercase mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.1em" }}
                >
                  DETECTED_SUBJECT_TRANSITIONS
                </div>
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  <span
                    className="px-2 py-1 rounded font-mono"
                    style={{
                      fontSize: 10,
                      background: "rgba(14,165,233,0.15)",
                      color: "#7dd3fc",
                      border: "1px solid rgba(14,165,233,0.2)",
                    }}
                  >
                    Personal data
                  </span>
                  <ArrowRight className="w-3 h-3 text-gray-600" />
                  <span
                    className="px-2 py-1 rounded font-mono"
                    style={{
                      fontSize: 10,
                      background: "rgba(139,92,246,0.15)",
                      color: "#c4b5fd",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    Consent records
                  </span>
                  <ArrowRight className="w-3 h-3 text-gray-600" />
                  <span
                    className="px-2 py-1 rounded font-mono"
                    style={{
                      fontSize: 10,
                      background: "rgba(16,185,129,0.15)",
                      color: "#6ee7b7",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    DPO responsibilities
                  </span>
                </div>

                {/* Generated chunks */}
                <div
                  className="text-gray-500 font-mono uppercase mb-2"
                  style={{ fontSize: 9, letterSpacing: "0.1em" }}
                >
                  GENERATED_SEMANTIC_CHUNKS
                </div>
                <div className="space-y-2 mb-4">
                  {/* Chunk 42 */}
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sky-400 font-mono font-bold" style={{ fontSize: 9 }}>
                        CHUNK #42
                      </span>
                      <span
                        className="px-1.5 py-0.5 text-sky-300 rounded font-mono"
                        style={{ fontSize: 8, background: "rgba(14,165,233,0.15)" }}
                      >
                        COMPLETE
                      </span>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed mb-2" style={{ fontSize: 10 }}>
                      "Personal data of EU residents must be retained for a maximum period of
                      three (3) years following the date of last interaction."
                    </p>
                    <div
                      className="flex items-center gap-3 pt-2"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-gray-500 font-mono" style={{ fontSize: 8 }}>SUBJECT:</span>
                      <span className="text-sky-400 font-mono" style={{ fontSize: 9 }}>personal_data</span>
                      <span className="text-gray-500 font-mono" style={{ fontSize: 8 }}>OBJECT:</span>
                      <span className="text-sky-400 font-mono" style={{ fontSize: 9 }}>retention_period</span>
                      <span className="text-gray-500 font-mono" style={{ fontSize: 8 }}>VALUE:</span>
                      <span className="text-sky-400 font-mono" style={{ fontSize: 9 }}>3_years</span>
                    </div>
                  </div>

                  {/* Chunk 43 */}
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-violet-400 font-mono font-bold" style={{ fontSize: 9 }}>
                        CHUNK #43
                      </span>
                      <span
                        className="px-1.5 py-0.5 text-violet-300 rounded font-mono"
                        style={{ fontSize: 8, background: "rgba(139,92,246,0.15)" }}
                      >
                        COMPLETE
                      </span>
                    </div>
                    <p className="text-gray-300 font-light leading-relaxed mb-2" style={{ fontSize: 10 }}>
                      "Consent records and audit logs must be maintained for seven (7) years
                      to comply with regulatory requirements."
                    </p>
                    <div
                      className="flex items-center gap-3 pt-2"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-gray-500 font-mono" style={{ fontSize: 8 }}>SUBJECT:</span>
                      <span className="text-violet-400 font-mono" style={{ fontSize: 9 }}>consent_records</span>
                      <span className="text-gray-500 font-mono" style={{ fontSize: 8 }}>OBJECT:</span>
                      <span className="text-violet-400 font-mono" style={{ fontSize: 9 }}>retention_period</span>
                      <span className="text-gray-500 font-mono" style={{ fontSize: 8 }}>VALUE:</span>
                      <span className="text-violet-400 font-mono" style={{ fontSize: 9 }}>7_years</span>
                    </div>
                  </div>
                </div>

                {/* Bad comparison */}
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
                >
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-red-300 font-mono mb-1" style={{ fontSize: 10 }}>
                        Standard chunking would split here:
                      </div>
                      <p className="text-gray-400 font-mono" style={{ fontSize: 9 }}>
                        "...three (3) years following the date of last{" "}
                        <span
                          className="px-0.5 rounded"
                          style={{ background: "rgba(239,68,68,0.3)", color: "#fca5a5" }}
                        >
                          |
                        </span>{" "}
                        interaction. Consent records and audit..."
                      </p>
                      <p className="text-red-400 mt-1" style={{ fontSize: 9 }}>
                        → Broken context leads to hallucination
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
