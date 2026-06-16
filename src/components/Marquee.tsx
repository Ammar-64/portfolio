'use client'

const items = [
  // Government data sources (American VoxPop)
  'Congress.gov',
  'CourtListener',
  'BillTrack50',
  'Federal Register',
  'Democracy Works',
  'Cicero',
  'OpenFEC',
  'FiscalNote',
  // Enterprise systems & CRMs
  'Zoho',
  'Salesforce',
  'Apollo',
  'Close CRM',
  'ShipStation',
  'FedEx API',
  // Comms & messaging
  'Google Chat',
  'SendGrid',
  'Twilio',
  'RingCentral',
  // Content & mobile
  'Builder.io',
  'React Native',
  'Expo',
  // Cloud & infra
  'AWS',
  'GCP',
  'Terraform',
]

const Marquee = () => {
  return (
    <div className="relative border-y border-line bg-ink-800/60 py-4 overflow-hidden">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <span className="font-mono text-[10px] uppercase tracking-kicker text-faint bg-ink-800 pr-4">
          Integrated
        </span>
      </div>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm text-muted">
              <span className="hover:text-accent transition-colors">{item}</span>
              <span className="text-line">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
