export interface NCOJob {
  Level: string;
  ISCO_08_code: string;
  Title_EN: string;
  Definition: string;
  Classification_Type: string;
  Hierarchy_Level: string;
  Skills_Required?: string[];
  Employment_Sectors?: string[];
  Related_Occupations?: string[];
}

export const ncoData: NCOJob[] = [
  {
    "Level": "1",
    "ISCO_08_code": "1",
    "Title_EN": "Managers",
    "Definition": "Managers plan, direct, coordinate and evaluate the overall activities of enterprises, governments and other organizations, or of organizational units within them, and formulate and review their policies, laws, rules and regulations.",
    "Classification_Type": "Major Group",
    "Hierarchy_Level": "Level 1",
    "Skills_Required": ["Leadership", "Strategic Planning", "Decision Making", "Communication"],
    "Employment_Sectors": ["Government", "Private Sector", "Non-Profit Organizations"],
    "Related_Occupations": ["Executives", "Directors", "Administrators"]
  },
  {
    "Level": "2",
    "ISCO_08_code": "11",
    "Title_EN": "Chief Executives, Senior Officials and Legislators",
    "Definition": "Chief executives, senior officials and legislators formulate and review policies, and plan, direct, coordinate and evaluate the overall activities of enterprises, governments and other organizations.",
    "Classification_Type": "Sub-major Group",
    "Hierarchy_Level": "Level 2",
    "Skills_Required": ["Policy Formulation", "Strategic Leadership", "Governance", "Public Administration"],
    "Employment_Sectors": ["Government", "Parliament", "Corporate Leadership"],
    "Related_Occupations": ["Cabinet Ministers", "CEOs", "Board Members"]
  },
  {
    "Level": "3",
    "ISCO_08_code": "111",
    "Title_EN": "Legislators and Senior Officials",
    "Definition": "Legislators and senior officials determine, formulate, advise on and direct the implementation of policies of national, state, regional or local governments or communities, and of special interest organizations.",
    "Classification_Type": "Minor Group",
    "Hierarchy_Level": "Level 3",
    "Skills_Required": ["Legislative Procedures", "Policy Analysis", "Negotiation", "Public Speaking"],
    "Employment_Sectors": ["Parliament", "State Assemblies", "Local Government"],
    "Related_Occupations": ["MPs", "MLAs", "Councilors"]
  },
  {
    "Level": "4",
    "ISCO_08_code": "1111",
    "Title_EN": "Legislators",
    "Definition": "Legislators determine, formulate, and direct policies of national, state, regional or local governments and international governmental agencies, and make, ratify, amend or repeal laws, public rules and regulations.",
    "Classification_Type": "Unit Group",
    "Hierarchy_Level": "Level 4",
    "Skills_Required": ["Law Making", "Constitutional Knowledge", "Debate Skills", "Community Representation"],
    "Employment_Sectors": ["Lok Sabha", "Rajya Sabha", "State Assemblies"],
    "Related_Occupations": ["Members of Parliament", "Assembly Members"]
  },
  {
    "Level": "4",
    "ISCO_08_code": "1112",
    "Title_EN": "Senior Government Officials",
    "Definition": "Senior government officials formulate, advise on and direct the implementation of government policies and plan, direct, coordinate and evaluate the overall activities of government departments and agencies.",
    "Classification_Type": "Unit Group",
    "Hierarchy_Level": "Level 4",
    "Skills_Required": ["Public Administration", "Policy Implementation", "Administrative Law", "Project Management"],
    "Employment_Sectors": ["Central Government", "State Government", "Public Sector"],
    "Related_Occupations": ["IAS Officers", "IPS Officers", "Secretaries"]
  },
  {
    "Level": "4",
    "ISCO_08_code": "1113",
    "Title_EN": "Traditional Chiefs and Heads of Villages",
    "Definition": "Traditional chiefs and heads of villages perform various ceremonial, administrative and religious functions within a traditional structure and represent their communities in dealings with other communities and with government.",
    "Classification_Type": "Unit Group",
    "Hierarchy_Level": "Level 4",
    "Skills_Required": ["Traditional Knowledge", "Community Leadership", "Conflict Resolution", "Cultural Preservation"],
    "Employment_Sectors": ["Rural Administration", "Tribal Areas", "Village Panchayats"],
    "Related_Occupations": ["Village Headmen", "Tribal Leaders", "Panchayat Leaders"]
  },
  {
    "Level": "2",
    "ISCO_08_code": "12",
    "Title_EN": "Administrative and Commercial Managers",
    "Definition": "Administrative and commercial managers plan, direct, coordinate and evaluate the administrative and commercial activities of enterprises and organizations, or of organizational units within them.",
    "Classification_Type": "Sub-major Group",
    "Hierarchy_Level": "Level 2",
    "Skills_Required": ["Business Administration", "Commercial Operations", "Team Management", "Financial Planning"],
    "Employment_Sectors": ["Corporate Sector", "Manufacturing", "Services", "Retail"],
    "Related_Occupations": ["General Managers", "Operations Managers", "Business Unit Heads"]
  },
  {
    "Level": "3",
    "ISCO_08_code": "121",
    "Title_EN": "Business Services and Administration Managers",
    "Definition": "Business services and administration managers plan, direct, coordinate and evaluate business support services such as administration, financial planning, accounting, public relations, human resources and supply chain management.",
    "Classification_Type": "Minor Group",
    "Hierarchy_Level": "Level 3",
    "Skills_Required": ["Service Management", "Process Optimization", "Vendor Management", "Quality Control"],
    "Employment_Sectors": ["IT Services", "Consulting", "Business Process Outsourcing"],
    "Related_Occupations": ["Service Delivery Managers", "Business Analysts"]
  },
  {
    "Level": "1",
    "ISCO_08_code": "2",
    "Title_EN": "Professionals",
    "Definition": "Professionals increase the existing stock of knowledge; apply scientific or artistic concepts and theories; teach about the foregoing in a systematic manner; or engage in any combination of these activities.",
    "Classification_Type": "Major Group",
    "Hierarchy_Level": "Level 1",
    "Skills_Required": ["Specialized Knowledge", "Analytical Thinking", "Problem Solving", "Research"],
    "Employment_Sectors": ["Education", "Healthcare", "Research", "Consulting"],
    "Related_Occupations": ["Doctors", "Engineers", "Teachers", "Scientists"]
  },
  {
    "Level": "2",
    "ISCO_08_code": "21",
    "Title_EN": "Science and Engineering Professionals",
    "Definition": "Science and engineering professionals conduct research; improve or develop concepts, theories and operational methods; and apply scientific knowledge relating to physics, astronomy, meteorology, chemistry, geophysics, geography, geology, mathematics, statistics, computing, architecture, engineering and technology.",
    "Classification_Type": "Sub-major Group",
    "Hierarchy_Level": "Level 2",
    "Skills_Required": ["Scientific Method", "Technical Analysis", "Innovation", "Mathematical Modeling"],
    "Employment_Sectors": ["R&D", "Manufacturing", "Construction", "Technology"],
    "Related_Occupations": ["Research Scientists", "Design Engineers", "Architects"]
  },
  {
    "Level": "3",
    "ISCO_08_code": "211",
    "Title_EN": "Physical and Earth Science Professionals",
    "Definition": "Physical and earth science professionals conduct research, improve or develop concepts, theories and operational methods, and apply scientific knowledge relating to physics, astronomy, meteorology, chemistry, geophysics, geography and geology.",
    "Classification_Type": "Minor Group",
    "Hierarchy_Level": "Level 3",
    "Skills_Required": ["Laboratory Techniques", "Data Analysis", "Scientific Writing", "Instrumentation"],
    "Employment_Sectors": ["Universities", "Government Labs", "Private Research"],
    "Related_Occupations": ["Physicists", "Chemists", "Geologists", "Meteorologists"]
  },
  {
    "Level": "4",
    "ISCO_08_code": "2111",
    "Title_EN": "Physicists and Astronomers",
    "Definition": "Physicists and astronomers conduct research into physical phenomena, the properties of matter and energy, and the relationship between them, and the structure and dynamics of the universe and its stellar contents.",
    "Classification_Type": "Unit Group",
    "Hierarchy_Level": "Level 4",
    "Skills_Required": ["Quantum Mechanics", "Theoretical Physics", "Data Modeling", "Telescope Operations"],
    "Employment_Sectors": ["Space Research", "Academic Institutions", "Defense Research"],
    "Related_Occupations": ["Research Physicists", "Space Scientists", "Observatory Scientists"]
  },
  {
    "Level": "2",
    "ISCO_08_code": "22",
    "Title_EN": "Health Professionals",
    "Definition": "Health professionals provide preventive, curative and rehabilitative health services based on an extensive body of theoretical and factual knowledge in diagnosis and treatment of disease and other health problems.",
    "Classification_Type": "Sub-major Group",
    "Hierarchy_Level": "Level 2",
    "Skills_Required": ["Medical Knowledge", "Diagnosis", "Patient Care", "Medical Ethics"],
    "Employment_Sectors": ["Hospitals", "Clinics", "Public Health", "Medical Research"],
    "Related_Occupations": ["Doctors", "Nurses", "Pharmacists", "Therapists"]
  },
  {
    "Level": "3",
    "ISCO_08_code": "221",
    "Title_EN": "Medical Doctors",
    "Definition": "Medical doctors diagnose, treat and prevent illness, disease, injury and other physical and mental impairments in humans through the application of the principles and procedures of modern medicine.",
    "Classification_Type": "Minor Group",
    "Hierarchy_Level": "Level 3",
    "Skills_Required": ["Clinical Medicine", "Surgery", "Patient Communication", "Emergency Care"],
    "Employment_Sectors": ["Healthcare System", "Private Practice", "Medical Education"],
    "Related_Occupations": ["General Practitioners", "Specialists", "Surgeons"]
  },
  {
    "Level": "4",
    "ISCO_08_code": "2211",
    "Title_EN": "Generalist Medical Practitioners",
    "Definition": "Generalist medical practitioners diagnose, treat and prevent illness, disease, injury and other physical and mental impairments and maintain general health in humans.",
    "Classification_Type": "Unit Group",
    "Hierarchy_Level": "Level 4",
    "Skills_Required": ["Primary Healthcare", "Preventive Medicine", "Family Medicine", "Community Health"],
    "Employment_Sectors": ["Primary Health Centers", "Community Health", "Family Practice"],
    "Related_Occupations": ["Family Doctors", "General Physicians", "Rural Medical Officers"]
  },
  {
    "Level": "1",
    "ISCO_08_code": "3",
    "Title_EN": "Technicians and Associate Professionals",
    "Definition": "Technicians and associate professionals perform mostly technical and related tasks connected with research and the application of scientific or artistic concepts and operational methods, and government or business regulations.",
    "Classification_Type": "Major Group",
    "Hierarchy_Level": "Level 1",
    "Skills_Required": ["Technical Skills", "Process Implementation", "Quality Assurance", "Technical Documentation"],
    "Employment_Sectors": ["Manufacturing", "Healthcare", "IT Support", "Government Services"],
    "Related_Occupations": ["Technical Assistants", "Para-professionals", "Support Staff"]
  },
  {
    "Level": "2",
    "ISCO_08_code": "31",
    "Title_EN": "Science and Engineering Associate Professionals",
    "Definition": "Science and engineering associate professionals perform technical tasks connected with research and the application of scientific or engineering concepts and operational methods, and ensure compliance with technical and safety regulations.",
    "Classification_Type": "Sub-major Group",
    "Hierarchy_Level": "Level 2",
    "Skills_Required": ["Technical Implementation", "Safety Compliance", "Equipment Operation", "Technical Support"],
    "Employment_Sectors": ["Engineering Firms", "Manufacturing", "Quality Control", "Technical Services"],
    "Related_Occupations": ["Technicians", "Technical Officers", "Laboratory Assistants"]
  },
  {
    "Level": "1",
    "ISCO_08_code": "4",
    "Title_EN": "Clerical Support Workers",
    "Definition": "Clerical support workers record, organize, store, compute and retrieve information, and perform a number of clerical duties in connection with money-handling operations, travel arrangements, requests for information and appointments.",
    "Classification_Type": "Major Group",
    "Hierarchy_Level": "Level 1",
    "Skills_Required": ["Data Entry", "Office Administration", "Customer Service", "Record Keeping"],
    "Employment_Sectors": ["Government Offices", "Corporate Sector", "Banks", "Educational Institutions"],
    "Related_Occupations": ["Office Clerks", "Data Entry Operators", "Administrative Assistants"]
  },
  {
    "Level": "1",
    "ISCO_08_code": "5",
    "Title_EN": "Service and Sales Workers",
    "Definition": "Service and sales workers provide personal and protective services related to travel, housekeeping, catering, personal care, protection against fire and unlawful acts; or demonstrate and sell goods in wholesale or retail shops and similar establishments.",
    "Classification_Type": "Major Group",
    "Hierarchy_Level": "Level 1",
    "Skills_Required": ["Customer Service", "Sales Techniques", "Personal Care", "Safety Procedures"],
    "Employment_Sectors": ["Retail", "Hospitality", "Security Services", "Personal Services"],
    "Related_Occupations": ["Sales Representatives", "Security Guards", "Service Providers"]
  }
];

export const getLevelColor = (level: string): string => {
  switch (level) {
    case '1':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case '2':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case '3':
      return 'bg-green-100 text-green-800 border-green-200';
    case '4':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getClassificationTypeLabel = (level: string): string => {
  switch (level) {
    case '1':
      return 'Major Group';
    case '2':
      return 'Sub-major Group';
    case '3':
      return 'Minor Group';
    case '4':
      return 'Unit Group';
    default:
      return 'Unknown';
  }
};