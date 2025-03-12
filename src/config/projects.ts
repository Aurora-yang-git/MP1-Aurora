// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Math Kangaroo Gold Award',
    description: '',
    date: '2024',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'Star of the month',
    description: '',
    date: '2024/4',
    location: 'SCLS, Shanghai',
  },
  {
    name: "First place in the women's 800 meters at the sports meet",
    description: '',
    date: '2024/10',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'Best debater at the Reading Festival',
    description: '',
    date: '2024/12',
    location: 'SCLS, Shanghai',
  }
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'IT Final Project',
    description: 'Homework Reminder',
    link: { href: 'https://www.scls-cs.com/final/project_Yang_Yixuan_1736476585534/index.html', label: 'Website' },
    tags: ['Website', 'JavaScript', 'Time Management']
  },
  {
    name: 'Lane detection technology based on deep learning',
    description: 'Huawei Cloud Young Developer Program',
    link: { href: 'https://auth.huaweicloud.com/', label: 'Hackathon' },
    tags: ['ModelArts', 'YOLO']
  },
  {
    name: 'AI Camp',
    description: 'Studying a comprehensive AI curriculum for high school students, incorporating real-world projects and startup concepts.',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: 'View Course' },
    tags: ['Education', 'AI']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Reading',
    description: "My family and I have held reading sessions, strengthening our growth and bond; this year, we aim to read 30 books and write more reflections.",
    date: '2022 ~ Present',
    location: 'Shanghai'
  },
  {
    name: 'Skiing',
    description:
      "A hobby I've enjoyed for six years. This year, I had an amazing experience skiing at Hemu Ski Resort, which made me appreciate the sport even more.",
    date: '2019 ~ Present',
    location: 'Shanghai'
  },
  {
    name: 'Playing the Piano',
    description:
      'I’ve always enjoyed playing the piano, but I’ve rarely practiced since starting high school. Still, it has definitely refined my sense of aesthetics.',
    date: '2014 ~ 2024',
    location: 'Shanghai'
  }
]
