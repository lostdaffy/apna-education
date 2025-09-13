export const universities = [
  // ---------------- RUSSIA ----------------
  {
    id: "omsk-medical-university",
    name: "Omsk State Medical University",
    imageUrl: "/images/university/omsk.jpeg",
    established:
      "1920 (as Medical Faculty of Siberian Institute) → Academy (1994) → University status in 2015",
    type: "Public Medical University under Russia’s Ministry of Health & Education",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "5,500 total, including 600+ international students.",
    facilities: [
      "59 Departments",
      "Library with 600,000+ volumes",
      "Computer Labs",
      "Hostels",
      "Student Scientific Society",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "Pediatrics",
      "Preventive Medicine",
      "Dentistry",
      "Pharmacy ",
      "5 faculties, 59 departments",
    ],
    admissions: {
      requirements: ["NEET", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: 237, global: 5555, source: "WDOMS" },
    notes:
      "One of Russia's oldest medical universities with over 40,000 graduates worldwide. Strong clinical training from Year 3.",
  },

  {
    id: "sevastopol-state-university",
    name: "Sevastopol State University",
    imageUrl: "/images/university/sevastopol.jpeg",
    established: "2014 through a merger of several specialized institutions.",
    type: "Public University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 14,400+ students, including 600+ international students from 36 countries; 400+ Indians",
    facilities: [
      "59 Departments",
      "Library with 600,000+ volumes",
      "Computer Labs",
      "Hostels",
      "Student Scientific Society",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Engineering",
      "Economics & Management",
      "Humanities",
      "Marine Technology",
    ],
    admissions: {
      requirements: [
        "NEET qualification (for Indian students)",
        "10+2 with Physics, Chemistry, Biology & English",
        "Valid Passport",
      ],
    },
    rankings: { national: 54, global: 4100, source: "UniRank 2024, WDOMS" },
    notes:
      "Sevastopol State University is a multidisciplinary public university in Crimea, known for its MBBS program and international student community.",
  },

  {
    id: "chechen-state-university",
    name: "Chechen State University",
    imageUrl: "/images/university/chechen.jpeg",
    established: "1938",
    type: "Public University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 11,000+ students, including 200+ international students",
    facilities: [
      "72 departments (university-wide)",
      "Library",
      "Clinical training hospitals",
      "Computer Labs",
      "Hostels",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: ["General Medicine", "Pharmacy", "Biology", "Humanities"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 60, global: 4500, source: "UniRank 2024, WDOMS" },
    notes:
      "Medical faculty opened 1990; MBBS/MD program duration 6 years; instruction available in Russian and some English tracks.",
  },

  {
    id: "kazan-state-medical-university",
    name: "Kazan State Medical University",
    imageUrl: "/images/university/Kazan.jpeg",
    established: "1814",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 7,500+ students, including 300+ international students",
    facilities: [
      "Library",
      "Hostels",
      "Clinical hospitals",
      "Research Labs",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Research Labs",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 45, global: 3800, source: "UniRank 2024, WDOMS" },
    notes:
      "Kazan State Medical University is one of Russia’s top medical universities with strong international recognition.",
  },

  {
    id: "kazan-federal-university",
    name: "Kazan Federal University",
    imageUrl: "/images/university/kazan-fad.jpeg",
    established: "1804",
    type: "Federal Public University (medical faculty / Institute of Fundamental Medicine and Biology)",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 12,000+ students, including 500+ international students",
    facilities: [
      "Library",
      "Medical Research Labs",
      "Hostels",
      "Clinical Training Hospitals",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Pharmacy",
      "Dentistry",
      "Biomedical Sciences",
      "Research Centers",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 30, global: 3600, source: "UniRank 2024, WDOMS" },
    notes:
      "KFU offers medical education via its Institute of Fundamental Medicine and Biology; widely listed in international directories.",
  },

  {
    id: "tver-state-medical-university",
    name: "Tver State Medical University",
    imageUrl: "/images/university/Tver-state.jpeg",
    established: "1936",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 6,500+ students, including 200+ international students",
    facilities: [
      "Library",
      "Hostels",
      "Clinical Training Hospitals",
      "Research Labs",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Biomedical Sciences",
      "Research Centers",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 50, global: 4000, source: "UniRank 2024, WDOMS" },
    notes:
      "Tver State Medical University is a recognized public medical university with international student programs.",
  },

  {
    id: "kirov-state-medical-university",
    name: "Kirov State Medical University",
    imageUrl: "/images/university/Kirov.jpeg",
    established:
      "1987 (medical faculty opened) — WDOMS lists year instruction started as 1994",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "≈3,000–4,000 students, including 150+ international students",
    facilities: [
      "Multiple departments",
      "Library",
      "Labs",
      "Clinical Affiliations",
      "Hostels",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Pharmacy",
      "Dentistry",
      "Nursing",
      "Research Labs",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 70, global: 4600, source: "UniRank 2024, WDOMS" },
    notes:
      "Youngest higher medical establishment in Russia; recognized internationally with accreditation certificates.",
  },

  {
    id: "yaroslavi-state-medical-university",
    name: "Yaroslavi State Medical University",
    imageUrl: "/images/university/Yaroslavi.jpeg",
    established: "1944",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 5,000+ students, including 200+ international students",
    facilities: [
      "Library",
      "Hostels",
      "Clinical Hospitals",
      "Research Labs",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Research Centers",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 65, global: 4200, source: "UniRank 2024, WDOMS" },
    notes:
      "Yaroslavl State Medical University offers recognized MBBS programs for international students in English and Russian tracks.",
  },

  {
    id: "tambov-state-medical-university",
    name: "Tambov State Medical University",
    imageUrl: "/images/university/tambov.jpeg",
    established:
      "1918 (medical faculty established under Tambov State University)",
    type: "Public Medical Institute / University (faculty of medicine of Tambov State University)",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "≈1,800+ international students (reported by some sources)",
    facilities: ["Hostels", "Labs", "Clinical training centres"],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Pharmacy",
      "Dentistry",
      "Biomedical Sciences",
      "Research Labs",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 85, global: 4800, source: "UniRank 2024, WDOMS" },
    notes:
      "Medical Institute (faculty of medicine) of Tambov State University offers recognized MBBS programs with English instruction for international students.",
  },

  {
    id: "lobachevsky-university",
    name: "Lobachevsky University",
    imageUrl: "/images/university/Lobachevsky.jpeg",
    established: "1916",
    type: "Public Research University (Institute of Biology & Biomedicine / medical programmes)",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "≈6,000+ students, including 300+ international students",
    facilities: [
      "Institute of Biology and Biomedicine",
      "Clinical training facilities",
      "Library",
      "Labs",
      "Hostels",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Biomedicine",
      "Pharmacy",
      "Dentistry",
      "Research Labs",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 55, global: 4200, source: "UniRank 2024, WDOMS" },
    notes:
      "Lobachevsky University of Nizhny Novgorod offers medical programs through its Institute of Biology & Biomedicine; recognized for international MBBS students.",
  },

  {
    id: "north-caucasian-state-medical-academy",
    name: "North Caucasian State Medical Academy",
    imageUrl: "/images/university/North-Caucasian.jpeg",
    established: "2004 (as per WDOMS entry for the academy/medical programs)",
    type: "Public Medical Academy",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "≈3,200+ students, including 150+ international students",
    facilities: [
      "Library",
      "Clinical training hospitals",
      "Labs",
      "Hostels",
      "Sports facilities",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Research Labs",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 75, global: 4700, source: "UniRank 2024, WDOMS" },
    notes:
      "North Caucasian State Medical Academy offers recognized MBBS programs with instruction in English and Russian for international students.",
  },

  {
    id: "kemerovo-state-medical-university",
    name: "Kemerovo State Medical University",
    imageUrl: "/images/university/Kemerovo.jpeg",
    established: "1955",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 4,500+ students, including 200+ international students",
    facilities: [
      "Library",
      "Clinical Training Hospitals",
      "Laboratories",
      "Hostels",
      "Sports Facilities",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Biomedical Sciences",
      "Research Labs",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 68, global: 4400, source: "UniRank 2024, WDOMS" },
    notes:
      "Kemerovo State Medical University offers MBBS programs for international students with English instruction available.",
  },

  {
    id: "orel-state-medical-university",
    name: "Orel State Medical University",
    imageUrl: "/images/university/Orel.jpeg",
    established: "1931",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 5,000+ students, including 250+ international students",
    facilities: [
      "Library",
      "Clinical Hospitals",
      "Research Labs",
      "Hostels",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Biomedical Sciences",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 60, global: 4300, source: "UniRank 2024, WDOMS" },
    notes:
      "Orel State Medical University is recognized for international MBBS programs with English and Russian tracks.",
  },

  {
    id: "voronezh-state-medical-university",
    name: "Voronezh State Medical University",
    imageUrl: "/images/university/Voronezh.jpeg",
    established: "1930 (medical institute roots; predecessor activity earlier)",
    type: "Public Medical University (named after N. N. Burdenko)",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 6,500+ students, including 400+ international students",
    facilities: [
      "Library",
      "Clinical Training Hospitals",
      "Laboratories",
      "Hostels",
      "Sports Facilities",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Biomedical Sciences",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 55, global: 4100, source: "UniRank 2024, WDOMS" },
    notes:
      "Voronezh State Medical University offers recognized MBBS programs for international students in English and Russian languages.",
  },

  {
    id: "volgograd-state-medical-university",
    name: "Volgograd State Medical University",
    imageUrl: "/images/university/Volgograd.jpeg",
    established: "1935",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 5,500+ students, including 300+ international students",
    facilities: ["Clinical hospitals / branches", "Laboratories", "Hostels"],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Biomedical Sciences",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 52, global: 4200, source: "UniRank 2024, WDOMS" },
    notes:
      "Volgograd State Medical University is recognized for international MBBS programs with English instruction available.",
  },

  {
    id: "privolzhsky-research-medical-university",
    name: "Pri Volzhsky Research Medical University",
    imageUrl: "/images/university/Pri-Volzhsky.jpeg",
    established: "1920",
    type: "Public Medical University (Nizhny Novgorod)",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students: "≈3,000 (reported), including 200+ international students",
    facilities: [
      "70+ departments (reported)",
      "Faculties: Medicine, Pediatrics, Pharmacy, Dentistry, Preventive Medicine, International Faculty",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Pediatrics",
      "Pharmacy",
      "Dentistry",
      "Preventive Medicine",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 58, global: 4300, source: "UniRank 2024, WDOMS" },
    notes:
      "Formerly Nizhny Novgorod State Medical Academy; large research & clinical base in Nizhny Novgorod; offers programs for international students.",
  },

  {
    id: "kuban-state-medical-university",
    name: "Kuban State Medical University",
    imageUrl: "/images/university/Kuban.jpeg",
    established: "1920",
    type: "Public Medical University",
    accreditation: [
      "WHO",
      "NMC",
      "FAIMER",
      "ECFMG",
      "AMC",
      "GMC PLAB",
      "WDOMS",
    ],
    address: { country: "Russia" },
    students:
      "Approximately 6,000+ students, including 400+ international students",
    facilities: [
      "Library",
      "Clinical Hospitals",
      "Research Labs",
      "Hostels",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Biomedical Sciences",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 54, global: 4150, source: "UniRank 2024, WDOMS" },
    notes:
      "Kuban State Medical University offers internationally recognized MBBS programs with English medium instruction for foreign students.",
  },

  // ---------------- INDIA ----------------
  {
    id: "AIIMS-delhi",
    name: "All India Institute Of Medical Sciences Delhi",
    imageUrl: "/images/university/aiims-delhi.jpeg",
    shortName: "AIIMS",
    established: 1956,
    type: "Public Institution & Government Medical University",
    accreditation: [
      "National Medical Commission (NMC)",
      "Institute of National Importance (INI)",
    ],
    address: { country: "India" },
    students: "18,000+ (UG, PG, Doctoral & Paramedical)",
    facilities: ["Library", "Hostels", "Hospitals", "Research Labs"],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "Pediatrics",
      "Preventive Medicine",
      "Dentistry",
      "Pharmacy",
      "5 faculties, 59 departments",
    ],
    admissions: {
      requirements: [
        "For MBBS: NEET-UG qualification with high rank",
        "For PG Courses: INI-CET exam",
        "For Nursing & Paramedical: AIIMS entrance test",
      ],
    },
    rankings: {
      national: 1,
      global: 824,
      source: "NIRF 2024, QS World Rankings",
    },
    notes: "AIIMS Delhi is India’s top-ranked medical institute.",
  },

  {
    id: "JIPMER-pondicherry",
    name: "Jawaharlal Institute of Postgraduate Medical Education & Research",
    imageUrl: "/images/university/jawaharlal.jpeg",
    shortName: "JIPMER",
    established: 1956,
    type: "Public Institution & Medical University",
    accreditation: [
      "National Medical Commission (NMC)",
      "Institute of National Importance (INI)",
    ],
    address: { country: "India" },
    students: "8,000+ (UG, PG & Doctoral)",
    facilities: ["Library", "Hostels", "Hospitals", "Research Centers"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 5.5 }],
    facility: [
      "Anatomy",
      "Pharmacology",
      "Microbiology",
      "Nursing",
      "Community Medicine",
    ],
    admissions: {
      requirements: [
        "For MBBS: NEET-UG qualification",
        "For PG Courses: INI-CET exam",
      ],
    },
    rankings: { national: 8, global: 1200, source: "NIRF 2024" },
    notes:
      "JIPMER is one of India’s premier INI medical institutions located in Puducherry.",
  },

  {
    id: "CMC-vellore",
    name: "Christian Medical College Vellore",
    imageUrl: "/images/university/chiristian.jpeg",
    shortName: "CMC Vellore",
    established: 1900,
    type: "Private Medical College & Hospital",
    accreditation: ["National Medical Commission (NMC)"],
    address: { country: "India" },
    students: "9,000+ (UG, PG & Nursing)",
    facilities: ["Library", "Teaching Hospital", "Research Labs", "Hostels"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 5.5 }],
    facility: [
      "Cardiology",
      "Neurology",
      "Nursing",
      "Pharmacy",
      "Community Health",
    ],
    admissions: {
      requirements: [
        "For MBBS: NEET-UG qualification",
        "For PG Courses: NEET-PG exam",
      ],
    },
    rankings: {
      national: 3,
      global: 701,
      source: "NIRF 2024, QS World Rankings",
    },
    notes:
      "CMC Vellore is one of India’s most reputed private medical institutions.",
  },

  // ---------------- ARMENIA ----------------
  {
    id: "yerevan-state-medical-university",
    name: "Yerevan State Medical University named after Mkhitar Heratsi",
    imageUrl: "/images/university/Yarven.jpeg",
    established: 1920,
    type: "Public Medical University",
    accreditation: ["WHO", "UNESCO", "NMC", "FAIMER", "ECFMG"],
    address: { country: "Armenia" },
    students: "≈8,500 (including 1,200+ international students)",
    facilities: [
      "10 Faculties",
      "Modern Medical Labs",
      "Clinical Training Centers",
      "Library",
      "Hostels",
      "Research Centers",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Dentistry", durationYears: 5 },
      { level: "UG", name: "Pharmacy", durationYears: 5 },
      { level: "UG", name: "Military Medicine", durationYears: 6 },
      { level: "PG", name: "MD Specializations", durationYears: 3 },
      { level: "Doctoral", name: "Ph.D. Programs", durationYears: 4 },
    ],
    facility: [
      "MBBS",
      "Dentistry",
      "Pharmacy",
      "Military Medicine",
      "Research",
    ],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 1, global: 4200, source: "WDOMS" },
    notes:
      "Armenia's top medical university and oldest medical institution. Offers programs with instruction in English for international students.",
  },

  {
    id: "armenian-medical-institute",
    name: "Armenian Medical Institute",
    imageUrl: "/images/university/armenia.jpeg",
    established: 1990,
    type: "Private Medical University",
    accreditation: ["WHO", "NMC", "FAIMER", "ECFMG"],
    address: { country: "Armenia" },
    students: "≈1,800 (including 500 international students)",
    facilities: ["Library", "Clinical Labs", "Hostels", "Research Center"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 6 }],
    facility: ["MBBS", "Research", "Clinical Training"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: "", global: "", source: "" },
    notes: "Private medical institute offering English-medium MBBS programs.",
  },

  {
    id: "st-grigor-lusavorich-medical-university",
    name: "St. Grigor Lusavorich Medical University",
    imageUrl: "/images/university/st-Grigor.jpeg",
    established: 1995,
    type: "Private Medical University",
    accreditation: ["WHO", "NMC", "FAIMER"],
    address: { country: "Armenia" },
    students: "≈1,200 (including 300 international students)",
    facilities: [
      "Modern Labs",
      "Library",
      "Clinical Training Center",
      "Hostels",
    ],
    programs: [{ level: "UG", name: "MBBS", durationYears: 6 }],
    facility: ["MBBS", "Clinical Training", "Laboratories"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: "", global: "", source: "" },
    notes: "English-taught MBBS program for international students.",
  },
  {
    id: "yerevan-armenian-medical-college",
    name: "Yerevan Armenian Medical College",
    imageUrl: "/images/university/armeniaya-med.jpeg",
    established: 2000,
    type: "Private Medical College",
    accreditation: ["WHO", "NMC"],
    address: { country: "Armenia" },
    students: "≈1,000 (mainly international students)",
    facilities: ["Library", "Clinical Labs", "Simulation Labs", "Hostels"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 6 }],
    facility: ["MBBS", "Practical Training", "Laboratories"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Focused on providing practical training in English for international students.",
  },

  // ---------------- NEPAL ----------------
  {
    id: "bp-koirala-institute-health-sciences",
    name: "B.P. Koirala Institute of Health Sciences",
    imageUrl: "/images/university/b-p.jpeg",
    established: 1993,
    type: "Public Medical Institute",
    accreditation: ["NMC", "WHO", "Nepal Medical Council"],
    address: { country: "Nepal" },
    students:
      "≈3,500 (including 450 faculty members and international students)",
    facilities: [
      "Teaching Hospital",
      "Advanced Medical Labs",
      "Research Centers",
      "Library",
      "Hostels",
      "Sports Complex",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 5.5 },
      { level: "UG", name: "BDS", durationYears: 5 },
      { level: "UG", name: "B.Sc. Nursing", durationYears: 4 },
      { level: "PG", name: "MD/MS", durationYears: 3 },
      { level: "Doctoral", name: "Ph.D.", durationYears: 5 },
    ],
    facility: ["MBBS", "BDS", "Nursing", "MD/MS", "Ph.D."],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 2, global: 4500, source: "Nepal Medical Council" },
    notes:
      "Premier autonomous health sciences institute in Nepal. Known for excellent clinical training and research programs.",
  },

  {
    id: "patan-academy-health-sciences",
    name: "Patan Academy of Health Sciences",
    imageUrl: "/images/university/patan.jpeg",
    established: 2008,
    type: "Public Medical Institute",
    accreditation: ["NMC", "WHO", "FAIMER"],
    address: { country: "Nepal" },
    students: "≈1,200 (including 200 international students)",
    facilities: ["Teaching Hospital", "Clinical Labs", "Library", "Hostels"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 5.5 }],
    facility: ["MBBS", "Clinical Training", "Research"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 3, global: "", source: "" },
    notes:
      "Focuses on community-oriented medical education and rural health service.",
  },

  {
    id: "kathmandu-university-school-medical-sciences",
    name: "Kathmandu University School of Medical Sciences",
    imageUrl: "/images/university/kathmandu.jpeg",
    established: 1994,
    type: "Private Medical University",
    accreditation: ["NMC", "WHO", "FAIMER"],
    address: { country: "Nepal" },
    students: "≈2,000 (including international students)",
    facilities: ["Teaching Hospital", "Research Center", "Library", "Hostels"],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 5.5 },
      { level: "UG", name: "BDS", durationYears: 5 },
    ],
    facility: ["MBBS", "BDS", "Research", "Clinical Training"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 4, global: "", source: "" },
    notes: "Emphasizes problem-based learning and modern medical curriculum.",
  },

  {
    id: "national-academy-health-sciences-nepal",
    name: "National Academy of Health Sciences Nepal",
    imageUrl: "/images/university/National-acadmy.jpeg",
    established: 2010,
    type: "Private Medical Institute",
    accreditation: ["WHO", "NMC"],
    address: { country: "Nepal" },
    students: "≈800 (including international students)",
    facilities: [
      "Laboratories",
      "Library",
      "Clinical Training Center",
      "Hostels",
    ],
    programs: [{ level: "UG", name: "MBBS", durationYears: 5.5 }],
    facility: ["MBBS", "Clinical Training", "Research"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: "", global: "", source: "" },
    notes: "Offers English-medium MBBS programs for international students.",
  },

  // ---------------- UZBEKISTAN ----------------
  {
    id: "bukhara-state-medical-institute",
    name: "Bukhara State Medical Institute",
    imageUrl: "/images/university/Bukhara.jpeg",
    established: "October 1990",
    type: "Public Medical Institute",
    accreditation: ["WHO", "NMC", "WDOMS", "FAIMER", "ECFMG"],
    address: { country: "Uzbekistan" },
    students: "≈9,180 (total), including ≈1,727 international students",
    facilities: [
      "4 faculties",
      "53 departments",
      "Multilingual instruction: Uzbek, Russian, English, Turkish",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pediatrics",
      "Pharmacy",
      "Nursing",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Named after Abu Ali ibn Sino (Avicenna). Offers multiple faculties including Dentistry, Pediatrics, Preventive Medicine, Pharmacy, Higher Nursing, Medical Pedagogy.",
  },

  {
    id: "fergana-state-university",
    name: "Fergana State University",
    imageUrl: "/images/university/Fergana.jpeg",
    established: "1930 (as pedagogical institute) → University status in 1991",
    type: "Public University (pedagogical/general education)",
    accreditation: [],
    address: { country: "Uzbekistan" },
    students: "≈22,000 total, including ≈148 international students",
    facilities: ["12 faculties", "49 departments"],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Pediatrics",
      "Nursing",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: {
      national: "",
      global: "#55 in Central Asia (QS Asia Regionals 2025)",
      source: "QS Central Asia Rankings",
    },
    notes: "",
  },

  {
    id: "tashkent-pediatric-medical-institute",
    name: "Tashkent Pediatric Medical Institute",
    imageUrl: "/images/university/Tashkent.jpeg",
    established:
      "1972 (as Central Asian Pediatric Medical Institute), renamed 1989",
    type: "Public Medical Institute (Pediatrics specialization)",
    accreditation: ["WHO", "NMC", "WDOMS"],
    address: { country: "Uzbekistan" },
    students: "≈4,000 total",
    facilities: [
      "39 departments",
      "Clinical base with 340-bed clinic",
      "International collaborations (e.g., ERASMUS, DAAD)",
      "Hostels",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Pediatrics",
      "Clinical Research",
      "Pharmacy",
      "Nursing",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Only pediatric-focused medical institute in Central Asia, extensive postgraduate and residency training infrastructure.",
  },

  {
    id: "tashkent-medical-academy",
    name: "Tashkent Medical Academy",
    imageUrl: "/images/university/Tashkent-Medical.jpeg",
    established: "2005 (formed by merging two medical institutes)",
    type: "Public Medical Academy",
    accreditation: ["WHO", "NMC", "WDOMS"],
    address: { country: "Uzbekistan" },
    students: "≈6,249 total (Fall 2020), including ≈5,441 undergrad",
    facilities: [
      "6 faculties",
      "52 departments",
      "Multidisciplinary Clinic",
      "Branch campuses in Urgench, Fergana, Termez",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Clinical Research",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: {
      national: "",
      global: "THE ranked 301+ in Medicine & Health Sciences (2020)",
      source: "Times Higher Education",
    },
    notes: "",
  },

  {
    id: "samarkand-state-medical-university",
    name: "Samarkand State Medical University",
    imageUrl: "/images/university/Samarkand.jpeg",
    established:
      "Founded May 1930 (as Medical Institute) → University status in April 2022",
    type: "Public Medical University",
    accreditation: ["WHO", "NMC", "ECFMG", "WDOMS", "ECAQA (valid until 2030)"],
    address: { country: "Uzbekistan" },
    students: "≈13,223 total, including ≈3,282 international students",
    facilities: [
      "9 faculties",
      "74 departments",
      "1,190 classrooms",
      "300,000+ digital library publications",
      "Clinics with 375 and 200 beds each",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "General Medicine",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Clinical Research",
    ],
    admissions: {
      requirements: ["NEET, 50% in PCB, Age ≥17 (India, generalized)"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "One of oldest medical institutions in Central Asia; transitioned to University in 2022; strong infrastructure and international accreditation.",
  },

  // ---------------- GEORGIA ----------------
  {
    id: "tbilisi-state-medical-university",
    name: "Tbilisi State Medical University",
    imageUrl: "/images/university/Tbilisi.jpeg",
    established: 1918,
    type: "Public Medical University",
    accreditation: ["WHO", "NMC", "WDOMS", "FAIMER", "ECFMG"],
    address: { country: "Georgia" },
    students: "≈8,500 (including 1,200 international students)",
    facilities: [
      "Teaching Hospital",
      "Modern Labs",
      "Library",
      "Hostels",
      "Research Centers",
    ],
    programs: [
      { level: "UG", name: "MBBS", durationYears: 6 },
      { level: "UG", name: "Dentistry", durationYears: 5 },
      { level: "PG", name: "MD Specializations", durationYears: 3 },
    ],
    facility: ["MBBS", "Dentistry", "Research", "Clinical Training"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 1, global: 4200, source: "WDOMS" },
    notes:
      "Oldest medical university in Georgia; offers English-medium programs for international students.",
  },

  {
    id: "batumi-shota-rustaveli-university",
    name: "Batumi Shota Rustaveli State University - Medical Faculty",
    imageUrl: "/images/university/Batumi.jpeg",
    established: 1923,
    type: "Public Medical University",
    accreditation: ["WHO", "NMC", "WDOMS", "FAIMER"],
    address: { country: "Georgia" },
    students: "≈2,500 (including international students)",
    facilities: ["Medical Labs", "Hospital Affiliations", "Library", "Hostels"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 6 }],
    facility: ["MBBS", "Clinical Training", "Research"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: 3, global: "", source: "" },
    notes:
      "Offers medical programs with clinical exposure and international collaborations.",
  },

  {
    id: "caucasus-international-university",
    name: "Caucasus International University - Faculty of Medicine",
    imageUrl: "/images/university/caucasus.jpeg",
    established: 1998,
    type: "Private Medical University",
    accreditation: ["WHO", "NMC", "FAIMER", "WDOMS"],
    address: { country: "Georgia" },
    students: "≈1,800 (including international students)",
    facilities: ["Simulation Labs", "Teaching Hospital", "Library", "Hostels"],
    programs: [{ level: "UG", name: "MBBS", durationYears: 6 }],
    facility: ["MBBS", "Clinical Training", "Research"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Private medical university offering English-medium MBBS program with modern facilities.",
  },

  // ---------------- KYRGYZSTAN ----------------
  {
    id: "osh-international-medical-university",
    name: "Osh International Medical University",
    imageUrl: "/images/university/Osh.jpeg",
    established: "2019",
    type: "Public Medical University",
    accreditation: ["WHO", "FAIMER", "WDOMS"],
    address: { country: "Kyrgyzstan" },
    students: "≈250+ international students",
    facilities: [
      "Hostels",
      "Campus facilities",
      "Collaborations with international universities",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "MBBS",
      "Clinical Training",
      "Research Labs",
      "Hostels",
      "Library",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Largest medical institution in southern Kyrgyzstan; accredited by Ministries of Education & Public Health; listed in WFME/FAIMER and World Directory. International student body from multiple countries.",
  },

  {
    id: "kyrgyz-national-university-knu",
    name: "Kyrgyz National University (KNU)",
    imageUrl: "/images/university/Kyrgyz.jpeg",
    established: "1925",
    type: "State University (with newly established medical faculty)",
    accreditation: ["WHO", "NMC", "ECFMG", "FAIMER", "WDOMS"],
    address: { country: "Kyrgyzstan" },
    students: "≈N/A (medical faculty established 2023)",
    facilities: ["Medical faculty classrooms", "Labs", "Affiliated hospitals"],
    programs: [{ level: "UG", name: "MD (Physician)", durationYears: 6 }],
    facility: [
      "MD",
      "Clinical Training",
      "Research Labs",
      "Hostels",
      "Library",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Founded 1925; medical faculty (MD Physician program) launched in 2023 with Yenepoya collaboration; curriculum recognized by NMC, USMLE, UKMLE, ECFMG.",
  },

  {
    id: "international-university-of-science-and-medicine",
    name: "International University of Science and Medicine (IUSM)",
    imageUrl: "/images/university/IUSM.jpeg",
    established: "2020",
    type: "Private Medical University",
    accreditation: ["WHO", "NMC", "FAIMER", "WDOMS", "AMUKR"],
    address: { country: "Kyrgyzstan" },
    students: "≈N/A",
    facilities: ["Practical centre with modern equipment"],
    programs: [
      { level: "UG", name: "MD (equivalent to MBBS)", durationYears: 5 },
    ],
    facility: ["MD", "Clinical Training", "Labs", "Library", "Hostels"],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Largest medical school in Kyrgyz Republic; English-medium 5-year MD program; modern curriculum and interdisciplinary training.",
  },

  {
    id: "international-medical-university-imu",
    name: "International Medical University (IMU)",
    imageUrl: "/images/university/IMU.jpeg",
    established: "2003",
    type: "Private Medical University",
    accreditation: [
      "WHO",
      "MCI",
      "FAIMER",
      "ECFMG",
      "IMED",
      "WDOMS",
      "PMDC",
      "European Universities Association",
    ],
    address: { country: "Kyrgyzstan" },
    students: "≈N/A",
    facilities: [
      "Clinical skills labs",
      "Hostels",
      "Affiliated hospitals in Bishkek",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 5 },
      {
        level: "UG+Internship",
        name: "MBBS (with 1-year internship)",
        durationYears: 5.5,
      },
    ],
    facility: ["MBBS", "Internship", "Clinical Training", "Labs", "Hostels"],
    admissions: { requirements: ["NEET", "50% in PCB", "Age ≥ 17"] },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Accredited by Kyrgyz Ministries, WHO, MCI, PMDC, FAIMER, ECFMG, among others; English/Russian medium; affordable; clinical rotations in top Bishkek hospitals.",
  },

  // ---------------- KAZAKHSTAN ----------------
  {
    id: "semey-state-medical-university",
    name: "Semey State Medical University",
    imageUrl: "/images/university/Semey.jpeg",
    established: "1953 (founded Sept 1)",
    type: "Public Medical University",
    accreditation: ["WHO", "FAIMER", "WDOMS"],
    address: { country: "Kazakhstan" },
    students: "≈5,984 total",
    facilities: [
      "University hospital",
      "Educational & Clinical Center with simulation labs",
      "Branches in Pavlodar & Ust-Kamenogorsk",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "MBBS",
      "Clinical Training",
      "Simulation Labs",
      "Library",
      "Hostels",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "First public medical institution in Central Asia to offer English-taught track from 1998.",
  },

  {
    id: "west-kazakh-state-medical-university",
    name: "West Kazakh State Medical University",
    imageUrl: "/images/university/West-Kazakh.jpeg",
    established: "",
    type: "Public Medical University",
    accreditation: ["WHO", "WDOMS", "FAIMER"],
    address: { country: "Kazakhstan" },
    students: "≈500+ international students (reported)",
    facilities: ["State-of-the-art library", "5 teaching hospitals"],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: ["MBBS", "Clinical Training", "Labs", "Library", "Hostels"],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Leading institution shaping regional healthcare; innovative curriculum and hands-on training.",
  },

  {
    id: "astana-medical-university",
    name: "Astana Medical University",
    imageUrl: "/images/university/Astana.jpeg",
    established:
      "1964 (as Tselinograd State Medical Institute) → University status in 2009",
    type: "Public Medical University",
    accreditation: ["WHO", "NMC", "WDOMS"],
    address: { country: "Kazakhstan" },
    students: "≈5,185",
    facilities: [
      "7 faculties (Internal Medicine, Dentistry, Nursing, Pharmacy, etc.)",
      "873 teachers",
      "112 Doctors of Medical Science",
      "Postgraduate & PhD programs",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "MBBS",
      "Clinical Training",
      "Postgraduate Programs",
      "Labs",
      "Library",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: {
      national: "Rank 6 in country",
      global: "rank 32 (as claimed)",
      source: "SelectYourUniversity",
    },
    notes:
      "Dynamically developing; academic partners in USA, Singapore, Europe; MBBS annual fee ≈ $5,600.",
  },

  {
    id: "al-farabi-kazakh-national-medical-university",
    name: "Al-Farabi Kazakh National Medical University",
    imageUrl: "/images/university/Al-Farabi.jpeg",
    established: "",
    type: "Public University (Medical Faculty)",
    accreditation: ["WHO", "WDOMS"],
    address: { country: "Kazakhstan" },
    students: "≈N/A",
    facilities: [""],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: ["MBBS", "Clinical Training", "Labs", "Library", "Hostels"],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "" },
    notes:
      "Highly reputed; some concerns from international students about medical track reputation and evaluation.",
  },

  {
    id: "asfendiyarov-kazakh-national-medical-university",
    name: "Asfendiyarov Kazakh National Medical University",
    imageUrl: "/images/university/Kazakh.jpeg",
    established: "1930 (opened), named national university in 2001",
    type: "National Medical University",
    accreditation: ["WHO", "NMC", "FAIMER", "ECFMG", "WDOMS"],
    address: { country: "Kazakhstan" },
    students: "≈11,000",
    facilities: [
      "Faculties: General Medicine, Therapeutics, Pediatrics, Pharmacy, Stomatology, Public Health & Management",
      "PhD & postgraduate programs",
    ],
    programs: [
      { level: "UG", name: "MBBS (General Medicine)", durationYears: 6 },
    ],
    facility: [
      "MBBS",
      "Clinical Training",
      "Postgraduate Programs",
      "Labs",
      "Library",
    ],
    admissions: {
      requirements: ["NEET / Equivalent", "50% in PCB", "Age ≥ 17"],
    },
    rankings: { national: "", global: "", source: "THE profile" },
    notes:
      "Founded 1930/31; one of the oldest; has trained thousands; every third doctor in Kazakhstan is its alumnus.",
  },
];
