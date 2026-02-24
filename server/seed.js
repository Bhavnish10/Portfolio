require('dotenv').config();
const mongoose = require('mongoose');

const Education = require('./models/Education');
const Experience = require('./models/Experience');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Achievement = require('./models/Achievement');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI in environment');
  process.exit(1);
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, { autoIndex: true });

    await Promise.all([
      Education.deleteMany({}),
      Experience.deleteMany({}),
      Project.deleteMany({}),
      Skill.deleteMany({}),
      Achievement.deleteMany({})
    ]);

    await Education.insertMany([
      {
        degree: 'MBA – Finance',
        institution: 'Institute of Management, Nirma University',
        period: '2025 – 2027',
        order: 0
      },
      {
        degree: 'B.Tech – Computer Science and Engineering',
        institution: 'Institute of Technology, Nirma University',
        period: 'CGPA: 82.90%',
        score: '82.90%',
        order: 1
      },
      {
        degree: 'XII – CBSE',
        institution: 'CBSE Board',
        period: 'Percentage: 92.80%',
        score: '92.80%',
        order: 2
      },
      {
        degree: 'X – CBSE',
        institution: 'CBSE Board',
        period: 'Percentage: 91.80%',
        score: '91.80%',
        order: 3
      }
    ]);

    await Experience.insertMany([
      {
        role: 'Power BI Intern',
        company: 'Cognifyz Technologies',
        period: 'Internship',
        responsibilities: [
          'Developed interactive Power BI dashboards for business stakeholders',
          'Performed data cleaning and transformation for analytics-ready datasets',
          'Analyzed investment patterns and user behavior to derive insights',
          'Presented data-driven recommendations to support decision making'
        ],
        order: 0
      }
    ]);

    await Project.insertMany([
      {
        title: 'Android Malware Detection Framework',
        description:
          'Machine Learning and Explainable AI based framework for detecting Android malware with 97% accuracy. Research-level project combining ML, XAI, and data analytics.',
        techStack: ['Python', 'Machine Learning', 'XAI', 'Data Analytics'],
        githubUrl: 'https://github.com/Bhavnish10',
        imageUrl: '',
        featured: true,
        order: 0
      },
      {
        title: 'Research Publication – ICIT Bangkok',
        description:
          'Academic research publication presented at ICIT Bangkok, contributing to the intersection of technology and innovation.',
        techStack: ['Research', 'Data Analytics', 'Academic Writing'],
        githubUrl: '',
        imageUrl: '',
        featured: false,
        order: 1
      }
    ]);

    await Skill.insertMany([
      // Technical Skills
      { name: 'Power BI', category: 'Technical', order: 0 },
      { name: 'Machine Learning', category: 'Technical', order: 1 },
      { name: 'Data Analytics', category: 'Technical', order: 2 },
      { name: 'Data Visualization', category: 'Technical', order: 3 },
      // Finance Skills
      { name: 'Financial Analysis', category: 'Finance', order: 0 },
      { name: 'Equity Research', category: 'Finance', order: 1 },
      { name: 'Investment Analysis', category: 'Finance', order: 2 },
      // Languages & Frameworks
      { name: 'C++', category: 'Language', order: 0 },
      { name: 'Python', category: 'Language', order: 1 },
      { name: 'JavaScript', category: 'Language', order: 2 },
      { name: 'Kotlin', category: 'Language', order: 3 },
      { name: 'SQL', category: 'Language', order: 4 },
      { name: 'ML', category: 'Language', order: 5 },
      { name: 'Deep Learning', category: 'Language', order: 6 },
      { name: 'Java', category: 'Language', order: 7 },
      { name: 'R', category: 'Language', order: 8 },
      // Tools
      { name: 'Excel', category: 'Tool', order: 0 },
      { name: 'Git', category: 'Tool', order: 1 },
      { name: 'GitHub', category: 'Tool', order: 2 },
      { name: 'Power BI', category: 'Tool', order: 3 }
    ]);

    await Achievement.insertMany([
      {
        title: 'Top 10 – HackNUthon 6.0',
        description: '',
        order: 0
      },
      {
        title: 'Smart India Hackathon – Top 1400 teams',
        description: '',
        order: 1
      },
      {
        title: 'MINeD Hackathon participant',
        description: '',
        order: 2
      },
      {
        title: 'Research publication – ICIT Bangkok',
        description: '',
        order: 3
      },
      {
        title: 'Alteryx Designer Core Certified',
        description: '',
        order: 4
      }
    ]);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();

