import { PortfolioData } from '../types.ts';

const data: PortfolioData = {
  "hero": {
    "name": "Golla Pujari Tharun",
    "role": "Computer Science Graduate",
    "tagline": "Building Scalable Web Apps & Data-Driven Solutions",
    "cta": {
      "resume": "/resume.pdf",
      "github": "https://github.com/tharunvicky",
      "linkedin": "https://linkedin.com/in/tharungolla7",
      "email": "mailto:tharunvicky752@gmail.com"
    }
  },
  "about": {
    "description": [
      "I’m a Computer Science graduate with a strong interest in building practical, user-focused software and working with data to derive meaningful insights. My core strengths lie in Python, SQL, and modern web technologies, and I enjoy applying these skills to solve real-world problems through well-structured, maintainable solutions.",
      "On the development side, I have hands-on experience building full-stack web applications using Django, HTML, CSS, and relational databases. I’m comfortable designing backend logic, implementing CRUD operations, and structuring applications using clean architectural patterns. I value writing readable code and continuously improving it through refactoring and learning best practices.",
      "Alongside development, I actively work with data analysis tools such as Python (pandas, NumPy), SQL, Excel, and Power BI. I have experience performing exploratory data analysis, building dashboards, and applying basic machine learning techniques to uncover patterns and support data-driven decision making.",
      "I approach learning with consistency and curiosity, focusing on fundamentals while staying open to new tools and technologies. I’m looking for an entry-level opportunity where I can contribute to real projects, collaborate with experienced professionals, and grow into a well-rounded software engineer or data professional over time."
    ]
  },
  "skills": {
    "languages": ["Python", "SQL", "HTML", "CSS", "JavaScript"],
    "frameworks": ["Django", "scikit-learn", "Matplotlib", "React"],
    "databases": ["MySQL", "RDBMS"],
    "tools": ["Power BI", "Jupyter Notebook", "Git", "GitHub", "VS Code"]
  },
  "projects": [
    {
      "title": "Car Rental Web Application",
      "description": "A full-stack car rental platform enabling users to search, book, and manage vehicle rentals through a structured web interface.",
      "techStack": ["Django", "MySQL", "HTML/CSS", "Python"],
      "points": [
        "Implemented backend logic using Django and managed data persistence with MySQL.",
        "Ensured smooth end-to-end user workflows from booking initiation to confirmation.",
        "Designed a responsive frontend for seamless user experience."
      ],
      "githubLink": "https://github.com/tharunvicky"
    },
    {
      "title": "Uber Trip Data Analysis",
      "description": "Data analysis project identifying trends in trip frequency, duration, and demand cycles using Python libraries.",
      "techStack": ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      "points": [
        "Conducted data cleaning and exploratory analysis to identify key market trends.",
        "Applied basic predictive modeling techniques to estimate trip durations.",
        "Visualized insights to communicate findings effectively to stakeholders."
      ],
      "githubLink": "https://github.com/tharunvicky"
    },
    {
      "title": "Personal Portfolio Website",
      "description": "Clean, single-page portfolio website showcasing projects, skills, achievements, and professional background in a recruiter-friendly format.",
      "techStack": ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
      "points": [
        "Designed and developed a responsive single-page application using component-based architecture and modern frontend best practices.",
        "Implemented dynamic content rendering using a centralized JSON configuration to enable easy updates without modifying UI components.",
        "Enhanced user experience with subtle animations, smooth navigation, and optimized performance for fast recruiter scanning."
      ],
      "githubLink": "https://github.com/tharunvicky"
    },
    {
      "title": "Sales Analytics Dashboard",
      "description": "Professional Power BI dashboard to track and analyze sales performance across regions and time periods.",
      "techStack": ["Power BI", "DAX", "Data Modeling"],
      "points": [
        "Integrated cleaned datasets and designed intuitive visuals to support business insights.",
        "Improved accessibility of data-driven insights for decision-making.",
        "Created interactive filters for regional performance tracking."
      ],
      "githubLink": "https://github.com/tharunvicky"
    }
  ],
  "achievements": {
    "cgpa": "8.10/10.0",
    "certificationsCount": "3+",
    "projectsCount": "3+",
    "githubRepos": "10+"
  },
  "certifications": [
    {
      "title": "Python for Data Analysis",
      "platform": "Online Certification",
      "link": "#"
    },
    {
      "title": "SQL Fundamentals",
      "platform": "Online Certification",
      "link": "#"
    },
    {
      "title": "Introduction to IoT",
      "platform": "NPTEL",
      "link": "#"
    }
  ],
  "footer": {
    "github": "https://github.com/tharunvicky",
    "linkedin": "https://linkedin.com/in/tharungolla7",
    "email": "mailto:tharunvicky752@gmail.com",
    "copyright": "@ Golla Pujari Tharun."
  }
};

export default data;