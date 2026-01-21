import Link from "next/link";
import { socialMediaIcons } from "./icons/social-media-icons";
export function FollowUsBox() {
  return (
    <div className="border border-gray-200 p-8">
      <h3 className="text-xl font-merriweather font-black mb-6 uppercase tracking-tight border-b border-gray-100 pb-2 text-black">
        Follow Us
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {socialMediaIcons.map(social => (
          <Link
            key={social.name}
            href={social.href}
            className="flex items-center gap-3 p-3 border border-gray-100 hover:bg-gray-50 transition-colors group"
          >
            <span className="text-gray-400 group-hover:text-black transition-colors">
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {social.icon}
              </svg>
            </span>
            <span className="text-xs font-black uppercase tracking-widest font-raleway text-black">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
