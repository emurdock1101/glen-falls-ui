import Link from "next/link";

export function FollowUsBox() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </>
      ),
      href: "#",
    },
    {
      name: "X",
      icon: (
        <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768 M13.232 10.768L20 4" />
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
      href: "#",
    },
  ];

  return (
    <div className="border border-gray-200 p-8">
      <h3 className="text-xl font-merriweather font-black mb-6 uppercase tracking-tight border-b border-gray-100 pb-2 text-black">
        Follow Us
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map(social => (
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
