import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPage() {
  return (
    <main className="bg-black min-h-screen text-white font-body selection:bg-white/30 p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-heading italic mb-12">Cookie Policy</h1>
        
        <div className="space-y-12 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">How We Use Cookies</h2>
            <p className="mb-6">
              We use cookies for several reasons, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="liquid-glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-white font-medium mb-2">Essential Cookies</h3>
                <p className="text-sm">Necessary for the website to function properly. These cannot be switched off.</p>
              </div>
              <div className="liquid-glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-white font-medium mb-2">Performance Cookies</h3>
                <p className="text-sm">Help us understand how visitors interact with our website, helping us improve performance.</p>
              </div>
              <div className="liquid-glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-white font-medium mb-2">Functional Cookies</h3>
                <p className="text-sm">Allow the website to remember choices you make (such as your user name or language).</p>
              </div>
              <div className="liquid-glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-white font-medium mb-2">Targeting Cookies</h3>
                <p className="text-sm">Used to deliver advertisements more relevant to you and your interests.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading italic text-white mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" className="text-white underline decoration-white/20 hover:decoration-white transition-all">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" className="text-white underline decoration-white/20 hover:decoration-white transition-all">www.allaboutcookies.org</a>.
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
