
import Colors, { ColorTokens } from '../theme/colors';

const Footer = () => (
  <footer
    className="rounded-3xl mx-4 md:mx-12 mt-20 mb-8 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8 shadow-sm"
  style={{ backgroundColor: ColorTokens.purple }}
  >
    <div className="flex-1 min-w-[250px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white font-bold text-lg">F</div>
  <span className="font-bold text-2xl" style={{ color: ColorTokens.white }}>FinmiGo</span>
      </div>
  <p className="text-base mb-6 max-w-xs" style={{ color: ColorTokens.white }}>
        Effortlessly manage your spending, saving, and investing—all in one place.
      </p>
      <div className="flex gap-4 mb-6">
        <a href="#" aria-label="X"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" stroke="#6474D7" strokeWidth="2" strokeLinecap="round"/></svg></a>
        <a href="#" aria-label="Facebook"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 0 1 1-1H17V2.5z" stroke="#6474D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        <a href="#" aria-label="Instagram"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#6474D7" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#6474D7" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#6474D7"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#6474D7" strokeWidth="2"/><path d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.104.896-2 2-2s2 .896 2 2v7" stroke="#6474D7" strokeWidth="2" strokeLinecap="round"/></svg></a>
      </div>
  <hr className="border-t my-4" style={{ borderColor: ColorTokens.lightBlue, opacity: 0.5 }} />
  <div className="text-sm" style={{ color: ColorTokens.white }}>2025 Nomago, All right reserved</div>
    </div>
    <div className="flex-1 flex flex-col md:flex-row gap-12 justify-end">
      <div>
  <div className="font-bold mb-3" style={{ color: ColorTokens.white }}>Pages</div>
        <ul className="space-y-2">
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>Home</a></li>
          <li><a href="#" className="hover:underline transition" style={{ color: ColorTokens.white }}>Blog</a></li>
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>Waitlist</a></li>
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>404</a></li>
        </ul>
      </div>
      <div>
  <div className="font-bold mb-3" style={{ color: ColorTokens.white }}>Other Pages</div>
        <ul className="space-y-2">
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>Terms and Conditions</a></li>
          <li><a href="#" className="transition" style={{ color: ColorTokens.white }}>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="absolute bottom-4 right-8 text-xs text-gray hidden">Created by: Nivrit Powered by Framer</div>
  </footer>
);

export default Footer;
