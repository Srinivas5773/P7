/**
 * OmniHealth OS - Mock Medical Staff & Doctors Directory
 * Comprehensive directory with specialties, certifications, schedules,
 * consultation fees, ratings, and room assignments.
 */

const MOCK_DOCTORS = [
  {
    id: "DOC-101",
    name: "Dr. Sarah Jenkins",
    title: "MD, FACC",
    role: "Senior Attending Cardiologist",
    specialty: "Cardiology",
    department: "Cardiology",
    room: "Clinic 304 - Heart Center",
    phone: "+1 (555) 701-4901",
    email: "s.jenkins@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 342,
    consultationFee: 250,
    education: "Harvard Medical School (MD), Brigham and Women's Hospital (Fellowship)",
    certifications: ["American Board of Internal Medicine (Cardiovascular Disease)", "Echocardiography Level III"],
    availability: {
      days: ["Monday", "Wednesday", "Thursday", "Friday"],
      hours: "08:30 - 16:30",
      slots: ["09:00", "09:45", "10:30", "11:15", "14:00", "14:45", "15:30", "16:15"]
    },
    bio: "Dr. Jenkins specializes in preventative cardiology, coronary artery disease management, advanced echocardiography, and complex lipid disorders."
  },
  {
    id: "DOC-102",
    name: "Dr. Robert Chen",
    title: "MD, PhD, FAAN",
    role: "Chief of Neurology",
    specialty: "Neurology",
    department: "Neurology",
    room: "Neuroscience Wing 412",
    phone: "+1 (555) 701-4902",
    email: "r.chen@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
    experienceYears: 22,
    rating: 4.85,
    reviewCount: 410,
    consultationFee: 280,
    education: "Johns Hopkins University School of Medicine (MD/PhD), Mass General Hospital (Residency)",
    certifications: ["American Board of Psychiatry and Neurology", "Vascular Neurology Subspecialty"],
    availability: {
      days: ["Tuesday", "Wednesday", "Friday"],
      hours: "09:00 - 17:00",
      slots: ["09:30", "10:15", "11:00", "13:30", "14:15", "15:00", "16:00"]
    },
    bio: "Internationally recognized for clinical research in cerebrovascular diseases, acute stroke intervention, refractory migraines, and neurodegenerative disorders."
  },
  {
    id: "DOC-103",
    name: "Dr. Elena Rostova",
    title: "MD, FAAP",
    role: "Attending Pediatrician",
    specialty: "Pediatrics",
    department: "Pediatrics",
    room: "Children's Pavilion 208",
    phone: "+1 (555) 701-4903",
    email: "e.rostova@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1594824813629-28c0379aaefd?auto=format&fit=crop&w=300&q=80",
    experienceYears: 12,
    rating: 4.95,
    reviewCount: 520,
    consultationFee: 190,
    education: "Columbia University Vagelos College of Physicians and Surgeons, Boston Children's Hospital",
    certifications: ["American Board of Pediatrics", "Pediatric Advanced Life Support (PALS)"],
    availability: {
      days: ["Monday", "Tuesday", "Thursday", "Saturday"],
      hours: "08:00 - 15:00",
      slots: ["08:30", "09:15", "10:00", "10:45", "11:30", "13:00", "13:45", "14:30"]
    },
    bio: "Compassionate pediatric specialist dedicated to childhood respiratory illnesses, developmental assessments, newborn care, and pediatric asthma management."
  },
  {
    id: "DOC-104",
    name: "Dr. Marcus Vance",
    title: "MD, FCCP",
    role: "Director of Critical Care",
    specialty: "Intensive Care / Pulmonology",
    department: "Intensive Care Unit",
    room: "ICU Pod Alpha Director Office",
    phone: "+1 (555) 701-4904",
    email: "m.vance@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80",
    experienceYears: 20,
    rating: 4.9,
    reviewCount: 290,
    consultationFee: 310,
    education: "Stanford University School of Medicine, UCSF Medical Center",
    certifications: ["Critical Care Medicine", "Pulmonary Disease", "Advanced Cardiac Life Support (ACLS)"],
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "07:00 - 19:00 (Inpatient Ward & ICU Rounds)",
      slots: ["11:00", "13:00", "15:00"]
    },
    bio: "Expert in septic shock resuscitation, ARDS mechanical ventilation strategies, hemodynamic monitoring, and acute respiratory failure."
  },
  {
    id: "DOC-105",
    name: "Dr. Sanjay Patel",
    title: "MD, FAAOS",
    role: "Chief of Orthopedic Surgery",
    specialty: "Orthopedic Surgery",
    department: "Orthopedic Surgery",
    room: "Surgery Suite 502",
    phone: "+1 (555) 701-4905",
    email: "s.patel@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
    experienceYears: 16,
    rating: 4.88,
    reviewCount: 380,
    consultationFee: 290,
    education: "Yale School of Medicine, Hospital for Special Surgery (Orthopedic Sports Fellowship)",
    certifications: ["American Board of Orthopaedic Surgery", "Orthopaedic Sports Medicine Certificate"],
    availability: {
      days: ["Tuesday", "Thursday", "Friday"],
      hours: "08:30 - 16:30",
      slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
    },
    bio: "Pioneering minimally invasive arthroscopic knee and shoulder reconstructions, total joint arthroplasty, and athletic trauma rehabilitation."
  },
  {
    id: "DOC-106",
    name: "Dr. Miriam Goldberg",
    title: "MD, FACP",
    role: "Director of Clinical Oncology",
    specialty: "Medical Oncology",
    department: "Oncology",
    room: "Cancer Center Suite 601",
    phone: "+1 (555) 701-4906",
    email: "m.goldberg@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80",
    experienceYears: 19,
    rating: 4.92,
    reviewCount: 315,
    consultationFee: 300,
    education: "Penn Medicine (Perelman School of Medicine), Memorial Sloan Kettering Cancer Center",
    certifications: ["Medical Oncology", "Hematology", "Palliative Care"],
    availability: {
      days: ["Monday", "Wednesday", "Thursday"],
      hours: "09:00 - 17:00",
      slots: ["09:30", "10:30", "11:30", "14:00", "15:00", "16:00"]
    },
    bio: "Dedicated to precision immunotherapy, targeted oncologic therapies, gastrointestinal malignancies, and multidisciplinary tumor board coordination."
  },
  {
    id: "DOC-107",
    name: "Dr. Aris Thorne",
    title: "MD, FACEP",
    role: "Emergency Medicine Director",
    specialty: "Emergency Medicine",
    department: "Emergency",
    room: "Emergency Department Triage Station 1",
    phone: "+1 (555) 701-4907",
    email: "a.thorne@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
    experienceYears: 14,
    rating: 4.86,
    reviewCount: 460,
    consultationFee: 220,
    education: "Georgetown University School of Medicine, Bellevue Hospital Center",
    certifications: ["American Board of Emergency Medicine", "Disaster Medicine Specialist"],
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      hours: "24/7 Rotational Emergency Coverage",
      slots: ["Immediate Triage"]
    },
    bio: "Specializing in acute resuscitation, major trauma management, point-of-care ultrasound (POCUS), and disaster triage coordination."
  },
  {
    id: "DOC-108",
    name: "Dr. Sophia Sterling-Vogel",
    title: "MD, FAAD",
    role: "Attending Dermatologist",
    specialty: "Dermatology",
    department: "Dermatology",
    room: "Dermatology Suite 105",
    phone: "+1 (555) 701-4908",
    email: "s.vogel@omnihealth.org",
    avatar: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&q=80",
    experienceYears: 11,
    rating: 4.94,
    reviewCount: 395,
    consultationFee: 210,
    education: "Northwestern University Feinberg School of Medicine, NYU Langone Health",
    certifications: ["American Board of Dermatology", "Dermatopathology"],
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "09:00 - 16:00",
      slots: ["09:00", "09:45", "10:30", "11:15", "13:30", "14:15", "15:00"]
    },
    bio: "Expertise in melanoma surveillance, dermoscopy, inflammatory skin conditions, autoimmune blistering disorders, and cutaneous oncology."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOCK_DOCTORS };
}
