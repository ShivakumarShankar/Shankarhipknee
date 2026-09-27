export interface Treatment {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDetails?: string[];
  category: 'hip' | 'knee' | 'robotic' | 'preservation' | 'trauma';
  surgicalApproach?: string;
  keyBenefits?: string[];
  isPioneering?: boolean;
  procedureRiskId?: string;
}

export type { ProcedureRiskInfo, ComplicationGuide } from './patientInfoData';

export interface ConditionCategory {
  joint: 'Hip' | 'Knee';
  items: {
    name: string;
    description: string;
    commonTreatments: string[];
  }[];
}

export interface Fellowship {
  title: string;
  institution: string;
  location: string;
  focus: string;
  highlight?: string;
}

export interface LeadershipRole {
  role: string;
  institution: string;
  description?: string;
}

export interface SurgicalStat {
  value: string;
  label: string;
  detail: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'Private Hospital' | 'NHS Trust';
  area: string;
  address: string;
  postcode: string;
  phone: string;
  email?: string;
  consultationDays?: string;
  facilities: string[];
  transport: string;
  mapQuery: string;
}

export interface Testimonial {
  text: string;
  author: string;
  procedure: string;
  hospital: string;
  date?: string;
  source?: 'Doctify' | 'iWantGreatCare' | 'Spire Hartswood' | 'Nuffield Brentwood';
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'General' | 'Appointments' | 'Insurance' | 'Surgery' | 'Recovery' | 'Hip' | 'Knee' | 'Robotics' | string;
}

export interface Protocol {
  title: string;
  joint: 'Hip' | 'Knee';
  description: string;
  timeline: string;
  keyMilestones: string[];
  filename: string;
}
