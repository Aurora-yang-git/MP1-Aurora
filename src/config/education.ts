
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'SCLS',
      major: 'Senior High School',
      logo: 'college',
      start: '2024',
      end: '2027'
    },
    {
      school: '上海市市西初级中学',
      major: 'Junior High School',
      logo: 'college',
      start: '2020',
      end: '2024'
    },
    {
      school: '管弄新村小学',
      major: 'Primary school',
      logo: 'college',
      start: '2015',
      end: '2020'
    },
  ]