export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0B] text-white/40 py-10">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {year} White Rice Impact. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
