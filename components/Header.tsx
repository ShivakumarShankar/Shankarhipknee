import React, { useState } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Calendar, Award, 
  ChevronDown, ChevronRight, Activity, Bone, Stethoscope, Clock
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  PHONE, 
  MOBILE_PHONE,
  LANDLINE_PHONE,
  EMAIL, 
  SURGEON_ROLE,
  SECRETARY_NAME,
  SOCIAL_HANDLE,
  SOCIAL_LINKS
} from '../constants';
import { SurgeonPortrait } from './SurgeonPortrait';

interface HeaderProps {
  onBook: () => void;
  onNavigate: (href: string) => void;
  currentPage: 'home' | 'about' | 'reviews';
}

interface NavSubItem {
  name: string;
  description: string;
  href: string;
}

interface NavMenuItem {
  name: string;
  href: string;
  subItems?: NavSubItem[];
}

const MENU_PAGES: NavMenuItem[] = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'My Practice',
    href: 'about',
    subItems: [
      {
        name: 'About Mr Shivakumar Shankar',
        description: 'Biography, ethos, and extensive surgical background',
        href: 'about'
      },
      {
        name: 'Qualifications & Fellowships',
        description: 'UCL MSc, RNOH Stanmore & Golden Jubilee specialist training',
        href: 'about'
      },
      {
        name: 'NHS & Academic Roles',
        description: 'Consultant at Queen\'s Hospital Romford & clinical leadership',
        href: 'about'
      },
      {
        name: 'Practice Locations',
        description: 'Spire Hartswood & Nuffield Health Brentwood Hospitals',
        href: '#locations'
      }
    ]
  },
  {
    name: 'Services',
    href: '#treatments',
    subItems: [
      {
        name: 'Robotic Hip Replacement',
        description: 'Sub-millimetre precision implant positioning with 3D planning',
        href: '#treatments'
      },
      {
        name: 'Minimally Invasive Hip Surgery',
        description: 'Tissue-preserving approach for reduced pain and rapid discharge',
        href: '#treatments'
      },
      {
        name: 'Robotic Knee Replacement',
        description: 'Custom kinematics with balanced ligament tensioning',
        href: '#treatments'
      },
      {
        name: 'Partial Knee Replacement',
        description: 'Preserving natural knee ligaments with unicompartmental resurfacing',
        href: '#treatments'
      },
      {
        name: 'Knee Arthroscopy & Keyhole Surgery',
        description: 'Meniscal tears, cartilage preservation, and joint debridement',
        href: '#treatments'
      },
      {
        name: 'Joint Injections & Preservation',
        description: 'Hyaluronic acid viscosupplementation and targeted pain relief',
        href: '#treatments'
      }
    ]
  },
  {
    name: 'Robotic Surgery',
    href: '#robotic',
    subItems: [
      {
        name: 'Robotic Arthroplasty Overview',
        description: 'How robotic guidance transforms joint replacement precision',
        href: '#robotic'
      },
      {
        name: 'Computer-Assisted Navigation',
        description: 'Real-time dynamic optical feedback during surgery',
        href: '#robotic'
      },
      {
        name: 'Regional Pioneer Milestone',
        description: 'First surgeon in Essex & NE London for robotic total hip surgery',
        href: '#robotic'
      }
    ]
  },
  {
    name: 'Patient Info',
    href: '#patient-guides',
    subItems: [
      {
        name: 'Surgical Risks & Patient Guides (PDF)',
        description: 'Procedure risks, non-operative options, and downloadable guides',
        href: '#patient-guides'
      },
      {
        name: 'Enhanced Recovery Protocols',
        description: 'Day-case discharge pathways and rapid rehabilitation guidelines',
        href: '#protocols'
      },
      {
        name: 'Hip & Knee Conditions Treated',
        description: 'Osteoarthritis, dysplasia, avascular necrosis, and cartilage wear',
        href: '#conditions'
      },
      {
        name: 'Patient FAQs',
        description: 'Insurance, surgery preparation, recovery milestones, and safety',
        href: '#faq'
      },
      {
        name: 'Combined Reviews (Doctify & IWGC)',
        description: 'Verified ratings from Doctify and iWantGreatCare',
        href: 'reviews'
      },
      {
        name: 'Photos, Videos & Social Channels',
        description: 'Watch robotic surgery walkthroughs, photos & follow @ShankarHipKnee',
        href: '#media'
      }
    ]
  },
  {
    name: 'Media & Social',
    href: '#media',
    subItems: [
      {
        name: 'Photos & Clinical Gallery',
        description: 'Laminar surgical theatres, knee arthroscopy, and patient mobilisation',
        href: '#media'
      },
      {
        name: 'Robotic Surgery & YouTube Videos',
        description: 'Watch robotic hip & knee arthroplasty procedures and walkthroughs',
        href: '#media'
      },
      {
        name: 'Social Media Feeds (@ShankarHipKnee)',
        description: 'LinkedIn updates, X feed, Bupa profile, BBC News coverage, and YouTube',
        href: '#media'
      },
      {
        name: 'Upload Media or Add Link',
        description: 'Add clinical photos, patient videos or YouTube links to the hub',
        href: '#media'
      }
    ]
  },
  {
    name: 'Reviews',
    href: 'reviews',
    subItems: [
      {
        name: 'Combined Review Hub',
        description: 'Live Doctify & iWantGreatCare review widgets',
        href: 'reviews'
      },
      {
        name: 'Doctify Rating Carousel',
        description: 'Verified reviews and live patient carousel',
        href: 'reviews'
      },
      {
        name: 'iWantGreatCare Feedback',
        description: 'Official verified NHS and private patient ratings',
        href: 'reviews'
      },
      {
        name: 'Leave a Review',
        description: 'Submit your patient review on Doctify or iWantGreatCare',
        href: 'reviews'
      }
    ]
  },
  {
    name: 'Practice Locations',
    href: '#locations',
    subItems: [
      {
        name: 'Spire Hartswood Hospital',
        description: 'Eagle Way, Brentwood, Essex CM13 3LE',
        href: '#locations'
      },
      {
        name: 'Nuffield Health Brentwood Hospital',
        description: 'Shenfield Road, Brentwood, Essex CM15 8EH',
        href: '#locations'
      },
      {
        name: 'Queens Hospital Romford (NHS)',
        description: 'Barking, Havering & Redbridge University Hospitals NHS Trust',
        href: '#locations'
      }
    ]
  },
  {
    name: 'Appointments & Contact',
    href: '#contact',
    subItems: [
      {
        name: 'Book Private Consultation',
        description: 'Online direct booking request for Spire or Nuffield',
        href: 'book'
      },
      {
        name: 'Direct Contact & Secretary',
        description: 'Call 07587 765888 or email hip.knee_specialist@yahoo.com',
        href: '#contact'
      }
    ]
  }
];

const Header: React.FC<HeaderProps> = ({ onBook, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (href === 'book') {
      onBook();
    } else {
      onNavigate(href);
    }
    setIsMenuOpen(false);
  };

  const toggleMobileSub = (name: string) => {
    setMobileExpanded(prev => prev === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans shadow-md bg-white">
      {/* Main Header Container */}
      <div className="bg-white border-b border-slate-200/80 shadow-sm">
        
        {/* Top Header Row: Branding, Practice Details & Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center gap-4">
            
            {/* Brand Logo & Surgeon Identification */}
            <div 
              className="flex-shrink-0 flex items-center gap-3 sm:gap-4 cursor-pointer group" 
              onClick={(e) => handleNavClick('home', e)}
              title="London Essex Hip and Knee Surgeon - Restoring your active lifestyle"
            >
              {/* Full Logo on Tablet & Desktop */}
              <img 
                src="/logo.png" 
                alt="London Essex Hip and Knee Surgeon Logo" 
                className="hidden sm:block h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-102 flex-shrink-0"
              />
              {/* Compact Logo Mark on Mobile screens */}
              <img 
                src="/logo_icon.png" 
                alt="London Essex Hip and Knee Surgeon Logo" 
                className="sm:hidden h-11 w-11 object-contain flex-shrink-0 bg-white rounded-lg p-0.5 border border-slate-200 shadow-2xs"
              />
              
              <div className="flex flex-col justify-center border-l-2 border-slate-200 pl-2.5 sm:pl-3.5 py-0.5">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#1B4965] transition-colors">
                  {SURGEON_NAME}
                </span>
                <span id="header-surgeon-role" className="text-[11px] sm:text-xs md:text-sm font-bold text-[#1B4965] tracking-tight sm:tracking-normal leading-snug">
                  {SURGEON_ROLE}
                </span>
                <span className="text-[10px] text-slate-500 font-medium hidden lg:inline">
                  Spire Hartswood Hospital &bull; Nuffield Health Brentwood Hospital &bull; Queen's Hospital
                </span>
              </div>
            </div>

            {/* Header Right Information & CTA */}
            <div className="flex items-center gap-3 sm:gap-5">
              
              {/* 3 Contact Headings: Mobile, Landline, Email */}
              <div className="hidden lg:flex flex-col items-end text-right gap-0.5 text-xs">
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mobile:</span>
                  <a 
                    href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} 
                    className="font-bold text-slate-900 hover:text-[#1B4965] transition-colors"
                  >
                    07587 765888
                  </a>
                </div>
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Landline:</span>
                  <a 
                    href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} 
                    className="font-semibold text-slate-800 hover:text-[#1B4965] transition-colors"
                  >
                    020 3523 0621
                  </a>
                </div>
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email:</span>
                  <a 
                    href={`mailto:${EMAIL}`} 
                    className="font-medium text-[#1B4965] hover:text-[#E8A24C] hover:underline transition-colors text-[11px]"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Book Consultation Primary CTA Button (Warm Amber Accent) */}
              <button 
                onClick={onBook} 
                className="hidden sm:flex bg-[#E8A24C] hover:bg-[#D99136] text-white px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg items-center gap-2 transform hover:-translate-y-0.5 flex-shrink-0"
              >
                <Calendar size={15} />
                Book Consultation
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:bg-[#F8FAFC] rounded-lg transition-colors border border-slate-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Menu Bar with Individual Pages & Dropdowns (Deep Navy #1B4965) */}
        <div className="hidden lg:block bg-[#1B4965] border-t border-[#13364B] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between">
              
              {/* Individual Pages Navigation List */}
              <div className="flex items-center space-x-1">
                {MENU_PAGES.map((page) => {
                  const isActive = (page.href === 'about' && currentPage === 'about') || 
                                   (page.href === 'reviews' && currentPage === 'reviews') ||
                                   (page.href === 'home' && currentPage === 'home');
                  const hasSub = page.subItems && page.subItems.length > 0;
                  return (
                    <div 
                      key={page.name}
                      className="relative group py-2"
                    >
                      <a
                        href={page.href === 'book' ? '#' : page.href}
                        onClick={(e) => handleNavClick(page.href, e)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${
                          isActive 
                            ? 'bg-[#13364B] text-[#E8A24C] shadow-inner font-extrabold' 
                            : 'text-slate-100 hover:bg-[#13364B] hover:text-[#E8A24C]'
                        }`}
                      >
                        <span>{page.name}</span>
                        {hasSub && (
                          <ChevronDown size={12} className="text-slate-300 group-hover:text-[#E8A24C] group-hover:rotate-180 transition-transform duration-200" />
                        )}
                      </a>

                      {/* Dropdown Menu for Sub-Pages */}
                      {hasSub && (
                        <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-b-xl shadow-2xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform translate-y-1 group-hover:translate-y-0">
                          <div className="px-3.5 py-1.5 border-b border-slate-100 mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1B4965]">
                              {page.name} Pages
                            </span>
                          </div>
                          {page.subItems!.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href === 'book' ? '#' : sub.href}
                              onClick={(e) => handleNavClick(sub.href, e)}
                              className="block px-3.5 py-2 hover:bg-[#F8FAFC] transition-colors group/item"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#1B4965] flex items-center justify-between">
                                <span>{sub.name}</span>
                                <ChevronRight size={12} className="text-slate-400 group-hover/item:text-[#1B4965] group-hover/item:translate-x-0.5 transition-all" />
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                                {sub.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Fast-Track Appointment Booking Badge on Right of Menu */}
              <div className="flex items-center gap-2 py-1">
                <button
                  onClick={onBook}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-900 hover:text-white bg-[#E8A24C] hover:bg-[#D99136] rounded-md transition-colors shadow-xs"
                >
                  <Calendar size={13} />
                  <span>Online Appointment</span>
                </button>
              </div>

            </nav>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Accordion Sub-pages */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200 flex items-center gap-3 mb-3">
                <img 
                  src="/logo.png" 
                  alt="London Essex Hip and Knee Surgeon" 
                  className="h-12 w-auto object-contain" 
                  loading="lazy"
                />
                <div>
                  <p className="font-extrabold text-xs text-slate-900 leading-tight">{SURGEON_NAME}</p>
                  <p className="text-[11px] text-[#1B4965] font-bold">{SURGEON_ROLE}</p>
                  <p className="font-script text-xs text-[#E8A24C] font-bold">Restoring your active lifestyle</p>
                </div>
              </div>

              {/* Mobile Pages Navigation with Accordion Sub-pages */}
              <div className="space-y-1">
                {MENU_PAGES.map((page) => {
                  const hasSub = page.subItems && page.subItems.length > 0;
                  const isExpanded = mobileExpanded === page.name;
                  return (
                    <div key={page.name} className="border-b border-slate-100 last:border-b-0 pb-1">
                      <div className="flex items-center justify-between">
                        <a
                          href={page.href === 'book' ? '#' : page.href}
                          onClick={(e) => handleNavClick(page.href, e)}
                          className="flex-1 py-2 text-sm font-bold text-slate-800 hover:text-[#1B4965]"
                        >
                          {page.name}
                        </a>
                        {hasSub && (
                          <button
                            onClick={() => toggleMobileSub(page.name)}
                            className="p-2 text-slate-400 hover:text-[#1B4965]"
                            aria-label={`Toggle ${page.name} sub-pages`}
                          >
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform ${isExpanded ? 'rotate-180 text-[#1B4965]' : ''}`} 
                            />
                          </button>
                        )}
                      </div>

                      {hasSub && isExpanded && (
                        <div className="pl-3 pr-1 py-1 space-y-1.5 bg-[#F8FAFC] rounded-lg mb-2">
                          {page.subItems!.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href === 'book' ? '#' : sub.href}
                              onClick={(e) => handleNavClick(sub.href, e)}
                              className="block py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-[#1B4965] hover:bg-white rounded transition-colors"
                            >
                              <div className="font-bold text-slate-800">{sub.name}</div>
                              <div className="text-[11px] text-slate-500">{sub.description}</div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Contact & Booking Actions */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <button 
                  onClick={() => {
                    onBook();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#E8A24C] hover:bg-[#D99136] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow"
                >
                  <Calendar size={16} />
                  Book Private Consultation
                </button>
                <div className="space-y-1.5 bg-[#F8FAFC] rounded-lg p-2.5 border border-slate-100 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-500 text-[11px] uppercase">Mobile:</span>
                    <a href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} className="font-bold text-[#1B4965]">07587 765888</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-500 text-[11px] uppercase">Landline:</span>
                    <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="font-semibold text-slate-800">020 3523 0621</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-500 text-[11px] uppercase">Email:</span>
                    <a href={`mailto:${EMAIL}`} className="font-medium text-[#1B4965] truncate max-w-[210px]">{EMAIL}</a>
                  </div>
                </div>

                {/* Social Channels in Mobile Menu */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Official Socials ({SOCIAL_HANDLE})
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold hover:bg-pink-100"
                    >
                      Instagram
                    </a>
                    <a
                      href={SOCIAL_LINKS.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-black"
                    >
                      TikTok
                    </a>
                    <a
                      href={SOCIAL_LINKS.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold hover:bg-slate-200"
                    >
                      X (Twitter)
                    </a>
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 text-xs font-bold hover:bg-red-100"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
