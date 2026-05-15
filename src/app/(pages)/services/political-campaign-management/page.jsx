'use client';

import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  TabletSmartphone,
  BarChart2,
  Vote,
  Landmark,
  UserCircle,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Users,
  MapPin,
  Target,
  Award,
  ChevronDown,
  ArrowRight,
  Play,
  Zap,
  CircleDot,
} from 'lucide-react';

const services = [
  {
    Icon: Globe,
    title: 'Campaign Website Development',
    desc: 'Fast, mobile-first political websites that load instantly and communicate your vision clearly to every citizen.',
  },
  {
    Icon: Smartphone,
    title: 'Social Media Management',
    desc: 'Organic content strategy, consistent posting schedules, and community engagement across all major platforms.',
  },
  {
    Icon: Palette,
    title: 'Political Branding & Design',
    desc: 'Professional logo, banners, posters, and digital hoarding design that builds a strong, recognisable identity.',
  },
  {
    Icon: Megaphone,
    title: 'Digital Advertising',
    desc: 'Meta & Google Ads for public awareness campaigns, run with full ECI-mandated disclosures and compliance.',
  },
  {
    Icon: TabletSmartphone,
    title: 'Campaign Mobile App',
    desc: 'Custom apps for volunteer coordination, public engagement, and event announcements — all in one place.',
  },
  {
    Icon: BarChart2,
    title: 'Engagement Analytics',
    desc: 'Weekly and monthly reports covering social reach, ad performance, and website traffic — clear and actionable.',
  },
];

const stats = [
  { value: '50+', label: 'Political Campaigns Handled', Icon: Target },
  { value: '10+', label: 'States Served', Icon: MapPin },
  { value: '5M+', label: 'Social Media Impressions', Icon: TrendingUp },
  { value: '100%', label: 'On-Time Campaign Delivery', Icon: Award },
];

const steps = [
  {
    number: '01',
    title: 'Brand & Vision Audit',
    desc: 'We begin by understanding your political message, target citizens, and communication goals in depth.',
  },
  {
    number: '02',
    title: 'Digital Strategy Setup',
    desc: 'A full-plan covering website, social media, content calendar, and ad campaign structure — tailored to your timeline.',
  },
  {
    number: '03',
    title: 'Campaign Execution',
    desc: 'Our team creates content, manages publishing, runs ads, and ensures your message reaches citizens every day.',
  },
  {
    number: '04',
    title: 'Performance Reporting',
    desc: 'Detailed weekly and monthly digital analytics reports so you always know exactly how your campaign is performing.',
  },
];

const clients = [
  { Icon: Vote,        title: 'Political Candidates',      desc: 'MLA, MP, and local body candidates building their digital presence.' },
  { Icon: Landmark,    title: 'Political Parties',          desc: 'Regional and national parties looking to grow their digital footprint.' },
  { Icon: UserCircle,  title: 'Public Leaders & Ministers', desc: 'Elected officials who want to stay connected with their constituents.' },
  { Icon: Handshake,   title: 'NGOs & Social Campaigns',    desc: 'Organisations driving awareness on public policy and social causes.' },
];

const caseStudies = [
  {
    metric: '85K',
    label: 'Facebook followers',
    detail: 'Grew a candidate page from 2,000 to 85,000 followers in 60 days through targeted organic content and community engagement.',
    tag: 'Social Growth',
    Icon: Users,
  },
  {
    metric: '1.2M',
    label: 'Video views',
    detail: 'Generated 1.2 million views on rally and public event coverage using reels, shorts, and live streaming strategy.',
    tag: 'Content Reach',
    Icon: Play,
  },
  {
    metric: '50K+',
    label: 'Website visits',
    detail: 'Campaign website received over 50,000 visits in 30 days with average session duration of 2 min 40 seconds.',
    tag: 'Web Performance',
    Icon: Zap,
  },
];

const faqs = [
  {
    q: 'Do you work with all political parties?',
    a: 'Yes, Zentrix Infotech is completely non-partisan. We offer our digital services to all candidates, parties, and public leaders equally, regardless of political affiliation.',
  },
  {
    q: 'Is paid advertising on social media allowed during elections?',
    a: 'Yes, digital advertising is permitted with the proper ECI-mandated disclosures. We handle all compliance requirements so your campaigns run without any issues.',
  },
  {
    q: 'Do you handle voter databases or voter roll data?',
    a: 'No. We strictly provide digital communication and marketing services. We do not access, store, or process any voter roll or electoral data whatsoever.',
  },
  {
    q: 'How soon can a campaign go live?',
    a: 'Typically within 5–7 business days after our initial strategy session. For urgent timelines, we offer a fast-track setup.',
  },
  {
    q: 'What kind of analytics reports do you provide?',
    a: 'We provide weekly and monthly reports covering social media reach, follower growth, ad impressions, website traffic, and engagement rates — all in clear, readable formats.',
  },
  {
    q: 'Can you manage campaigns in regional languages like Hindi or Urdu?',
    a: 'Absolutely. Our content team can create and manage campaigns in Hindi, Urdu, and other regional languages to ensure your message connects with local citizens effectively.',
  },
];

const TricolourBar = () => (
  <div className="flex w-full h-1.5 rounded-full overflow-hidden">
    <div className="flex-1 bg-[#FF9933]" />
    <div className="flex-1 bg-gray-200" />
    <div className="flex-1 bg-[#138808]" />
  </div>
);

const AshokaWatermark = () => (
  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.04] pointer-events-none select-none">
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="100" r="90" stroke="#000080" strokeWidth="6" />
      <circle cx="100" cy="100" r="10" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={100 + 12 * Math.cos(rad)} y1={100 + 12 * Math.sin(rad)}
            x2={100 + 86 * Math.cos(rad)} y2={100 + 86 * Math.sin(rad)}
            stroke="#000080" strokeWidth="2.5"
          />
        );
      })}
    </svg>
  </div>
);

export default function PoliticalCampaignPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-[#FFFDF8] font-sans text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF9933] opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9933] opacity-10 translate-x-1/3 -translate-y-1/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#138808] opacity-[0.06] -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />
        <AshokaWatermark />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 mt-10 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="w-16 mb-6"><TricolourBar /></div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF6B00] mb-6">
              <span className="w-6 h-px bg-[#FF6B00] inline-block" />
              Political Campaign Services
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-medium leading-tight text-gray-900 mb-6">
              Amplify Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9933]">
                Political Voice
              </span>{' '}
              with Digital Strategy
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              We help political leaders and parties build a trusted, high-impact digital presence — through websites, social media, branding, and transparent campaign reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#FF6B00] to-[#FF9933] hover:opacity-90 transition-opacity shadow-lg shadow-orange-200"
              >
                Start Your Campaign
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* right — decorative card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF9933] rounded-3xl translate-x-3 translate-y-3 opacity-20" />
              <div className="relative bg-white border border-orange-100 rounded-3xl p-8 shadow-xl">
                <TricolourBar />
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-5 mb-5">Campaign Performance</p>
                <div className="space-y-4">
                  {[
                    { label: 'Social Media Reach',      val: '92%', pct: 92 },
                    { label: 'Content Engagement',      val: '78%', pct: 78 },
                    { label: 'Website Traffic Growth',  val: '86%', pct: 86 },
                    { label: 'Ad Campaign ROI',         val: '94%', pct: 94 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold text-[#FF6B00]">{item.val}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF9933] rounded-full"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { v: '50K+', l: 'Website visits' },
                    { v: '1.2M', l: 'Video views' },
                    { v: '85K',  l: 'Followers grown' },
                    { v: '60',   l: 'Days avg campaign' },
                  ].map((s) => (
                    <div key={s.l} className="bg-orange-50 rounded-2xl p-4 text-center">
                      <p className="text-xl font-medium text-[#FF6B00]">{s.v}</p>
                      <p className="text-xs text-gray-400 mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRICOLOUR DIVIDER ── */}
      <div className="flex w-full h-2">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white border-y border-gray-200" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* ── STATS BAR ── */}
      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF9933] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, Icon }) => (
              <div key={label} className="text-center flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <Icon size={20} className="text-white" />
                </div>
                <p className="font-serif text-4xl lg:text-5xl font-medium text-white">{value}</p>
                <p className="text-white/80 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00]">What We Offer</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-3 mb-5">Services We Provide</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Everything your digital campaign needs — from first impression to final report.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group border border-orange-100 rounded-2xl p-7 hover:border-transparent hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF9933] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ANALYTICS DASHBOARD PREVIEW ── */}
      <section className="py-24 bg-orange-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00]">Analytics</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-3 mb-6">
                Campaign Digital<br />Performance Dashboard
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                Every campaign we manage comes with a real-time digital analytics dashboard — tracking social media growth, ad impressions, website sessions, video views, and engagement. Clear, honest data. Always.
              </p>
              <ul className="space-y-3">
                {[
                  'Social media follower growth tracking',
                  'Ad impressions and click-through reporting',
                  'Website sessions, bounce rate & duration',
                  'Video views and engagement breakdown',
                  'Weekly automated performance summaries',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-[#138808] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* mock dashboard */}
            <div className="bg-white rounded-3xl border border-orange-100 shadow-xl p-6">
              <TricolourBar />
              <div className="flex items-center justify-between mt-5 mb-6">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Campaign Overview</p>
                  <p className="text-xs text-gray-400">Last 30 days</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs bg-green-50 text-[#138808] font-semibold px-3 py-1 rounded-full border border-green-200">
                  <CircleDot size={10} /> Live
                </span>
              </div>
              <div className="flex items-end gap-2 h-28 mb-6">
                {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 92, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-[#FF6B00] to-[#FF9933] opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-400 text-center mb-6">Daily social media reach (thousands)</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Impressions', val: '4.8M', change: '+23%' },
                  { label: 'Engagement',  val: '6.2%', change: '+8%'  },
                  { label: 'Link Clicks', val: '92K',  change: '+41%' },
                ].map((m) => (
                  <div key={m.label} className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="font-medium text-[#FF6B00] text-lg">{m.val}</p>
                    <p className="text-xs text-gray-400">{m.label}</p>
                    <p className="text-xs text-[#138808] font-semibold mt-1">{m.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00]">Our Process</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-3 mb-5">How We Work</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">A clear, structured process that keeps your campaign on track from day one.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#FF6B00] to-[#FF9933] opacity-30" />
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9933] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                <span className="font-serif text-2xl font-medium text-white">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="py-24 bg-orange-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00]">Our Clients</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-3 mb-5">Who We Work With</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">We are completely non-partisan — our digital services are open to all.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white border border-orange-100 rounded-2xl p-7 text-center hover:shadow-lg hover:shadow-orange-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9933] flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-serif text-lg font-medium text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="casestudies" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00]">Results</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-3 mb-5">Campaign Success Stories</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Real digital performance results from campaigns we have managed.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map(({ metric, label, detail, tag, Icon }) => (
            <div key={label} className="relative overflow-hidden border border-orange-100 rounded-2xl p-8 bg-white hover:shadow-xl hover:shadow-orange-100 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-[#FF6B00] to-[#FF9933] opacity-5 rounded-full translate-x-8 -translate-y-8" />
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex-1 bg-gray-100" />
                <div className="flex-1 bg-[#138808]" />
              </div>
              <div className="mt-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-[#FF6B00] to-[#FF9933] text-white px-3 py-1 rounded-full">
                  <Icon size={12} /> {tag}
                </span>
              </div>
              <p className="font-serif text-5xl font-medium text-[#FF6B00] mb-1">{metric}</p>
              <p className="text-gray-400 text-sm font-medium mb-4">{label}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPLIANCE BLOCK ── */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B00] to-[#FF9933]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <ShieldCheck size={34} className="text-white" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-white mb-5">Our Commitment to Compliance</h2>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Zentrix Infotech operates in full compliance with the Election Commission of India guidelines. All digital advertising campaigns are run with proper disclosures as required by law. We do not access, store, or process voter roll data of any kind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['ECI Guideline Compliant', 'Non-Partisan Services', 'No Voter Data Handling', 'Full Ad Disclosures'].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/40">
                <CheckCircle2 size={14} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRICOLOUR DIVIDER ── */}
      <div className="flex w-full h-2">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white border-y border-gray-200" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-1xl font-semibold uppercase tracking-widest text-[#FF6B00]">FAQ</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mt-3 mb-5">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-[#FF6B00]/30 shadow-md shadow-orange-100' : 'border-orange-100'}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-orange-50/40 transition-colors"
              >
                <span className="font-serif text-gray-900 font-semibold text-lg pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-[#FF6B00] to-[#FF9933] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                  <ChevronDown size={16} className="text-white" />
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 bg-white">
                  <div className="border-l-4 border-[#138808] pl-4">
                    <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      

    </div>
  );
}