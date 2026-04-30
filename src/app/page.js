"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* TopAppBar */}
      <header className="docked full-width top-0 sticky z-50 bg-[#faf8ff]/80 dark:bg-[#1a1b22]/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-4 w-full max-w-[1440px] mx-auto">
          {/* Brand & Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                className="h-10 w-auto" 
                alt="Online India Logo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDcMPSs8RAK9bTvMbMqMjSdDh_6DFAa-KLDqv6ws9iA1Jm6LioZ1lUSol17xInuC43ynchWYB_lUS_aISSwV8r-9TavTTcPK-HOUeV83FB-FP03WzFoPEhVjYCRzMRbFkCNDPLe0eUNHq4B0SMA8a6gL0cPhJ54PbA3GXk5Rei86kz-XINvxr4D4xOBx7YphxTdaSD4sz32tsGBzHBFD-sHOj1EZVxbBnf92eJLAdMRO6jdGyaCp-Jk-a7pp9FwMEPGST6A9E_EUrr"
              />
              <span className="text-2xl font-black tracking-tighter text-[#00216e] dark:text-white font-headline">Online India</span>
            </div>
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              <a className="text-[#0033a0] dark:text-[#41befd] font-bold border-b-2 border-[#0033a0] dark:border-[#41befd] pb-1 font-label text-sm" href="#">Marketplace</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-[#0033a0] transition-colors font-label text-sm" href="#">Export Hub</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-[#0033a0] transition-colors font-label text-sm" href="#">Suppliers</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-[#0033a0] transition-colors font-label text-sm" href="#">Logistics</a>
            </nav>
          </div>
          {/* Command Center Search Bar */}
          <div className="hidden xl:flex flex-1 max-w-2xl mx-12">
            <div className="flex w-full items-center bg-[#e2e1eb] rounded-full px-2 py-1.5 shadow-sm">
              <div className="flex items-center gap-2 px-4 border-r border-[#c4c5d5]/30 text-[#444653] font-medium text-xs whitespace-nowrap">
                <span>All Category</span>
                <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </div>
              <div className="flex-1 px-4">
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-[#444653]/60" 
                  placeholder="Search Product, Export buyer, Domestic, or Company" 
                  type="text"
                />
              </div>
              <button className="bg-gradient-to-br from-[#00216e] to-[#0033a0] text-white px-6 py-2 rounded-full font-label text-sm font-bold shadow-md hover:scale-95 transition-transform">
                Search
              </button>
            </div>
          </div>
          {/* Trailing Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined p-2 text-[#444653] hover:bg-[#eeedf6]/50 rounded-full cursor-pointer">language</span>
              <span className="material-symbols-outlined p-2 text-[#444653] hover:bg-[#eeedf6]/50 rounded-full cursor-pointer">notifications</span>
            </div>
            <button className="bg-[#e8e7f1] text-[#00216e] font-bold px-6 py-2 rounded-md font-label text-sm hover:bg-[#e2e1eb] transition-colors">
              Get a Quote
            </button>
            <span className="material-symbols-outlined p-2 text-[#0033a0] bg-[#dce1ff] rounded-full cursor-pointer" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1440px] mx-auto px-8 pt-6">
        {/* Hero Section: Promotional Banner */}
        <section className="relative w-full rounded-xl overflow-hidden bg-[#f4f2fc] mb-12">
          <div className="grid md:grid-cols-2 min-h-[520px]">
            <div className="flex flex-col justify-center p-16 z-10">
              <span className="text-[#00658d] font-bold tracking-widest text-sm uppercase mb-4">The Institutional Curator</span>
              <h1 className="font-headline text-6xl font-extrabold text-[#00216e] leading-tight tracking-tight mb-6">
                Trade with India's <br/>
                <span className="text-[#00658d]">Premier B2B</span> <br/>
                Export Network
              </h1>
              <p className="font-body text-[#444653] text-lg max-w-md mb-10 leading-relaxed">
                Connect with verified domestic suppliers and global export buyers through our high-fidelity commerce engine. Precision, trust, and professional scale.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#00216e] text-white px-8 py-4 rounded-md font-bold text-base shadow-xl hover:bg-[#0033a0] transition-all">Explore Marketplace</button>
                <button className="bg-white text-[#00216e] border-2 border-[#00216e]/10 px-8 py-4 rounded-md font-bold text-base hover:bg-[#eeedf6] transition-all">Become a Seller</button>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img 
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                alt="Industrial Warehouse" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANUZ2u7nyDrtdiIdouTFsEIDHzQCAunr8BlfjiEdnb-gpPhb-6NY2gxETzGr1M8hWWxlNNA2a7xm_rfeKRVKggrsHZz9fyS-FRkvlzO8KFUV7FpBvmHW44N4m99R1qlpw5i4tpnSCrKq_vJCNI2cs5h7W5PwUxZdjso8t7ihZicHAt4IF3pzLG1UfbvHdQGhi9f10Ym-XcZj9gGsDpWVLhw09Bk318JjMyBqb9Xw7e0kN7dOkrW8Pk5XV4QCb64LgERqjJRUTnzKKe"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2fc] via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline text-3xl font-bold text-[#00216e]">Trade Intelligence</h2>
              <p className="text-[#444653]">Live insights and expert reviews from the commerce floor.</p>
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-bold text-sm">Fresh Buyer - Live Now</span>
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black group cursor-pointer">
              <img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCChWFtY2LHIVBQ4T4GY_qSpMVvAohQ7BzqU0aSCMOoCMUBJ9gmSqRrFB69Xs9dkftYs_H091uiOBiZvHGnVciLMCPRnox27LMGQEJhXUhaSQOyAP_g1Fv4SWbo6sYLqSkhdBuxOdyscRw9LBlW4SVRnsAh72E2dyTL0DAy6ITisgQNFermWJwlG9jSvnjlbTskiY1lMu1X__YLcTnECE4GTIxb0HaqTa-tKRYbZUqc634AYtOTU3FmPMp6AWuc7iRTBgg288XDw1aL" alt="AI Analysis" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0033a0] bg-[#41befd] rounded-full p-1 text-xs">auto_awesome</span>
                  AI Video Analysis
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black group cursor-pointer">
              <img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAshbPh4DzpwhDMnn5lBXJ44hbO6SvCI-VYOLSVvc-wnjTR2veowwbrYj_dujNIXWzuYpgdZLnewZRz2cOipHz86a_Y6DtoG3ERMDEWD2HVW1WuXK4fNgs1gOtcndZtdF1tn7Ubs9GgAP-He7jcaAWKI4rAaRcyqdKksgoWxoS1qJPvqN6YlyWgn8oQakzs58yInlSQ1SedGFAaeCGnJTPBu-8D8M2JBUTsuV60TakmQN-y6rGJy7mz_aMH5drlj7f1gsfAbmd1x5jZ" alt="Review" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0033a0] bg-[#41befd] rounded-full p-1 text-xs">reviews</span>
                  Review Video
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black group cursor-pointer">
              <img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy9ba6AdXThwYaXqQkham3-bscBooHYnfiTILoCPglBbHvtL9lV-4lohLG9KftQqamFk9-9nP0ESS1DCZrkMI9TI8vtwIAsTNELKx3WVqfEWnWXYp07bF-0vg3-nnlRs0aTJiqXkro6lFhPNCoX84QMPTozSPw-A4TFJp7NvlC_yJ8RmLURBt3pB1qyoEhLMkrtT-nLROdrz3v4BvsjHUvwN5_cXCqB9cALt2EngxK9JZAO-NVKSUrmpYShYQa4KDFgKQsEg5ESbK9" alt="Export" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0033a0] bg-[#41befd] rounded-full p-1 text-xs">sailing</span>
                  Export Video
                </span>
              </div>
            </div>
            <div className="bg-[#eeedf6] rounded-xl p-6 flex flex-col justify-between border-l-4 border-[#00216e]">
              <h3 className="font-headline font-bold text-[#00216e]">Need a Custom Export Strategy?</h3>
              <p className="text-xs text-[#444653] leading-relaxed uppercase">Our AI-driven logistics engine identifies the fastest routes for your specific cargo.</p>
              <button className="mt-4 text-sm font-bold text-[#00658d] flex items-center gap-1 group">
                Consult with Experts
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Directory Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-3xl font-bold text-[#00216e]">Company Directory</h2>
            <button className="text-[#00658d] font-bold text-sm underline underline-offset-8">View All Manufacturers</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-transparent hover:border-[#00658d] transition-all group bento-card">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-[#f4f2fc] rounded-lg p-2 flex items-center justify-center">
                  <img className="w-full h-auto grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMqOV7np8z_kKqpshSTIETYYYxHR1ArFyeaEtMtyC5gis7x_jI1c2TUdHQepWqKYkIae2AORd-d3LjtB8i-4XbgMBcpggrWPxr6UM5YOJrXkzdb65mFUUiODrWN4K4N8GdGmOUhlKNwJWn5kmci2ICrfV2gDFE6JuGlKOjjkb6Wz5kAIirAmVRTLgDOYmpze2xjmYWl2dE8-4d1GnwMzuPKYYgyBhm4U4HPDy82ssKpMb8BZrbSG-RM0QC2CjeFaJYKnGmchuigrxs" alt="Apex Logo" />
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Verified Gold</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-2">Apex Industrial Solutions</h4>
              <p className="text-sm text-[#444653] mb-6 line-clamp-2">Leading manufacturer of precision CNC components and heavy machinery parts for export markets.</p>
              <div className="flex items-center justify-between pt-6 border-t border-[#c4c5d5]/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#00658d]">location_on</span>
                  <span className="text-xs font-medium">Pune, India</span>
                </div>
                <span className="material-symbols-outlined text-[#00216e] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </div>
            {/* Company Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-transparent hover:border-[#00658d] transition-all group bento-card">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-[#f4f2fc] rounded-lg p-2 flex items-center justify-center">
                  <img className="w-full h-auto grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2et3hPWagXRWbcigWLx5tz-FwTlIArDQLNx6onf5OO6ArKNJjV9DdraphfJZTcENQ-FNanx3TLXYcdZfUahNd-k8ahVCip833w8FeqFjiF-E5n5QdyrJJa0O1xAhvnMLSAaK7lHSMwadrlbo2W9T0AEff8PMD9c3VNlMI2vs9_QsqojEnojRcW8UujiFHfxCP-Umbsqw64KaEW1Ld8R4HRoRju6T_nepKNvJpPoZGmZwy8mtr57uq5A25sF9FtmogoR3Ag3g3Wz00" alt="Heritage Logo" />
                </div>
                <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Top Exporter</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-2">Heritage Textiles Ltd</h4>
              <p className="text-sm text-[#444653] mb-6 line-clamp-2">Premium organic cotton and silk fabrics supplier to top global fashion brands across Europe and USA.</p>
              <div className="flex items-center justify-between pt-6 border-t border-[#c4c5d5]/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#00658d]">location_on</span>
                  <span className="text-xs font-medium">Surat, India</span>
                </div>
                <span className="material-symbols-outlined text-[#00216e] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </div>
            {/* Company Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-transparent hover:border-[#00658d] transition-all group bento-card">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-[#f4f2fc] rounded-lg p-2 flex items-center justify-center">
                  <img className="w-full h-auto grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcCCwDMoNJZF93UD9GWXUVK7t-XuG-awcBXrYBNu3GGiPiPO2LYBva4OhU22gjIcaib13ZX2iMmQRR8KbtXSj9LjSMbdPtEDaFczKFWog6T0UUy5B4aInC9gHBuzA-iz13nu_syoqfvA2If71WUNiiKxlH-j5ub5uHAwdZ_VhhasF-V1ej5EBbfn_XFJLI8LgfHoR8mxwwlZgc21_8pL4YN6y-_23PNJPyHGLubMOtx873qFx0ltgQyCw4Whunpxh4JWGMIe31iPPL" alt="EcoPack Logo" />
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Verified Gold</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-2">EcoPack Global</h4>
              <p className="text-sm text-[#444653] mb-6 line-clamp-2">Innovative sustainable packaging solutions specializing in biodegradable industrial wraps and boxes.</p>
              <div className="flex items-center justify-between pt-6 border-t border-[#c4c5d5]/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#00658d]">location_on</span>
                  <span className="text-xs font-medium">Bengaluru, India</span>
                </div>
                <span className="material-symbols-outlined text-[#00216e] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#eeedf6] dark:bg-[#121318] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-[1440px] mx-auto">
          <div className="space-y-6">
            <div className="font-headline font-bold text-lg text-[#00216e]">ONLINE INDIA</div>
            <p className="text-slate-500 font-body text-xs tracking-wide leading-relaxed uppercase">
              Institutional B2B Commerce for the modern world. Precision, trust, and global connectivity.
            </p>
            <div className="flex gap-4 text-[#00216e]">
              <span className="material-symbols-outlined cursor-pointer">public</span>
              <span className="material-symbols-outlined cursor-pointer">business_center</span>
              <span className="material-symbols-outlined cursor-pointer">verified_user</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <a className="block text-slate-500 font-body text-xs tracking-wide uppercase hover:text-[#00658d]" href="#">Refund Policy</a>
              <a className="block text-slate-500 font-body text-xs tracking-wide uppercase hover:text-[#00658d]" href="#">Terms & Conditions</a>
              <a className="block text-slate-500 font-body text-xs tracking-wide uppercase hover:text-[#00658d]" href="#">Privacy Policy</a>
            </div>
            <div className="space-y-3">
              <a className="block text-slate-500 font-body text-xs tracking-wide uppercase hover:text-[#00658d]" href="#">Suppliers</a>
              <a className="block text-slate-500 font-body text-xs tracking-wide uppercase hover:text-[#00658d]" href="#">Logistics</a>
              <a className="block text-slate-500 font-body text-xs tracking-wide uppercase hover:text-[#00658d]" href="#">Sitemap</a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="font-headline font-bold text-xs text-[#00216e] mb-1">TOLL-FREE SUPPORT</p>
              <p className="text-xl font-bold text-[#00216e] mb-4">1800-ONLINE-IND</p>
              <p className="font-headline font-bold text-xs text-[#00216e] mb-1">CORPORATE ADDRESS</p>
              <p className="text-xs text-slate-500 leading-relaxed uppercase">
                Level 12, Tower B, <br/>
                Business Finance Hub, <br/>
                Mumbai, Maharashtra 400051
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-12 py-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 font-body text-[10px] tracking-widest uppercase">
            © 2024 Online India. Institutional B2B Commerce. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
