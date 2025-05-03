import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-5 h-5 invert hover:scale-110 transition-transform duration-200"
            />
          </a>
        ))}
      </div>
      <div className="mx-auto md:mx-0">
        <p>© 2025 Mohi. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
