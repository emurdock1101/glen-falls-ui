export function SubscribeBox() {
  return (
    <div className="bg-[#1C1C1C] text-white p-8 rounded-sm">
      <h3 className="text-2xl font-merriweather font-black mb-4 uppercase tracking-tight">
        Stay Connected
      </h3>
      <p className="text-dark-text-secondary font-raleway text-sm font-bold mb-6 leading-relaxed">
        Get the latest news and community updates delivered straight to
        your inbox every Thursday.
      </p>
      <div className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-white/10 border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors font-raleway font-bold placeholder:text-dark-text-secondary/80 text-white"
        />
        <button className="bg-white text-black py-3 font-black uppercase tracking-widest text-[13px] hover:bg-gray-200 transition-colors font-raleway">
          Subscribe Free
        </button>
      </div>
    </div>
  );
}
