
import { ColorTokens } from '../theme/colors';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer
    className="rounded-3xl mx-4 md:mx-12 mt-20 mb-8 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8 shadow-sm"
  style={{ backgroundColor: ColorTokens.purple }}
  >
    <div className="flex-1 min-w-[250px]">
      <div className="flex items-center gap-2 mb-4">
        <Image src="/small-logo.png" alt="Nomago Logo" width={32} height={32} className="w-8 h-8 object-cover" priority />
        <span className="font-bold text-2xl" style={{ color: ColorTokens.white }}>Nomago</span>
      </div>
  <p className="text-base mb-6 max-w-xs" style={{ color: ColorTokens.white }}>
        Nomago është platforma që i ndihmon nomadët digjitalë të gjejnë akomodim, hapësira pune dhe komunitet, kudo që ndodhen. Jetëso lirinë tënde me Nomago.
      </p>
      <div className="flex gap-4 mb-6">
  <a href="#" aria-label="Facebook"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 0 1 1-1H17V2.5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
  <a href="#" aria-label="Instagram"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/></svg></a>
      </div>
  <hr className="border-t my-4" style={{ borderColor: ColorTokens.lightBlue, opacity: 0.5 }} />
  <div className="text-sm" style={{ color: ColorTokens.white }}>2025 Nomago, All right reserved</div>
    </div>
    <div className="flex-1 flex flex-col md:flex-row gap-12 justify-end">
      <div>
  <div className="font-bold mb-3" style={{ color: ColorTokens.white }}>Pages</div>
        <ul className="space-y-2">
          <li><Link href="/" className="transition" style={{ color: ColorTokens.white }}>Home</Link></li>
          <li><Link href="/blog" className="hover:underline transition" style={{ color: ColorTokens.white }}>Blog</Link></li>
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>Waitlist</a></li>
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>404</a></li>
        </ul>
      </div>
      <div>
  <div className="font-bold mb-3" style={{ color: ColorTokens.white }}>Other Pages</div>
        <ul className="space-y-2">
          <li><a href="/terms" className="transition" style={{ color: ColorTokens.white }}>Terms and Conditions</a></li>
          <li><a href="/privacy" className="transition" style={{ color: ColorTokens.white }}>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="absolute bottom-4 right-8 text-xs text-gray hidden">Created by: Nivrit Powered by Framer</div>
  </footer>
);

export default Footer;
