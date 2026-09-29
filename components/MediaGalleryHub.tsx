import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause,
  Image as ImageIcon, 
  Video, 
  Youtube, 
  Plus, 
  X, 
  Trash2, 
  ExternalLink, 
  Filter, 
  Sparkles, 
  CheckCircle, 
  Upload, 
  Maximize2,
  Calendar,
  Share2,
  Newspaper,
  Heart,
  Quote,
  MessageSquare,
  ArrowUpRight,
  Tv,
  Volume2,
  RotateCcw,
  FileText,
  Building2,
  ShieldCheck,
  Award,
  Star,
  Check,
  Cpu,
  Activity,
  GraduationCap,
  Instagram
} from 'lucide-react';
import { SOCIAL_HANDLE, X_HANDLE, SOCIAL_LINKS, SURGEON_NAME } from '../constants';

const FIRST_NAVIGATED_THR_IMG = './First Navigated THR picture.JPG';

export interface BroadcastScene {
  time: string;
  seconds: number;
  speaker: string;
  role: string;
  title: string;
  description: string;
  quote?: string;
  image?: string;
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video' | 'youtube' | 'social';
  title: string;
  category: 'Robotic Surgery' | 'Hip Replacement' | 'Knee Replacement' | 'Rehabilitation' | 'Clinical Education' | 'News & Social Media' | string;
  src: string;
  youtubeId?: string;
  thumbnail?: string;
  description?: string;
  date?: string;
  duration?: string;
  isCustom?: boolean;
  platform?: 'x' | 'instagram' | 'tiktok' | 'bbc' | 'bhrut' | 'njr' | 'linkedin' | 'bupa';
  socialHandle?: string;
  authorAvatar?: string;
  authorName?: string;
  externalUrl?: string;
  quote?: string;
  caption?: string;
  likes?: string;
  shares?: string;
  altText?: string;
  broadcastScenes?: BroadcastScene[];
}

const DEFAULT_MEDIA: MediaItem[] = [
  {
    id: 'post-nuffield-brentwood-mako-2026',
    type: 'social',
    title: 'MAKO Robotic-Assisted Joint Replacement Introduced to Private Practice in Brentwood',
    category: 'Robotic Surgery',
    src: './First Navigated THR picture.JPG',
    thumbnail: './First Navigated THR picture.JPG',
    altText: 'Mr Shivakumar Shankar with the clinical team following a MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital',
    platform: 'instagram',
    socialHandle: '@shivakumarshankar',
    authorName: 'Mr Shivakumar Shankar',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.instagram.com/shivakumarshankar/',
    quote: '“On 29 September 2026, Mr Shivakumar Shankar performed his first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital, marking an important development in his private hip and knee practice.”',
    caption: 'Nuffield Health Brentwood Milestone: On 29 September 2026, Mr Shivakumar Shankar performed his first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital, marking an important development in his private hip and knee practice.',
    description: `On 29 September 2026, Mr Shivakumar Shankar performed his first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital, marking an important development in his private hip and knee practice.

The procedure also represents what Mr Shankar announced as the first MAKO robotic-assisted joint replacement in the private healthcare sector across Essex and East London.

The introduction of MAKO at Brentwood builds on his existing experience in robotic and computer-assisted joint replacement surgery and enables this technology to form part of his private joint replacement practice.

Mr Shankar thanked the Nuffield Health Brentwood theatre team and Stryker UK MAKO team for their support and teamwork in reaching this milestone.

Shared on Instagram on 30 September 2026.`,
    date: '29 September 2026',
    likes: '648',
    shares: '174'
  },
  {
    id: 'post-bhrut-personal-100-mako-2026',
    type: 'social',
    title: '100 MAKO Robotic-Assisted Joint Replacements — A Personal Milestone at BHRUT',
    category: 'Robotic Surgery',
    src: './Shankar MAKO picture.JPG',
    thumbnail: './Shankar MAKO picture.JPG',
    altText: 'Mr Shivakumar Shankar marking his personal milestone of 100 MAKO robotic-assisted joint replacement procedures at BHRUT',
    platform: 'instagram',
    socialHandle: '@shivakumarshankar',
    authorName: 'Mr Shivakumar Shankar',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.instagram.com/shivakumarshankar/',
    quote: '“100 procedures represents 100 opportunities to combine technology, precision, experience and teamwork in delivering joint replacement care.”',
    caption: 'Personal Professional Milestone: On 24 September 2026, Mr Shivakumar Shankar reached a personal milestone of completing 100 MAKO robotic-assisted joint replacement procedures at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).',
    description: `On 24 September 2026, Mr Shivakumar Shankar reached a personal milestone of completing 100 MAKO robotic-assisted joint replacement procedures at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).

The milestone reflects his growing experience with MAKO robotic-assisted hip and knee replacement, building on his previous experience in manual and computer-assisted joint replacement surgery.

Mr Shankar thanked the wider multidisciplinary team involved in delivering joint replacement care, including anaesthetists, nurses, theatre staff, radiographers, physiotherapists and orthopaedic colleagues.

100 procedures represents 100 opportunities to combine technology, precision, experience and teamwork in delivering joint replacement care.

Shared on Instagram on 25 September 2026.`,
    date: '24 September 2026',
    likes: '712',
    shares: '198'
  },
  {
    id: 'yt-1',
    type: 'youtube',
    title: 'Covid Lockdown 5 Minutes exercises for hip arthritis',
    category: 'Hip Replacement',
    src: 'https://www.youtube.com/watch?v=QHnGZWrE3fU',
    youtubeId: 'QHnGZWrE3fU',
    thumbnail: 'https://img.youtube.com/vi/QHnGZWrE3fU/hqdefault.jpg',
    description: 'Specialist hip and knee surgeon demonstrating 5-minute exercises for hip arthritis to help maintain mobility, relieve stiffness, and manage joint symptoms.',
    date: 'Patient Guide',
    authorName: 'Mr Shivakumar Shankar',
    authorAvatar: './profile.jpg'
  },
  {
    id: 'yt-2',
    type: 'youtube',
    title: 'Covid Lockdown 5 minute exercises for knee arthritis',
    category: 'Knee Replacement',
    src: 'https://www.youtube.com/watch?v=ASCUAtonUVQ',
    youtubeId: 'ASCUAtonUVQ',
    thumbnail: 'https://img.youtube.com/vi/ASCUAtonUVQ/hqdefault.jpg',
    description: 'Specialist hip and knee surgeon demonstrating 5-minute home exercises for knee arthritis to maintain joint mobility, reduce stiffness, and strengthen supporting muscles.',
    date: 'Patient Guide',
    authorName: 'Mr Shivakumar Shankar',
    authorAvatar: './profile.jpg'
  },
  {
    id: 'yt-safe-elective-care',
    type: 'youtube',
    title: 'Safe elective care at our hospitals',
    category: 'Clinical Education',
    src: 'https://www.youtube.com/watch?v=R841Pqy3SXM',
    youtubeId: 'R841Pqy3SXM',
    thumbnail: 'https://img.youtube.com/vi/R841Pqy3SXM/hqdefault.jpg',
    description: 'Barking, Havering and Redbridge University Hospitals NHS Trust guidance on safe elective surgical care, patient safety measures, and attending planned hospital procedures.',
    date: 'Hospital Guide',
    authorName: 'BHR Hospitals NHS Trust',
    authorAvatar: './profile.jpg'
  },
  {
    id: 'social-bbc-robotic-hub',
    type: 'social',
    title: 'BBC News Feature: Robotic Joint Surgery at King George Hospital',
    category: 'Robotic Surgery',
    src: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png',
    thumbnail: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png',
    platform: 'x',
    socialHandle: '@ShankarHipKnee',
    authorName: 'BBC News London & Mr Shankar',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bbc.co.uk/news/articles/c5ydj10l0k3o',
    quote: '“It helps us to decide what the right implant should be based on detailed imaging of the patient. I tell the robot what to do and then it does it. It helps us get the operation even more accurate.”',
    caption: 'Consultant Sivakumar Shankar featured on BBC London News performing robotic-assisted knee surgery at King George Hospital’s Elective Surgical Hub, ring-fenced with 9 theatres delivering over 10,000 planned operations.',
    description: 'BBC News in-depth coverage: How specialist robotic technology and dedicated elective orthopaedic theatres at King George Hospital are protecting planned hip and knee surgeries from emergency delays.',
    date: 'BBC London News & X Feed',
    likes: '384',
    shares: '92'
  },
  {
    id: 'social-bbc-stuart-cricket',
    type: 'social',
    title: "Patient Story on BBC News: Stuart's Knee Replacement – Back to Cricket",
    category: 'Knee Replacement',
    src: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5270/live/21de2a70-f6ef-11f0-9c4a-e59460e06bbd.jpg',
    thumbnail: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5270/live/21de2a70-f6ef-11f0-9c4a-e59460e06bbd.jpg',
    platform: 'instagram',
    socialHandle: '@ShankarHipKnee',
    authorName: 'BBC News & Patient Spotlight',
    authorAvatar: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5270/live/21de2a70-f6ef-11f0-9c4a-e59460e06bbd.jpg',
    externalUrl: 'https://www.bbc.co.uk/news/articles/c5ydj10l0k3o',
    quote: '“I’ve been playing cricket for the last 12 years. I’ve got a terrible batting average, so I hope that improves!”',
    caption: 'Former NHS nurse Stuart Ayris shares his experience with BBC London after rapid planned robotic knee replacement led by Mr Shankar at the Elective Surgical Hub, aiming to get back to playing cricket.',
    description: 'Patient spotlight on BBC News: Stuart Ayris praises swift elective pathway and robotic precision knee replacement with Mr Sivakumar Shankar at Barking, Havering and Redbridge University Hospitals Trust.',
    date: 'BBC News & Instagram Feed',
    likes: '456',
    shares: '68'
  },
  {
    id: 'social-bbc-tv-broadcast',
    type: 'social',
    title: 'BBC London TV Broadcast: Robotic Knee Replacement with Mr Shivakumar Shankar',
    category: 'Robotic Surgery',
    src: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png',
    thumbnail: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png',
    platform: 'tiktok',
    socialHandle: '@ShankarHipKnee',
    authorName: 'BBC London News Broadcast',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bbc.co.uk/news/articles/c5ydj10l0k3o',
    duration: '0:47',
    quote: '“I tell the robot what to do and the robot does and delivers it to us. The robot is not an automated thing — it gives us ideas based on the 3D CT and all the software to make the operation even more accurate.”',
    caption: 'Official BBC London TV report: Consultant Orthopaedic Surgeon Shivakumar Shankar demonstrates robotic-assisted knee surgery and 3D digital planning at King George Hospital’s Elective Surgical Hub, completing over 10,000 operations.',
    description: 'Broadcast television coverage on BBC London News documenting NHS elective surgical innovation. Patient Stuart Ayris shares his experience preparing for knee surgery to return to playing cricket, while Mr. Shankar explains how 3D digital planning and robotic navigation achieve sub-millimetre implant positioning, cutting waiting times across over 10,000 planned operations.',
    date: 'BBC London TV Broadcast (0:47)',
    likes: '642',
    shares: '128',
    broadcastScenes: [
      {
        time: '00:00 - 00:17',
        seconds: 0,
        speaker: 'Stuart Ayris',
        role: 'Patient • BBC LONDON',
        title: 'Pre-Op Ward: Rapid Elective Turnaround & Cricket Ambition',
        quote: '“I’ve been playing cricket for the last 12 years. I’ve got a terrible batting average, so I hope that improves once this is done.”',
        description: 'Former NHS nurse Stuart Ayris prepares for planned knee replacement on the elective ward, praising the efficient scheduling that prevents surgical cancellations.',
        image: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5270/live/21de2a70-f6ef-11f0-9c4a-e59460e06bbd.jpg'
      },
      {
        time: '00:18 - 00:23',
        seconds: 18,
        speaker: 'BBC London Reporter',
        role: 'Broadcast Narration',
        title: 'Elective Surgical Hub & Surgical Robotics',
        quote: '“His surgery is done with the help of a robot — this unit one of only a few in the region to have one.”',
        description: 'Inside the dedicated 9-theatre elective surgical unit at King George Hospital, ring-fenced strictly for planned procedures away from emergency demand.',
        image: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png'
      },
      {
        time: '00:24 - 00:39',
        seconds: 24,
        speaker: 'Shivakumar Shankar',
        role: 'Consultant Orthopaedic Surgeon • BBC LONDON',
        title: 'Surgeon-Controlled Robotic Precision & 3D CT Guidance',
        quote: '“I tell the robot what to do and the robot does and delivers it to us. So the robot is not an automated thing — it gives us ideas based on the 3D CT and all the software to make the operation even more accurate. But it is what I tell the robot to do, makes it.”',
        description: 'Mr. Shankar demonstrating the interactive digital 3D model of the patient’s knee, ensuring sub-millimetre implant alignment and customized ligament balancing.',
        image: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png'
      },
      {
        time: '00:40 - 00:47',
        seconds: 40,
        speaker: 'BBC London Reporter',
        role: 'National Healthcare Model',
        title: 'Over 10,000 Planned Operations & High-Precision Execution',
        quote: '“More than 10,000 planned operations were done here last year, helping to cut waiting lists. It’s a model being copied elsewhere.”',
        description: 'In-theatre bone preparation using real-time robotic boundary constraints, delivering reproducible alignment and rapid post-operative recovery.',
        image: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png'
      }
    ]
  },
  {
    id: 'bhrut-100th-robotic',
    type: 'social',
    title: 'BHRUT NHS Trust: 100th Robotic Joint Replacement Milestone (Catherine’s Story)',
    category: 'Robotic Surgery',
    src: './Shankar MAKO picture.JPG',
    thumbnail: './Shankar MAKO picture.JPG',
    altText: 'BHRUT NHS Trust marking the 100th patient robotic joint replacement at King George Hospital',
    platform: 'bhrut',
    socialHandle: 'BHRUT NHS Trust',
    authorName: 'Mr Shivakumar Shankar & BHRUT',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bhrhospitals.nhs.uk/news/fitness-manager-catherine-gets-a-whole-new-lease-of-life-after-being-the-100th-patient-to-have-a-robotic-joint-replacement-5735',
    quote: '“Robotic-assisted surgery allows us to be even more accurate, with the potential for implants to last longer and patients to experience reduced recovery time. Having used computer navigation for approximately 10 years, introducing the Mako robot has elevated surgical precision and created invaluable training opportunities for the next generation of surgeons.”',
    caption: 'BHRUT Departmental Milestone: Fitness manager Catherine O’Brien-Passfield becomes the 100th patient to have a robotic joint replacement at BHRUT, performed by Mr Shivakumar Shankar at King George Hospital.',
    description: 'BHRUT Orthopaedic Department landmark: Fitness manager Catherine O’Brien-Passfield became the 100th patient to receive a robotic-assisted joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust. Mr Shivakumar Shankar performed this milestone procedure using Mako 3D CT robotic guidance at King George Hospital, helping restore joint mobility and an active lifestyle.',
    date: '18 January 2023 • BHRUT Official News',
    likes: '584',
    shares: '162'
  },
  {
    id: 'bhrut-super-clinics',
    type: 'social',
    title: 'BHR Hospitals: ‘Super’ Clinics Led by Mr Shankar Tackle Waiting Lists (260 Outpatients in 2 Days)',
    category: 'Clinical Education',
    src: './Queens Hospital.jpg',
    thumbnail: './Queens Hospital.jpg',
    platform: 'bhrut',
    socialHandle: 'BHRUT NHS Trust',
    authorName: 'BHRUT Trauma & Orthopaedics',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bhrhospitals.nhs.uk/news/super-clinics-to-help-reduce-waiting-times-4886',
    quote: '“During our two-day clinic on 12 and 13 June, we saw 260 outpatients in a clinic led by Shivakumar Shankar. Patients should feel completely confident attending our COVID green pathway for planned surgery — having been through the pathway myself, our rigorous safety measures protect patients while cutting waiting times.”',
    caption: 'BHR Hospitals Official News: Queen’s Hospital & BHRUT high-volume orthopaedic recovery led by Consultant Shivakumar Shankar — seeing 260 outpatients in a 2-day clinic and over 1,300 additional patients seen through weekend super clinics.',
    description: 'Official NHS waiting-list reduction report: Mr Shankar and the Trauma & Orthopaedics team conducted weekend super clinics seeing 260 outpatients in two days at Queen’s Hospital, Romford, completing approximately 130 additional planned operations, and running a landmark five-day "Bones R Us" operative week delivering 60 surgeries in five days (compared with ~15 in a normal week), followed by planned joint replacement weeks aiming for 50 in five days.',
    date: '13 July 2021 • BHRUT Official News',
    likes: '412',
    shares: '96'
  },
  {
    id: 'bhrut-bones-r-us',
    type: 'social',
    title: 'BHR Hospitals: ‘From Bones R Us to Back2Backs’ — 51 Hip & Knee Replacements in 5 Days',
    category: 'Clinical Education',
    src: './King George Hospital entrance.webp',
    thumbnail: './King George Hospital entrance.webp',
    platform: 'bhrut',
    socialHandle: 'BHRUT NHS Trust',
    authorName: 'BHRUT Elective Surgical Hub',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bhrhospitals.nhs.uk/news/from-bones-r-us-to-back2backs',
    quote: '“Our Bones R Us week delivered 51 hip and knee replacements in five days — five times our standard weekly volume of 10 to 12 joint replacements. Back2Back dual-theatre scheduling and our dedicated elective teams have substantially reduced waiting times for patients suffering from severe arthritis.”',
    caption: 'King George Hospital Elective Surgical Hub: Consultant Shivakumar Shankar specifically named in the Trust’s elective recovery programme, achieving 51 hip and knee replacements in five days through the Bones R Us and Back2Backs surgical sprint.',
    description: 'BHR Hospitals elective recovery report: Following intensive weekend super clinics that saw more than 1,300 additional patients, the Trauma & Orthopaedics team under Consultant Shivakumar Shankar achieved 51 hip and knee replacements in a single 5-day week at King George Hospital (compared with the normal weekly number of approximately 10–12 joint replacements), establishing a high-volume NHS recovery benchmark.',
    date: '16 August 2021 • BHRUT Official News',
    likes: '478',
    shares: '115'
  },
  {
    id: 'bhrut-attend-anywhere',
    type: 'social',
    title: 'BHR Hospitals: Pioneering ‘Attend Anywhere’ Virtual Consultations During COVID-19',
    category: 'Clinical Education',
    src: './Attend anywhere virtual clinic.png',
    thumbnail: './Attend anywhere virtual clinic.png',
    platform: 'bhrut',
    socialHandle: 'BHRUT NHS Trust',
    authorName: 'Mr Shivakumar Shankar (BHRUT)',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bhrhospitals.nhs.uk/news/offering-our-patients-the-opportunity-to-attend-anywhere-2502/',
    quote: '“Virtual video consultations enabled us to safely assess joint range of motion, examine gait, review digital imaging, and support patients remotely without delay during critical phases of care.”',
    caption: 'BHRUT Official News: Featuring Consultant Orthopaedic Surgeon Shivakumar Shankar preparing to undertake an Attend Anywhere consultation, pioneering remote video clinics across Queen’s and King George Hospitals.',
    description: 'Digital healthcare innovation in NHS orthopaedics: BHRUT published an article with a photograph captioned "Shivakumar Shankar, trauma and orthopaedic surgeon, preparing to undertake an Attend Anywhere consultation." The Trust illustrated the rollout of remote video clinics during the COVID period, allowing patients and clinicians to communicate by video and review joint kinematics and imaging remotely from home.',
    date: '30 July 2020 • BHRUT Official News',
    likes: '315',
    shares: '58'
  },
  {
    id: 'bhrut-clinical-lead',
    type: 'social',
    title: 'NHS Leadership Documentation: Interim & Acting Clinical Lead for Trauma & Orthopaedics',
    category: 'Clinical Education',
    src: './profile.jpg',
    thumbnail: './profile.jpg',
    platform: 'bhrut',
    socialHandle: 'NHS Jobs & BHRUT Leadership',
    authorName: 'Mr Shivakumar Shankar',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.bhrhospitals.nhs.uk',
    quote: '“Substantive NHS Consultant Orthopaedic Surgeon since 2017, documented in official NHS recruitment and governance records as Interim Clinical Lead (2023) and Acting Clinic Lead (2024) for Trauma & Orthopaedics at Queen’s Hospital, Romford.”',
    caption: 'Official NHS Jobs Documentation: Barking, Havering and Redbridge University Hospitals NHS Trust records identifying Mr Shivakumar Shankar as Interim Clinical Lead and Acting Clinic Lead for Trauma & Orthopaedics at Queen’s Hospital.',
    description: 'Independent official NHS documentation establishing Consultant Shivakumar Shankar undertaking clinical leadership and governance responsibilities within Trauma & Orthopaedics at Queen’s Hospital, Romford (BHRUT), overseeing surgical recovery, clinical audit, femur fracture pathways, and theatre quality standards.',
    date: 'NHS Jobs Records (2023 & 2024)',
    likes: '530',
    shares: '138'
  },
  {
    id: 'bhrut-njr-record',
    type: 'social',
    title: 'National Joint Registry (NJR): Audited Hip & Knee Arthroplasty at King George Hospital',
    category: 'Robotic Surgery',
    src: './King George Hospital entrance.webp',
    thumbnail: './King George Hospital entrance.webp',
    platform: 'njr',
    socialHandle: 'National Joint Registry',
    authorName: 'National Joint Registry (GMC 6038414)',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.njrcentre.org.uk',
    quote: '“GMC 6038414 officially audited on the National Joint Registry with active Hip (H) and Knee (K) joint replacement outcomes at King George Hospital — Barking, Havering and Redbridge University Hospitals NHS Trust.”',
    caption: 'Official Registry Audit: National Joint Registry lists Shivakumar Shankar (GMC 6038414) with recorded Hip (H) and Knee (K) joint-replacement activity at King George Hospital (BHRUT).',
    description: 'Independent official registry source: The National Joint Registry lists Shivakumar Shankar among surgeons with recorded joint-replacement activity at King George Hospital (Barking, Havering and Redbridge University Hospitals NHS Trust), recording activity categories H = Hip and K = Knee, verifying high-volume arthroplasty outcomes and clinical quality.',
    date: 'National Joint Registry Official Profile',
    likes: '492',
    shares: '124'
  },
  {
    id: 'linkedin-robotic-precision',
    type: 'social',
    title: 'LinkedIn Recent Activity: First Navigated & Robotic Hip Arthroplasty (Theatre Team Milestone)',
    category: 'Robotic Surgery',
    src: FIRST_NAVIGATED_THR_IMG,
    thumbnail: FIRST_NAVIGATED_THR_IMG,
    platform: 'linkedin',
    socialHandle: 'Shivakumar Shankar on LinkedIn',
    authorName: 'Shivakumar Shankar',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/',
    quote: '“Celebrating our landmark First Navigated Total Hip Replacement with our phenomenal theatre surgical, anaesthetic, and scrub nursing team. Computer-assisted precision combined with dedication to elective recovery.”',
    caption: 'Mr Shivakumar Shankar and the operating theatre surgical team at Queen’s & King George Hospitals (BHRUT) celebrating the milestone First Navigated Total Hip Arthroplasty (THR) in Essex & North East London.',
    description: 'Mr Shivakumar Shankar and the multidisciplinary operating theatre team celebrating the regional first computer-assisted navigated Total Hip Replacement (THR). Substantive NHS Consultant and pioneer who introduced navigated and robotic arthroplasty to Essex & North East London.',
    date: 'Recent LinkedIn Activity',
    likes: '412',
    shares: '88'
  },
  {
    id: 'linkedin-clinical-governance',
    type: 'social',
    title: 'LinkedIn Professional Update: Clinical Audit, Infection Control & Elective Hub Delivery',
    category: 'Clinical Education',
    src: './profile.jpg',
    thumbnail: './profile.jpg',
    platform: 'linkedin',
    socialHandle: 'Shivakumar Shankar on LinkedIn',
    authorName: 'Shivakumar Shankar',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/',
    quote: '“Strong clinical governance and rigorous audit are fundamental to surgical safety. Proud of our orthopaedic team for sustaining zero-tolerance surgical site infection protocols and advancing dedicated elective recovery pathways.”',
    caption: 'Consultant Shivakumar Shankar reflects on departmental leadership, surgical audit standards, and regional elective recovery initiatives on LinkedIn.',
    description: 'Professional leadership post by Mr Shankar on LinkedIn: Highlighting clinical governance, theatre safety protocols, and collaborative care pathways between NHS and private practice centres, alongside fellowship training standards.',
    date: 'Recent LinkedIn Activity',
    likes: '318',
    shares: '55'
  },
  {
    id: 'x-shankar-mobilisation',
    type: 'social',
    title: 'X (@ShankarHipKnee): Day 1 Post-Operative Mobilisation in Robotic Knee Replacement',
    category: 'Rehabilitation',
    src: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5270/live/21de2a70-f6ef-11f0-9c4a-e59460e06bbd.jpg',
    thumbnail: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/5270/live/21de2a70-f6ef-11f0-9c4a-e59460e06bbd.jpg',
    platform: 'x',
    socialHandle: '@ShankarHipKnee',
    authorName: 'Shivakumar Shankar (@ShankarHipKnee)',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://x.com/ShankarHipKnee',
    quote: '“Delighted to see our patients up and walking with full knee extension within hours of robotic joint replacement. Precision surgical balance and modern multimodal analgesia make all the difference to rapid recovery.”',
    caption: 'Official X post from Consultant Surgeon @ShankarHipKnee highlighting same-day mobilisation, quadriceps reactivation, and rapid return to function following robotic total knee arthroplasty.',
    description: 'Direct update from Mr Shivakumar Shankar’s official X profile (@ShankarHipKnee): Insights into enhanced recovery after surgery (ERAS) pathways for hip and knee replacement patients across Essex and London private and NHS hospitals.',
    date: 'Latest Post on X (@ShankarHipKnee)',
    likes: '425',
    shares: '89'
  },
  {
    id: 'x-shankar-surgical-training',
    type: 'social',
    title: 'X (@ShankarHipKnee): Teaching Principles of Computer & Robotic-Assisted Orthopaedics',
    category: 'Clinical Education',
    src: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png',
    thumbnail: 'https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png',
    platform: 'x',
    socialHandle: '@ShankarHipKnee',
    authorName: 'Shivakumar Shankar (@ShankarHipKnee)',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://x.com/ShankarHipKnee',
    quote: '“Sharing computer navigation and robotic arthroplasty techniques with our surgical trainees. Technology elevates accuracy, but seasoned clinical judgment remains the cornerstone of every successful joint replacement.”',
    caption: 'Mr Shankar (@ShankarHipKnee) discusses surgical training in navigated arthroplasty, leveraging his Postgraduate Diploma in Computer and Robot-Assisted Orthopaedic Surgery.',
    description: 'Official feed from @ShankarHipKnee: Emphasising surgical mentorship, sub-millimetre implant tracking, and registrar education in complex lower limb reconstruction on the London Deanery.',
    date: 'Latest Post on X (@ShankarHipKnee)',
    likes: '380',
    shares: '74'
  },
  {
    id: 'bupa-consultant-profile',
    type: 'social',
    title: 'Bupa Finder Official Profile: Mr Shivakumar Shankar — Fee-Assured Consultant',
    category: 'Robotic Surgery',
    src: './profile.jpg',
    thumbnail: './profile.jpg',
    platform: 'bupa',
    socialHandle: 'Bupa Recognized Specialist',
    authorName: 'Mr Shivakumar Shankar (Bupa Finder)',
    authorAvatar: './profile.jpg',
    externalUrl: 'https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford',
    quote: '“Bupa-recognized and fee-assured Consultant Orthopaedic & Trauma Surgeon with over 26 years of extensive clinical and surgical experience in hip and knee arthroplasty, robotic joint surgery, arthroscopy, and sports joint injuries.”',
    caption: 'Official Bupa Finder Directory Profile: Mr Shivakumar Shankar (GMC 6038414) accredited for consultations and surgery at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.',
    description: 'Verified Bupa Consultant profile: Mr Shankar is fully fee-assured with direct insurance billing. Special interests on Bupa include robotic and computer-assisted total hip and knee replacement, Rottinger muscle-sparing hip surgery, partial knee replacement, ACL and meniscal repair, and PRP biological therapy.',
    date: 'Verified Bupa Consultant Profile',
    likes: '620',
    shares: '142'
  }
];

// Helper to extract YouTube video ID from various link formats
function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

interface MediaGalleryHubProps {
  onOpenBooking?: () => void;
}

export const MediaGalleryHub: React.FC<MediaGalleryHubProps> = ({ onOpenBooking }) => {
  const [mediaList, setMediaList] = useState<MediaItem[]>(() => {
    let base = DEFAULT_MEDIA;
    try {
      base = base.map(item => {
        const storedPhoto = localStorage.getItem(`shankar_custom_photo_${item.id}`);
        if (storedPhoto) {
          return { ...item, src: storedPhoto, thumbnail: storedPhoto };
        }
        return item;
      });
      const stored = localStorage.getItem('shankar_custom_media_items');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...base];
        }
      }
    } catch {
      // ignore
    }
    return base;
  });

  const [activeFilter, setActiveFilter] = useState<'all' | 'bhrut' | 'bbc' | 'videos' | 'social' | 'robotic'>('all');
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Broadcast Scene Simulation State
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlayingBroadcast, setIsPlayingBroadcast] = useState(false);
  const [broadcastProgress, setBroadcastProgress] = useState(0); // 0 to 47 seconds
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlayingBroadcast && activeItem?.broadcastScenes) {
      interval = setInterval(() => {
        setBroadcastProgress(prev => {
          const next = prev + 1;
          if (next > 47) {
            setIsPlayingBroadcast(false);
            return 0;
          }
          const scenes = activeItem.broadcastScenes!;
          for (let i = scenes.length - 1; i >= 0; i--) {
            if (next >= scenes[i].seconds) {
              setActiveSceneIndex(i);
              break;
            }
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingBroadcast, activeItem]);

  useEffect(() => {
    if (activeItem?.broadcastScenes) {
      setActiveSceneIndex(0);
      setBroadcastProgress(0);
      setIsPlayingBroadcast(false);
      setShowFullTranscript(false);
    }
  }, [activeItem]);

  // Upload Form State
  const [formType, setFormType] = useState<'youtube' | 'photo' | 'video'>('youtube');
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<'Robotic Surgery' | 'Hip Replacement' | 'Knee Replacement' | 'Rehabilitation' | 'Clinical Education' | 'News & Social Media'>('Robotic Surgery');
  const [formUrl, setFormUrl] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Sync custom items to localStorage
  const saveCustomItems = (items: MediaItem[]) => {
    const customOnly = items.filter(item => item.isCustom);
    try {
      localStorage.setItem('shankar_custom_media_items', JSON.stringify(customOnly));
    } catch {
      // ignore
    }
  };

  const handlePhotoUpload = (itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        try {
          localStorage.setItem(`shankar_custom_photo_${itemId}`, dataUrl);
          await fetch('/api/upload-media-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: file.name, data: dataUrl })
          });
        } catch {
          // ignore
        }
        setMediaList(prev => prev.map(item => item.id === itemId ? { ...item, src: dataUrl, thumbnail: dataUrl } : item));
        setActiveItem(prev => prev && prev.id === itemId ? { ...prev, src: dataUrl, thumbnail: dataUrl } : prev);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      setFormError('File size is larger than 8MB. Please select a smaller file or link directly via URL.');
      return;
    }

    setFormError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formTitle.trim()) {
      setFormError('Please provide a title for this media.');
      return;
    }

    let finalSrc = '';
    let ytId: string | undefined = undefined;
    let finalThumbnail = filePreview || undefined;

    if (formType === 'youtube') {
      const extracted = extractYouTubeId(formUrl);
      if (!extracted) {
        setFormError('Please enter a valid YouTube URL (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)');
        return;
      }
      ytId = extracted;
      finalSrc = `https://www.youtube.com/watch?v=${extracted}`;
      finalThumbnail = `https://img.youtube.com/vi/${extracted}/hqdefault.jpg`;
    } else {
      if (filePreview) {
        finalSrc = filePreview;
      } else if (formUrl.trim()) {
        finalSrc = formUrl.trim();
        finalThumbnail = formUrl.trim();
      } else {
        setFormError('Please select a file to upload or enter a direct media URL.');
        return;
      }
    }

    const newItem: MediaItem = {
      id: `custom-${Date.now()}`,
      type: formType,
      title: formTitle.trim(),
      category: formCategory,
      src: finalSrc,
      youtubeId: ytId,
      thumbnail: finalThumbnail,
      description: formDescription.trim(),
      date: 'Added by Practice',
      isCustom: true
    };

    const updated = [newItem, ...mediaList];
    setMediaList(updated);
    saveCustomItems(updated);

    // Reset
    setIsUploadModalOpen(false);
    setFormTitle('');
    setFormUrl('');
    setFormDescription('');
    setFilePreview(null);
  };

  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to remove this uploaded media item?')) {
      const updated = mediaList.filter(item => item.id !== id);
      setMediaList(updated);
      saveCustomItems(updated);
      if (activeItem?.id === id) {
        setActiveItem(null);
      }
    }
  };

  const filteredItems = mediaList.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bhrut') {
      return item.id.startsWith('bhrut') || item.platform === 'bhrut' || item.platform === 'njr' || item.socialHandle?.includes('BHRUT') || item.socialHandle?.includes('NHS') || item.title.includes('BHR') || item.title.includes('Joint Registry');
    }
    if (activeFilter === 'bbc') {
      return item.id.startsWith('social-bbc') || item.platform === 'bbc' || item.title.includes('BBC');
    }
    if (activeFilter === 'videos') {
      return item.type === 'youtube' || item.type === 'video' || !!item.broadcastScenes;
    }
    if (activeFilter === 'social') {
      return item.platform === 'linkedin' || item.platform === 'x' || item.platform === 'bupa' || item.platform === 'instagram' || item.platform === 'tiktok';
    }
    if (activeFilter === 'robotic') {
      return item.category === 'Robotic Surgery';
    }
    return true;
  });

  const bhrutCount = mediaList.filter(item => item.id.startsWith('bhrut') || item.platform === 'bhrut' || item.platform === 'njr' || item.socialHandle?.includes('BHRUT') || item.socialHandle?.includes('NHS') || item.title.includes('BHR') || item.title.includes('Joint Registry')).length;
  const bbcCount = mediaList.filter(item => item.id.startsWith('social-bbc') || item.platform === 'bbc' || item.title.includes('BBC')).length;
  const videosCount = mediaList.filter(item => item.type === 'youtube' || item.type === 'video' || !!item.broadcastScenes).length;
  const socialCount = mediaList.filter(item => item.platform === 'linkedin' || item.platform === 'x' || item.platform === 'bupa' || item.platform === 'instagram' || item.platform === 'tiktok').length;
  const roboticCount = mediaList.filter(item => item.category === 'Robotic Surgery').length;

  return (
    <section id="media" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-[#1B4965] shadow-2xs mb-3">
            <Sparkles size={14} className="text-[#E8A24C]" />
            <span>Professional News &amp; Updates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Media &amp; Social
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Follow Mr Shivakumar Shankar for professional updates, patient education and information about developments in hip and knee surgery.
          </p>
        </div>

        {/* SOCIAL MEDIA CONNECT BAR (@ShankarHipKnee) */}
        <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full inline-block mb-2">
                Official Social Media Channels
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Follow {SOCIAL_HANDLE}
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                Stay updated with the latest in robotic arthroplasty, patient recovery stories, joint preservation exercises, and orthopaedic clinical pearls.
              </p>
            </div>

            {/* Social Channel Cards (6 Channels) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
              
              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-blue-50/50 hover:border-[#0A66C2] hover:shadow-md transition-all text-center"
              >
                <div className="relative mb-2">
                  <img 
                    src="./profile.jpg" 
                    alt="Shivakumar Shankar LinkedIn" 
                    className="w-11 h-11 rounded-full object-cover object-top border-2 border-[#0A66C2] shadow-xs group-hover:scale-105 transition-transform" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-xs">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900">LinkedIn</span>
                <span className="text-[10px] text-[#0A66C2] font-semibold truncate max-w-full">Recent Activity</span>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-100/60 hover:border-slate-800 hover:shadow-md transition-all text-center"
              >
                <div className="relative mb-2">
                  <img 
                    src="./profile.jpg" 
                    alt="Shivakumar Shankar on X" 
                    className="w-11 h-11 rounded-full object-cover object-top border-2 border-black shadow-xs group-hover:scale-105 transition-transform" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shadow-xs">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900">X (Twitter)</span>
                <span className="text-[10px] text-slate-600 font-semibold">{X_HANDLE}</span>
              </a>

              {/* Bupa Finder Profile */}
              <a
                href={SOCIAL_LINKS.bupa}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-cyan-50/50 hover:border-[#0079C8] hover:shadow-md transition-all text-center"
              >
                <div className="relative mb-2">
                  <img 
                    src="./profile.jpg" 
                    alt="Shivakumar Shankar Bupa Profile" 
                    className="w-11 h-11 rounded-full object-cover object-top border-2 border-[#0079C8] shadow-xs group-hover:scale-105 transition-transform" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0079C8] text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck size={12} />
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900">Bupa Profile</span>
                <span className="text-[10px] text-[#0079C8] font-semibold">Fee-Assured</span>
              </a>

              {/* YouTube */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-red-50/40 hover:border-red-400 hover:shadow-md transition-all text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                  <Youtube size={22} />
                </div>
                <span className="text-xs font-bold text-slate-900">YouTube</span>
                <span className="text-[10px] text-red-600 font-semibold">Rehab Videos</span>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-pink-50/40 hover:border-pink-400 hover:shadow-md transition-all text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-900">Instagram</span>
                <span className="text-[10px] text-pink-700 font-semibold">Patient Stories</span>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-100/60 hover:border-slate-800 hover:shadow-md transition-all text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-900">TikTok</span>
                <span className="text-[10px] text-slate-600 font-semibold">Clinical Pearls</span>
              </a>

            </div>
          </div>
        </div>

        {/* CLINICAL CREDIBILITY & VERIFIED INSTITUTIONAL RECORD STRIP */}
        <div className="mb-10 bg-gradient-to-r from-slate-900 via-[#102A43] to-[#0E2838] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-700">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8A24C] text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-xs">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Verified Clinical Governance & NHS Trust Record</span>
                  <span className="bg-emerald-500/25 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-400/30">
                    GMC: 6038414
                  </span>
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Substantive NHS Consultant Orthopaedic Surgeon • Specialist Register • Independent Registry Audited & Insurer Listed
                </p>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-white/10 text-cyan-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5 shadow-2xs">
                <Building2 size={13} className="text-cyan-400" /> BHR Hospitals (BHRUT)
              </span>
              <span className="bg-white/10 text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5 shadow-2xs">
                <Cpu size={13} className="text-amber-400" /> 100 MAKO Joint Procedures Milestone
              </span>
              <span className="bg-white/10 text-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck size={13} className="text-emerald-400" /> NJR Audited Outcomes
              </span>
              <span className="bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5 shadow-2xs">
                <Check size={13} className="text-blue-400" /> Bupa Fee-Assured
              </span>
            </div>
          </div>
        </div>

        {/* GALLERY CONTROLS & CATEGORY FILTER BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Streamlined Category Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1B4965] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Media ({mediaList.length})
            </button>
            <button
              onClick={() => setActiveFilter('bhrut')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeFilter === 'bhrut'
                  ? 'bg-[#005EB8] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Building2 size={13} />
              <span>NHS Trust & NJR ({bhrutCount})</span>
            </button>
            <button
              onClick={() => setActiveFilter('bbc')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeFilter === 'bbc'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Newspaper size={13} />
              <span>BBC London News ({bbcCount})</span>
            </button>
            <button
              onClick={() => setActiveFilter('videos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeFilter === 'videos'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Youtube size={13} />
              <span>Patient Guides & Videos ({videosCount})</span>
            </button>
            <button
              onClick={() => setActiveFilter('social')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeFilter === 'social'
                  ? 'bg-[#0A66C2] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <ExternalLink size={13} />
              <span>Social & Professional Feeds ({socialCount})</span>
            </button>
            <button
              onClick={() => setActiveFilter('robotic')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeFilter === 'robotic'
                  ? 'bg-[#1B4965] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Sparkles size={13} className="text-[#E8A24C]" />
              <span>Robotic Surgery ({roboticCount})</span>
            </button>
          </div>

          {/* Action: Add Media / Upload */}
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="w-full sm:w-auto bg-[#E8A24C] hover:bg-[#D99136] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs shrink-0"
          >
            <Plus size={15} />
            <span>Upload Media or Add Link</span>
          </button>
        </div>

        {/* MEDIA GRID */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Video size={36} className="text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">No media items in this category</h4>
            <p className="text-xs text-slate-500 mt-1">Try selecting another filter or upload a new photo/video link.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#1B4965] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    {item.thumbnail ? (
                      <img
                        src={item.thumbnail}
                        alt={item.altText || item.title}
                        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                          item.platform === 'njr' ? 'object-contain p-4 bg-white' : 'object-cover'
                        }`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : item.type === 'photo' ? (
                      <img
                        src={item.src}
                        alt={item.altText || item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-400">
                        <Video size={40} />
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"></div>

                    {/* Type Badge Top-Left */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                      {item.broadcastScenes ? (
                        <span className="bg-red-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          <Tv size={11} /> BBC TV (0:47)
                        </span>
                      ) : item.id === 'post-nuffield-brentwood-mako-2026' ? (
                        <span className="bg-[#00703C] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Sparkles size={11} /> Nuffield Health Brentwood
                        </span>
                      ) : item.id === 'post-bhrut-personal-100-mako-2026' ? (
                        <span className="bg-[#1B4965] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Award size={11} /> 100 MAKO Personal Milestone
                        </span>
                      ) : item.id === 'bhrut-100th-robotic' ? (
                        <span className="bg-[#E8A24C] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Star size={11} className="fill-slate-950" /> BHRUT 100th Patient
                        </span>
                      ) : item.id === 'bhrut-super-clinics' ? (
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Building2 size={11} /> 260 Outpatients • Queen’s Hospital
                        </span>
                      ) : item.id === 'bhrut-attend-anywhere' ? (
                        <span className="bg-[#005EB8] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Video size={11} /> Attend Anywhere Virtual Clinic
                        </span>
                      ) : item.platform === 'njr' ? (
                        <span className="bg-emerald-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <ShieldCheck size={11} /> NJR Audited: H &amp; K
                        </span>
                      ) : item.id === 'linkedin-robotic-precision' ? (
                        <span className="bg-[#0A66C2] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Cpu size={11} /> First Navigated THR Team
                        </span>
                      ) : item.platform === 'linkedin' ? (
                        <span className="bg-[#0A66C2] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          LinkedIn Activity
                        </span>
                      ) : item.platform === 'bupa' ? (
                        <span className="bg-[#0079C8] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <ShieldCheck size={11} /> Bupa Verified
                        </span>
                      ) : item.platform === 'instagram' ? (
                        <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Instagram size={11} /> Instagram Post
                        </span>
                      ) : (item.id.startsWith('bhrut') || item.platform === 'bhrut') ? (
                        <span className="bg-[#005EB8] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Building2 size={11} /> NHS Trust News
                        </span>
                      ) : item.platform === 'x' ? (
                        <span className="bg-black text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          X ({X_HANDLE})
                        </span>
                      ) : item.type === 'social' ? (
                        <span className="bg-red-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Newspaper size={11} /> BBC News &amp; Social
                        </span>
                      ) : null}
                      {item.type === 'youtube' && (
                        <span className="bg-red-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Youtube size={11} /> YouTube
                        </span>
                      )}
                      {item.type === 'photo' && (
                        <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <ImageIcon size={11} /> Photo
                        </span>
                      )}
                      {item.type === 'video' && (
                        <span className="bg-[#1B4965]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <Video size={11} /> Video
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    {/* Center Play Button for Videos & Broadcasts */}
                    {(item.type === 'youtube' || item.type === 'video' || item.broadcastScenes) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E8A24C] group-hover:text-white transition-all">
                          <Play size={20} className="ml-1 fill-current" />
                        </div>
                      </div>
                    )}

                    {/* Photo Upload Trigger on Card */}
                    {(item.type === 'photo' || item.type === 'social') && (
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10" onClick={(e) => e.stopPropagation()}>
                        <label className="bg-black/80 hover:bg-black text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-md backdrop-blur-xs">
                          <Upload size={11} />
                          <span>Change Photo</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handlePhotoUpload(item.id, e)}
                          />
                        </label>
                      </div>
                    )}

                    {/* Custom Upload Delete Action */}
                    {item.isCustom && (
                      <button
                        onClick={(e) => handleDeleteItem(item.id, e)}
                        title="Remove this uploaded media"
                        className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-red-600 hover:text-white text-slate-700 transition-colors shadow-xs"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>

                  {/* Body Text */}
                  <div className="p-5">
                    {item.type === 'social' && (
                      <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2 min-w-0">
                          <img
                            src={item.authorAvatar || './profile.jpg'}
                            alt={item.authorName || item.socialHandle || 'Author'}
                            className="w-6 h-6 rounded-full object-cover object-top border border-slate-300 shrink-0"
                          />
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B4965] truncate">
                            <span className="truncate">
                              {item.broadcastScenes 
                                ? 'BBC TV Broadcast' 
                                : item.platform === 'linkedin'
                                ? 'LinkedIn Post'
                                : item.platform === 'bupa'
                                ? 'Bupa Profile'
                                : item.platform === 'x' 
                                ? 'X (Twitter)' 
                                : item.platform === 'bhrut'
                                ? 'BHR Hospitals'
                                : item.platform === 'njr'
                                ? 'National Joint Registry'
                                : item.platform === 'instagram' 
                                ? 'Instagram' 
                                : 'BBC News'}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 font-semibold truncate">{item.socialHandle || SOCIAL_HANDLE}</span>
                          </span>
                        </div>
                        {item.likes && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full shrink-0">
                            <Heart size={10} className="fill-rose-500" /> {item.likes}
                          </span>
                        )}
                      </div>
                    )}
                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[#1B4965] transition-colors mb-2">
                      {item.title}
                    </h4>
                    {item.quote && (
                      <blockquote className="bg-[#F8FAFC] border-l-2 border-[#1B4965] pl-2.5 py-1 text-[11px] italic text-slate-700 mb-2 line-clamp-2">
                        {item.quote}
                      </blockquote>
                    )}
                    {item.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{item.date || 'Practice Resource'}</span>
                  <span className="text-[#1B4965] font-bold flex items-center gap-1 group-hover:underline">
                    {item.broadcastScenes 
                      ? 'Watch TV Broadcast (0:47)' 
                      : item.platform === 'linkedin'
                      ? 'Read on LinkedIn'
                      : item.platform === 'bupa'
                      ? 'View Bupa Profile'
                      : item.platform === 'instagram'
                      ? 'View on Instagram'
                      : item.platform === 'x'
                      ? 'View Post on X'
                      : (item.id.startsWith('bhrut') || item.platform === 'bhrut')
                      ? 'Read Trust Report'
                      : item.platform === 'njr'
                      ? 'View NJR Registry'
                      : item.type === 'social' 
                      ? 'Read Story & Post' 
                      : item.type === 'youtube' 
                      ? 'Watch Video' 
                      : item.type === 'photo' 
                      ? 'View Photo' 
                      : 'Play Clip'}
                    {item.broadcastScenes ? <Play size={11} className="fill-current" /> : (item.id.startsWith('bhrut') || item.type === 'social') ? <ArrowUpRight size={12} /> : <Maximize2 size={11} />}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* LIGHTBOX / VIDEO VIEWER MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          ></div>

          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-200">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              
              {/* Type Badge & Category */}
              <div className="flex items-center gap-2 flex-wrap">
                {activeItem.type === 'social' ? (
                  <>
                    {activeItem.platform === 'linkedin' ? (
                      <span className="bg-[#0A66C2] text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1 shadow-xs">
                        LINKEDIN PROFESSIONAL ACTIVITY
                      </span>
                    ) : activeItem.platform === 'bupa' ? (
                      <span className="bg-[#0079C8] text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1 shadow-xs">
                        <ShieldCheck size={11} /> BUPA FINDER VERIFIED PROFILE
                      </span>
                    ) : activeItem.platform === 'x' ? (
                      <span className="bg-black text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1 shadow-xs">
                        X ({X_HANDLE})
                      </span>
                    ) : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut' || activeItem.platform === 'njr') ? (
                      <span className={`text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1 ${
                        activeItem.platform === 'njr' ? 'bg-emerald-700' : 'bg-[#005EB8]'
                      }`}>
                        <Building2 size={11} /> {activeItem.platform === 'njr' ? 'NATIONAL JOINT REGISTRY' : 'NHS BHR HOSPITALS OFFICIAL REPORT'}
                      </span>
                    ) : (
                      <span className="bg-red-700 text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1">
                        <Newspaper size={11} /> BBC NEWS LONDON
                      </span>
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2.5 py-1 rounded">
                      {activeItem.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {activeItem.id.startsWith('bhrut') 
                        ? 'Queen’s & King George Hospitals (BHRUT)'
                        : activeItem.platform === 'linkedin'
                        ? 'Shivakumar Shankar • Consultant Orthopaedic Surgeon'
                        : activeItem.platform === 'bupa'
                        ? 'Bupa Recognized Specialist • GMC 6038414'
                        : activeItem.platform === 'instagram'
                        ? 'Shivakumar Shankar • Official Instagram'
                        : activeItem.platform === 'x'
                        ? `Official Feed ${X_HANDLE}`
                        : `Official Feed ${activeItem.socialHandle || SOCIAL_HANDLE}`}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2.5 py-1 rounded">
                      {activeItem.category}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-medium text-slate-500">
                      {activeItem.type === 'youtube' ? 'YouTube Embed' : activeItem.type === 'photo' ? 'Clinical Photo' : 'Video Clip'}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {activeItem.title}
              </h3>

              {/* Verified Author & Source Bar for Social / News Items */}
              {activeItem.type === 'social' && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeItem.authorAvatar || './profile.jpg'}
                      alt={activeItem.authorName || 'Mr Shivakumar Shankar'}
                      className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#1B4965]/20 shadow-xs shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">
                          {activeItem.authorName || 'Mr Shivakumar Shankar'}
                        </span>
                        <CheckCircle size={13} className="text-[#1B4965] fill-[#1B4965]/20" />
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {activeItem.platform === 'linkedin'
                          ? 'Consultant Orthopaedic Hip & Knee Surgeon • Official LinkedIn'
                          : activeItem.platform === 'x'
                          ? `Consultant Orthopaedic Surgeon • ${X_HANDLE}`
                          : activeItem.platform === 'bupa'
                          ? 'Bupa Recognized Specialist • GMC 6038414 (Specialist Register)'
                          : activeItem.platform === 'instagram'
                          ? 'Consultant Orthopaedic Hip & Knee Surgeon • Official Instagram'
                          : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut')
                          ? 'Barking, Havering and Redbridge University Hospitals NHS Trust'
                          : activeItem.platform === 'njr'
                          ? 'National Joint Registry Audited Outcomes'
                          : 'BBC London News Broadcast & NHS Feature'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                    {(activeItem.type === 'photo' || activeItem.type === 'social') && (
                      <label className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shrink-0 shadow-2xs cursor-pointer">
                        <Upload size={12} />
                        <span>Change Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handlePhotoUpload(activeItem.id, e)}
                        />
                      </label>
                    )}
                    {activeItem.externalUrl && (
                      <a
                        href={activeItem.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg text-white bg-[#1B4965] hover:bg-[#133549] transition-colors shrink-0 shadow-2xs"
                      >
                        <span>View on {activeItem.platform === 'linkedin' ? 'LinkedIn' : activeItem.platform === 'x' ? 'X' : activeItem.platform === 'bupa' ? 'Bupa' : activeItem.platform === 'bhrut' ? 'BHRUT' : activeItem.platform === 'instagram' ? 'Instagram' : 'Source'}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Media Container / Interactive TV Broadcast Player */}
              {activeItem.broadcastScenes ? (
                <div className="w-full flex flex-col bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                  {/* TV Screen Display with BBC Styling */}
                  <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center select-none">
                    <img
                      src={activeItem.broadcastScenes[activeSceneIndex].image || activeItem.src}
                      alt={activeItem.broadcastScenes[activeSceneIndex].title}
                      className="w-full h-full object-cover opacity-90 transition-all duration-500"
                    />
                    
                    {/* TV Studio Dark Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60 pointer-events-none"></div>

                    {/* BBC News Header Bar */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold pointer-events-none z-10">
                      <div className="flex items-center gap-2">
                        <span className="bg-red-700 text-white px-2 py-0.5 rounded tracking-widest font-black text-[10px] shadow-sm">
                          BBC NEWS
                        </span>
                        <span className="font-extrabold uppercase tracking-wider text-slate-200">
                          LONDON
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] text-slate-300 border border-slate-700">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span>NHS SPECIAL REPORT</span>
                        <span className="text-slate-500">•</span>
                        <span className="font-mono text-amber-400">
                          00:{String(broadcastProgress).padStart(2, '0')} / 00:47
                        </span>
                      </div>
                    </div>

                    {/* Center Play/Pause Overlay */}
                    <button
                      onClick={() => setIsPlayingBroadcast(!isPlayingBroadcast)}
                      className="absolute inset-0 flex items-center justify-center group cursor-pointer z-10"
                      title={isPlayingBroadcast ? "Pause Broadcast" : "Play Broadcast (0:47)"}
                    >
                      <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md group-hover:bg-red-600/90 text-white flex items-center justify-center transition-all shadow-xl group-hover:scale-110 border border-white/20">
                        {isPlayingBroadcast ? (
                          <Pause size={28} className="fill-current" />
                        ) : (
                          <Play size={28} className="ml-1 fill-current" />
                        )}
                      </div>
                    </button>

                    {/* BBC Lower Third Graphic (Chyron) */}
                    <div className="absolute bottom-12 left-3 right-3 sm:left-5 sm:right-auto max-w-xl pointer-events-none z-10">
                      <div className="bg-red-700 text-white font-black text-[10px] uppercase px-3 py-0.5 inline-block tracking-wider shadow-sm">
                        {activeItem.broadcastScenes[activeSceneIndex].speaker}
                      </div>
                      <div className="bg-slate-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3 py-1.5 border-l-4 border-red-600 shadow-lg">
                        <div className="text-slate-200">{activeItem.broadcastScenes[activeSceneIndex].role}</div>
                        <div className="text-[11px] text-amber-300 font-normal italic mt-0.5 line-clamp-1">
                          {activeItem.broadcastScenes[activeSceneIndex].title}
                        </div>
                      </div>
                    </div>

                    {/* Subtitle Caption Bar */}
                    {activeItem.broadcastScenes[activeSceneIndex].quote && (
                      <div className="absolute bottom-2 left-3 right-3 text-center pointer-events-none z-10">
                        <span className="bg-black/85 text-yellow-300 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded shadow-md leading-relaxed inline-block">
                          {activeItem.broadcastScenes[activeSceneIndex].quote}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Timeline & Player Bar */}
                  <div className="p-3 bg-slate-900 border-t border-slate-800 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsPlayingBroadcast(!isPlayingBroadcast)}
                          className="p-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white transition-colors flex items-center gap-1.5 text-xs font-bold px-3 shadow-xs"
                        >
                          {isPlayingBroadcast ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
                          <span>{isPlayingBroadcast ? 'Pause' : 'Play Broadcast (0:47)'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setBroadcastProgress(0);
                            setActiveSceneIndex(0);
                            setIsPlayingBroadcast(true);
                          }}
                          title="Restart from beginning"
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                        >
                          <RotateCcw size={14} />
                        </button>
                        <span className="text-[11px] font-mono text-slate-300">
                          00:{String(broadcastProgress).padStart(2, '0')} / 00:47
                        </span>
                      </div>

                      <button
                        onClick={() => setShowFullTranscript(!showFullTranscript)}
                        className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md transition-colors"
                      >
                        <FileText size={12} />
                        <span>{showFullTranscript ? 'Hide Full Transcript' : 'View Full Transcript'}</span>
                      </button>
                    </div>

                    {/* Interactive Progress Bar */}
                    <div 
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                        const newSec = Math.round(pos * 47);
                        setBroadcastProgress(newSec);
                        const scenes = activeItem.broadcastScenes!;
                        for (let i = scenes.length - 1; i >= 0; i--) {
                          if (newSec >= scenes[i].seconds) {
                            setActiveSceneIndex(i);
                            break;
                          }
                        }
                      }}
                      className="w-full bg-slate-800 h-2 rounded-full cursor-pointer relative overflow-hidden"
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-500 rounded-full transition-all duration-200"
                        style={{ width: `${(broadcastProgress / 47) * 100}%` }}
                      ></div>
                    </div>

                    {/* Scene Jump Navigation Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
                      {activeItem.broadcastScenes.map((scene, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveSceneIndex(idx);
                            setBroadcastProgress(scene.seconds);
                          }}
                          className={`p-2 rounded-lg text-left transition-all text-xs border ${
                            activeSceneIndex === idx
                              ? 'bg-red-700 text-white border-red-500 shadow-xs'
                              : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 mb-0.5">
                            <span>Scene {idx + 1}</span>
                            <span className="font-bold text-amber-300">{scene.time.split(' - ')[0]}</span>
                          </div>
                          <div className="font-bold truncate text-[11px]">{scene.speaker}</div>
                          <div className="text-[10px] text-slate-300 truncate opacity-90">{scene.title}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Full Verbatim Transcript Accordion */}
                  {showFullTranscript && (
                    <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 space-y-3 max-h-60 overflow-y-auto">
                      <div className="font-bold text-white flex items-center justify-between pb-1 border-b border-slate-800 text-[11px] uppercase tracking-wider">
                        <span>BBC London Broadcast Transcript (00:00 - 00:47)</span>
                        <span className="text-amber-400">Verbatim Record</span>
                      </div>
                      {activeItem.broadcastScenes.map((scene, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                            <span className="font-mono text-amber-400">[{scene.time}]</span>
                            <span className="text-white">{scene.speaker}</span>
                            <span className="text-slate-500">({scene.role})</span>
                          </div>
                          <p className="text-slate-200 pl-4 border-l-2 border-red-600 italic">
                            {scene.quote || scene.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center relative shadow-inner">
                  {activeItem.type === 'youtube' && activeItem.youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${activeItem.youtubeId}?autoplay=1&rel=0`}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  ) : (activeItem.type === 'photo' || activeItem.type === 'social') ? (
                    <img
                      src={activeItem.src}
                      alt={activeItem.title}
                      className="w-full h-full object-contain bg-slate-950"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <video
                      src={activeItem.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    ></video>
                  )}
                </div>
              )}

              {/* Article Caption / Context */}
              {activeItem.caption && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">
                    {activeItem.platform === 'linkedin'
                      ? 'LinkedIn Clinical Discussion:'
                      : activeItem.platform === 'bupa'
                      ? 'Bupa Finder Official Record:'
                      : activeItem.platform === 'instagram'
                      ? 'Official Instagram (@shivakumarshankar) Post:'
                      : activeItem.platform === 'x'
                      ? 'Official X (@ShankarHipKnee) Post:'
                      : activeItem.platform === 'njr' 
                      ? 'National Joint Registry Record:' 
                      : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut')
                      ? 'BHR Hospitals Official NHS Report:' 
                      : 'BBC News Coverage:'}
                  </strong> {activeItem.caption}
                </div>
              )}

              {/* Direct Quote Box */}
              {activeItem.quote && (
                <div className="p-4 bg-gradient-to-r from-[#EAF1F6] to-white rounded-xl border-l-4 border-[#1B4965] text-xs sm:text-sm text-slate-900 leading-relaxed font-medium shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <Quote size={20} className="text-[#1B4965] shrink-0 mt-0.5" />
                    <div>
                      <p>{activeItem.quote}</p>
                      <p className="text-[11px] text-slate-500 font-bold mt-1.5">
                        {activeItem.platform === 'linkedin'
                          ? 'Mr Shivakumar Shankar • Professional LinkedIn Network & Activity'
                          : activeItem.platform === 'bupa'
                          ? 'Bupa Recognized Specialist Directory • GMC 6038414 (Specialist Register)'
                          : activeItem.platform === 'instagram'
                          ? 'Mr Shivakumar Shankar • Instagram (@shivakumarshankar)'
                          : activeItem.platform === 'x'
                          ? 'Official X Profile (@ShankarHipKnee) • Consultant Orthopaedic Surgeon'
                          : activeItem.platform === 'njr'
                          ? 'National Joint Registry Verified Surgeon Profile • GMC 6038414'
                          : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut')
                          ? 'BHR Hospitals Official Published Record • Barking, Havering and Redbridge University Hospitals NHS Trust'
                          : 'BBC News London Feature • Barking, Havering and Redbridge University Hospitals NHS Trust'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Description & Links */}
              {activeItem.description && (
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 whitespace-pre-line space-y-2">
                  {activeItem.description}
                </div>
              )}

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {activeItem.externalUrl && (
                    <a
                      href={activeItem.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-bold text-white px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs ${
                        activeItem.platform === 'linkedin'
                          ? 'bg-[#0A66C2] hover:bg-[#004182]'
                          : activeItem.platform === 'bupa'
                          ? 'bg-[#0079C8] hover:bg-[#005a96]'
                          : activeItem.platform === 'instagram'
                          ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95'
                          : activeItem.platform === 'x'
                          ? 'bg-black hover:bg-slate-800'
                          : activeItem.platform === 'njr'
                          ? 'bg-emerald-700 hover:bg-emerald-800'
                          : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut')
                          ? 'bg-[#005EB8] hover:bg-[#004B93]'
                          : 'bg-red-700 hover:bg-red-800'
                      }`}
                    >
                      {activeItem.platform === 'linkedin' ? (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      ) : activeItem.platform === 'bupa' ? (
                        <ShieldCheck size={14} />
                      ) : activeItem.platform === 'instagram' ? (
                        <Instagram size={14} />
                      ) : activeItem.platform === 'x' ? (
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ) : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut' || activeItem.platform === 'njr') ? (
                        <Building2 size={14} />
                      ) : (
                        <Newspaper size={14} />
                      )}
                      <span>
                        {activeItem.platform === 'linkedin'
                          ? 'Open LinkedIn Post / Activity'
                          : activeItem.platform === 'bupa'
                          ? 'Open Bupa Finder Profile'
                          : activeItem.platform === 'instagram'
                          ? 'View on Instagram (@shivakumarshankar)'
                          : activeItem.platform === 'x'
                          ? 'View Post on X (@ShankarHipKnee)'
                          : activeItem.platform === 'njr'
                          ? 'Open National Joint Registry'
                          : (activeItem.id.startsWith('bhrut') || activeItem.platform === 'bhrut')
                          ? 'Read Official BHRUT Article'
                          : 'Read BBC News Article'}
                      </span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {activeItem.type === 'youtube' && (
                    <a
                      href={activeItem.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Youtube size={14} /> Open on YouTube <ExternalLink size={12} />
                    </a>
                  )}
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0A66C2] bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={SOCIAL_LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    X ({X_HANDLE})
                  </a>
                  <a
                    href={SOCIAL_LINKS.bupa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0079C8] bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    Bupa
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    TikTok
                  </a>
                </div>

                {onOpenBooking && (
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      onOpenBooking();
                    }}
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    Book Consultation
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ADD / UPLOAD MEDIA MODAL */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs"
            onClick={() => setIsUploadModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button
              onClick={() => setIsUploadModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center">
                <Upload size={18} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Upload Media or Add Link</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Add procedure photos, upload patient guidance videos, or paste YouTube links to showcase on your website.
            </p>

            <form onSubmit={handleAddItem} className="space-y-4">
              
              {/* Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Media Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormType('youtube');
                      setFilePreview(null);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      formType === 'youtube'
                        ? 'bg-red-50 text-red-700 border-red-300 shadow-2xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Youtube size={14} /> YouTube Link
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormType('photo');
                      setFormUrl('');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      formType === 'photo'
                        ? 'bg-[#EAF1F6] text-[#1B4965] border-[#1B4965]/40 shadow-2xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <ImageIcon size={14} /> Photo Upload
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormType('video');
                      setFormUrl('');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                      formType === 'video'
                        ? 'bg-[#EAF1F6] text-[#1B4965] border-[#1B4965]/40 shadow-2xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Video size={14} /> Video Upload
                  </button>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g., Mako Robotic Total Knee Demonstration"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#1B4965] focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Clinical Category
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#1B4965] focus:outline-none"
                >
                  <option value="Robotic Surgery">Robotic Surgery</option>
                  <option value="Hip Replacement">Hip Replacement</option>
                  <option value="Knee Replacement">Knee Replacement</option>
                  <option value="Rehabilitation">Rehabilitation</option>
                  <option value="Clinical Education">Clinical Education</option>
                </select>
              </div>

              {/* YouTube Link Field */}
              {formType === 'youtube' && (
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    YouTube URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formUrl}
                    onChange={(e) => setFormUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#1B4965] focus:outline-none"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Accepts standard YouTube watch links, youtu.be short links, or YouTube Shorts.
                  </span>
                </div>
              )}

              {/* Photo or Video File Upload */}
              {(formType === 'photo' || formType === 'video') && (
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Select File or Enter URL
                  </label>
                  
                  {/* Drag & Drop File Input */}
                  <label className="flex flex-col items-center justify-center p-5 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100/70 cursor-pointer transition-colors mb-2">
                    <Upload size={22} className="text-slate-400 mb-1.5" />
                    <span className="text-xs font-semibold text-slate-700">Click to browse file</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">
                      {formType === 'photo' ? 'PNG, JPG, WEBP up to 8MB' : 'MP4, WebM up to 8MB'}
                    </span>
                    <input
                      type="file"
                      accept={formType === 'photo' ? 'image/*' : 'video/*'}
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Preview if uploaded */}
                  {filePreview && (
                    <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between mb-2 text-xs text-emerald-800">
                      <span className="flex items-center gap-1 font-bold">
                        <CheckCircle size={14} /> File loaded ready to save
                      </span>
                      <button
                        type="button"
                        onClick={() => setFilePreview(null)}
                        className="text-red-600 hover:text-red-700 font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  <div className="relative flex items-center justify-center my-2">
                    <span className="bg-white px-2 text-[10px] font-bold text-slate-400 uppercase z-10">Or provide image/video link</span>
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                  </div>

                  <input
                    type="url"
                    value={formUrl}
                    onChange={(e) => setFormUrl(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#1B4965] focus:outline-none"
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Description / Caption (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Provide a brief clinical context or explanation for patients..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#1B4965] focus:outline-none"
                ></textarea>
              </div>

              {/* Error Message */}
              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold">
                  {formError}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#1B4965] hover:bg-[#13364B] transition-colors shadow-xs"
                >
                  Save & Publish to Hub
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </section>
  );
};
