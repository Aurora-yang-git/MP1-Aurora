export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Aurora Yang'
export const headline = 'Student at Shanghai Soong Ching Ling School.'
export const introduction =
  "Coucou Les Amis! My name is Aurora Yang. I'm from Shanghai and an alumnus of ShiXi and GL. I’ve been Studying at SCLS since 2024."
export const email = '202760123@stu.scls-sh.org'
export const githubUsername = 'Aurora-yang-git'

// about page
export const aboutMeHeadline = 'Who Am I and Why Should You Care?'
export const aboutParagraphs = [
  "Hello! My name is Aurora Yang. I'm from Shanghai and currently a first-year high school student. I have a strong interest in physics, computer science, and artificial intelligence, especially in exploring the principles behind how the world works and using that knowledge to benefit humanity.",
  "Currently, I'm working on a math modeling paper and an AI-related project now. I'm also passionate about learning, especially science. I have read many books related to sociology, psychology, science fiction, and science.",
  "I started this blog to share the insights I gain from my studies and projects. Most of my posts focus on science, AI, and education, but I also enjoy reflecting on life lessons and personal growth."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Email',
    icon: 'email',
    href: `mailto:${email}`,
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/1768246344',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
