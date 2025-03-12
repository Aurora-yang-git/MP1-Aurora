// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Shanghai Soong Ching Ling School',
      title: 'Class Monitor',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'Shanghai Soong Ching Ling School',
      title: 'Member of the Communist Youth League',
      logo: 'bank',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'Shixi Junior High School',
      title: '组织委员',
      logo: 'coffee',
      start: '2020',
      end: '2024'
    },
    {
      company: 'Guannong Xincun Primary School',
      title: 'Young Pioneers of China squadron member',
      logo: 'coffee',
      start: '2015',
      end: '2020'
    },
  ]