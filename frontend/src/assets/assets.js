import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Academic Advising',
        image: General_physician
    },
    {
        speciality: 'Project Supervising',
        image: Gynecologist
    },
    {
        speciality: 'Assignment Support',
        image: Dermatologist
    },
    {
        speciality: 'Career Guidance',
        image: Pediatricians
    },
    {
        speciality: 'Personal Tutoring',
        image: Neurologist
    },
    {
        speciality: 'Student Support',
        image: Gastroenterologist
    },
]

export const lecturers = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'Academic Advising',
    degree: 'SE123',
    experience: '4 Years',
    about: 'Has a strong commitment to supporting students through academic guidance, consultation sessions, and professional mentoring. Focuses on helping students overcome challenges, improve their skills, and achieve their educational goals. Has a strong commitment to supporting students through academic guidance, consultation sessions, and professional mentoring.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc2',
    name: 'Ms. Emily Larson',
    image: doc2,
    speciality: 'Project Supervising',
    degree: 'SE124',
    experience: '3 Years',
    about: 'Provides guidance for student projects, helping learners develop research, planning, and implementation skills. Encourages critical thinking, teamwork, and effective problem-solving throughout academic projects and coursework.',
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'Assignment Support',
    degree: 'SE125',
    experience: '1 Year',
    about: 'Supports students in understanding coursework requirements, improving academic writing, and strengthening analytical skills. Focuses on helping learners complete assignments effectively while developing independent learning habits.',
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc4',
    name: 'Mr. Christopher Lee',
    image: doc4,
    speciality: 'Career Guidance',
    degree: 'SE126',
    experience: '2 Years',
    about: 'Assists students in exploring career opportunities, preparing professional documents, and planning their future paths. Encourages confidence and informed decision-making for long-term career success.',
    fees: 40,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc5',
    name: 'Ms. Jennifer Garcia',
    image: doc5,
    speciality: 'Career Guidance',
    degree: 'SE126',
    experience: '4 Years',
    about: 'Works closely with students to identify career interests, strengthen employability skills, and prepare for professional opportunities. Promotes personal growth and career readiness through practical advice.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'Student Support',
    degree: 'SE127',
    experience: '4 Years',
    about: 'Provides support to students facing academic or personal challenges, helping them maintain progress and wellbeing. Focuses on creating a positive learning environment and student success.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc7',
    name: 'Mr. Christopher Davis',
    image: doc7,
    speciality: 'Computing',
    degree: 'SE128',
    experience: '4 Years',
    about: 'Specializes in computing concepts and practical applications, helping students build technical skills and industry knowledge. Encourages innovation, creativity, and problem-solving through hands-on learning.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'Business',
    degree: 'SE129',
    experience: '3 Years',
    about: 'Guides students in understanding business principles, management practices, and professional communication. Supports the development of analytical and leadership skills for future careers.',
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc9',
    name: 'Ms. Ava Mitchell',
    image: doc9,
    speciality: 'Engineering',
    degree: 'SE130',
    experience: '1 Year',
    about: 'Helps students develop engineering knowledge through practical problem-solving and technical understanding. Focuses on applying theoretical concepts to real-world challenges and projects.',
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc10',
    name: 'Mr. Jeffrey King',
    image: doc10,
    speciality: 'Mathematics',
    degree: 'SE131',
    experience: '2 Years',
    about: 'Supports students in strengthening mathematical reasoning, analytical thinking, and quantitative skills. Encourages confidence in solving complex problems through structured learning approaches.',
    fees: 40,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Zoe Kelly',
    image: doc11,
    speciality: 'Research Methods',
    degree: 'SE132',
    experience: '4 Years',
    about: 'Assists students in developing research skills, data collection techniques, and academic writing abilities. Promotes ethical practices and critical evaluation throughout the research process.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Patrick Harris',
    image: doc12,
    speciality: 'Research Methods',
    degree: 'SE132',
    experience: '4 Years',
    about: 'Provides guidance on research design, methodology selection, and data analysis techniques. Supports students in producing high-quality academic work and meaningful research outcomes.',
    fees: 50,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc13',
    name: 'Ms. Chloe Evans',
    image: doc13,
    speciality: 'Computing',
    degree: 'SE133',
    experience: '4 Years',
    about: 'Supports students in software development, programming concepts, and technology-related coursework. Encourages practical learning experiences and the development of professional technical skills.',
    fees: 50,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc14',
    name: 'Mr. Ryan Martinez',
    image: doc14,
    speciality: 'Business',
    degree: 'SE134',
    experience: '3 Years',
    about: 'Helps students understand business strategies, organizational management, and entrepreneurship concepts. Focuses on preparing learners for dynamic professional environments and leadership roles.',
    fees: 60,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc15',
    name: 'Ms. Amelia Hill',
    image: doc15,
    speciality: 'Engineering',
    degree: 'SE135',
    experience: '1 Year',
    about: 'Guides students through engineering fundamentals, design principles, and project-based learning activities. Encourages innovation, collaboration, and practical application of technical knowledge.',
    fees: 30,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  }
]