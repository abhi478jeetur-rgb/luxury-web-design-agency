import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="bg-black min-h-screen text-white font-body selection:bg-white/30 p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-heading italic mb-12">Privacy Policy</h1>
        
        <div className="space-y-12 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">Introduction</h2>
            <p>
              At Luxury AI Web Design Studio, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="liquid-glass p-8 rounded-3xl border border-white/10 border-l-4 border-l-white">
            <h2 className="text-2xl font-heading italic text-white mb-4">Our Data Promise</h2>
            <p className="text-white font-medium text-lg">
              We value your trust above all else. We want to be absolutely clear: <span className="text-white underline decoration-white/30 underline-offset-4">We do not sell your personal data to any third parties.</span> Your information is used solely to provide and improve our luxury digital services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">Data We Collect</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data (name, username)</li>
              <li>Contact Data (email address, telephone numbers)</li>
              <li>Technical Data (IP address, browser type, location)</li>
              <li>Usage Data (information about how you use our website)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, or where it is necessary for our legitimate interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, please see our <Link href="/cookies" className="text-white underline decoration-white/20 hover:decoration-white transition-all">Cookie Policy</Link>.
            </p>
          </section>

          <section className="pt-12 border-t border-white/10">
            <p className="text-sm text-white/40">
              Last updated: April 2026. &copy; Luxury AI Web Design Studio.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
