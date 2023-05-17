import Process1 from '../../assets/image/saasModern/browse.png';
import Process2 from '../../assets/image/saasModern/package.svg';
import Process3 from '../../assets/image/saasModern/website.png';

import FeatureIcon1 from '../../assets/image/saasModern/icon-1.png';
import FeatureIcon2 from '../../assets/image/saasModern/icon-2.png';
import FeatureIcon3 from '../../assets/image/saasModern/icon-3.png';
import FeatureIcon4 from '../../assets/image/saasModern/icon-4.png';
import FeatureIcon5 from '../../assets/image/saasModern/icon-5.png';
import FeatureIcon6 from '../../assets/image/saasModern/icon-6.png';

import Screenshot1 from '../../assets/image/saasModern/dash-3.png';
import Screenshot2 from '../../assets/image/saasModern/dash-4.png';
import Screenshot3 from '../../assets/image/saasModern/dash-5.png';
import Screenshot4 from '../../assets/image/saasModern/dash-6.png';

import AuthorOne from '../../assets/image/saasModern/author-1.jpg';
import AuthorTwo from '../../assets/image/saasModern/author-2.jpg';
import AuthorThree from '../../assets/image/saasModern/author-3.jpg';

import Google from '../../assets/image/saasModern/google.webp';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Features',
    path: '#feature_section',
    offset: '140',
  },
  {
    label: 'Process',
    path: '#process_section',
    offset: '0',
  },
  {
    label: 'Pricing',
    path: '#pricing_section',
    offset: '100',
  },
  {
    path: '#contact_section',
    label: 'Contact',
    offset: '50',
  },
  {
    label: 'Portfolio',
    path: '#portfolio_section',
    offset: '50',
  },

  
  {
    label: 'Testimonials',
    path: '#testimonial_section',
    offset: '70',
  },
  {
    label: 'FAQ',
    path: '#faq_section',
    offset: '50',
  },

];

export const PROCESS_ITEMS = [
  {
    image: Process1,
    title: 'Explore',
    description:
      'Explore our website and identify a package that fits your needs.',
  },
  {
    image: Process2,
    title: 'Choose Package',
    description:
      'Select the package and complete payment.',
  },
  {
    image: Process3,
    title: 'We Deliver Your Website',
    description:
      'Our team of web developers work on the project and deliver the website to you within the agreed-upon timeframe.',
  },

];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: false,
    name: 'Basic Website',
    description: 'Simple',
    price: '$59.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: 'https://buy.stripe.com/eVa8xndvwayn8HS14c',
    listItems: [
      {
        content: 'Basic Website Design',
      },
      {
        content: 'Deployment',
      },
      {
        content: 'On-Page SEO',
      },
      {
        content: 'Multiple Revisions',
      },
      {
        content: 'Up to 4 Pages',
      },
    ],
  },
  {
    name: 'Business Website',
    description: 'Medium Complexity',
    price: '$69.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: 'https://buy.stripe.com/aEUcNDcrsbCre2ccMO',
    listItems: [
      {
        content: 'Professional Website Design',
      },
      {
        content: 'Deployment',
      },
      {
        content: 'On-Page SEO',
      },
      {
        content: 'Multiple Revisions',
      },
      {
        content: 'Lead Generation API',
      },
      {
        content: 'Up to 7 Pages',
      },
    ],
  },
  {
    freePlan: true,
    name: 'Premium Website',
    description: 'High Complexity',
    price: '$89.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: 'https://buy.stripe.com/aEU00Rdvw5e37DO5kn',
    listItems: [
      {
        content: 'Premium Website Design',
      },
      {
        content: 'Deployment',
      },
      {
        content: 'On-Page SEO',
      },
      {
        content: 'Multiple Revisions',
      },
      {
        content: 'Lead Generation API',
      },
      {
        content: 'Blog',
      },
      
      {
        content: 'Up to 10 Pages',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
   
    name: 'Basic Website',
    description: 'Simple',
    price: '$499.99',
    priceLabel: 'One time',
    buttonLabel: 'BUY NOW',
    url: 'https://buy.stripe.com/aEUdRHfDEeOD8HS9AK',
    listItems: [
      {
        content: 'Basic Website Design',
      },
      {
        content: 'Deployment',
      },
      {
        content: 'On-Page SEO',
      },
      {
        content: 'Multiple Revisions',
      },
      {
        content: 'Up to 4 Pages',
      },
    ],
  },
  {
    name: 'Business Website',
    description: 'Medium Complexity',
    price: '$699.99',
    priceLabel: 'One time',
    buttonLabel: 'BUY NOW',
    url: 'https://buy.stripe.com/5kAfZPezA9ujf6gcMR',
    listItems: [
      {
        content: 'Professional Website Design',
      },
      {
        content: 'Deployment',
      },
      {
        content: 'On-Page SEO',
      },
      {
        content: 'Multiple Revisions',
      },
      {
        content: 'Lead Generation API',
      },
      {
        content: 'Up to 7 Pages',
      },
    ],
  },
  {
    freePlan: true,
    name: 'Premium Website Design',
    description: 'High Complexity',
    price: '$899.99',
    priceLabel: 'One time',
    buttonLabel: 'BUY NOW',
    url: 'https://buy.stripe.com/4gwbJz4Z0eOD2ju8wC',
    listItems: [
      {
        content: 'Website Design',
      },
      {
        content: 'Deployment',
      },
      {
        content: 'On-Page SEO',
      },
      {
        content: 'Multiple Revisions',
      },
      {
        content: 'Lead Generation API',
      },
      {
        content: 'Blog',
      },
      {
        content: 'Up to 10 Pages',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'What services does Site Dominion offer?',
    description:
      'Site Dominion offers a range of web development services with their packages. Services include website design, website development, SEO, blog creation and website copywriting.',
  },
  {
    title: 'What is the process for working with Site Dominion?',
    description:
      "Our three-step process is simple: First, the customer browses our website and selects a package that best fits their needs. Second, the customer makes the payment through our secure payment portal. Finally, our team of web developers creates the website according to the customer's specifications.",
  },
  {
    title: 'Can Site Dominion create custom website designs?',
    description:
      "Yes, Site Dominion can create custom website designs tailored to the customer's specific requirements. Our team of experienced designers will work closely with the customer to ensure that the website meets their expectations.",
  },
  {
    title: 'Does Site Dominion offer website hosting and maintenance services?',
    description:
      'Indeed, as part of our offerings, Site Dominion provides website hosting and maintenance services. Updates, backups, and security monitoring are just a few of the maintenance tasks we can take care of for your website.',
  },
  {
    title: ' How can I contact Site Dominion?',
    description:
      'You can get in touch with Site Dominion by phoning us, sending an email to our customer care team, or filling out the contact form on our website. If you have any queries about our services or the web development process, we are here to help.',
  },
  {
    title:'How long does it take to complete a website project?',
    description:
      "The length of time it takes to complete a website project depends on its complexity and the customer's package choice. Before beginning the job, our team will give an anticipated completion date, and we work quickly to guarantee on-time delivery."
  }

];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '/',
        text: 'Home',
      },
      {
        url: '#feature_section',
        text: 'Features',
      },
      {
        url: '#process_section',
        text: 'Process',
      },
      {
        url: '#pricing_section',
        text: 'Pricing',
      },
      {
        url: '#contact_section',
        text: 'Contact',
      },
      {
        url: '#portfolio_section',
        text: 'Portfolio',
      },
      {
        url: '#testimonials_section',
        text: 'Testimonials',
      },

      {
        url: '#faq_section',
        text: 'FAQ',
      }
    ],
  },
  {
    title: 'Our Information',
    menuItems: [

      {
        url: '/privacy-policy',
        text: 'Privacy Policy',
      },
    
    ],
  },
  
  
];

export const FEATURES = [
  {
    icon: FeatureIcon1,
    title: 'Priority On Outreach',
    description:
      "Site Dominion's 'Instant Quote' API and inherent on-page SEO features allow for customer acquisition with great efficiency.",
  },
  {
    icon: FeatureIcon2,
    title: 'Advanced Functionality',
    description:
      'Our websites are rich of features that are designed to enhance the user experience, improve website performance, and offer more advanced capabilities.',
  },
  {
    icon: FeatureIcon3,
    title: 'Impactful UI/UX',
    description:
      'Our team creates interfaces for mobile applications and web products that improve conversion, lower maintenance costs, and foster a unified user experience.',
  },
  {
    icon: FeatureIcon4,
    title: 'Best Programming Practices',
    description:
      'By incorporating usability, accessibility, and site navigation, we are able to deliver websites that not only look great but also excel in functionality.',
  },
  {
    icon: FeatureIcon5,
    title: 'Responsive On All Screens',
    description:
      'A responsive design enables your company to connect with everyone in your target market on any device, including smartphones, laptops and tablets.',
  },
  {
    icon: FeatureIcon6,
    title: 'Affordable & Flexible Pricing',
    description:
      'We offer affordable payment options via Stripe. Explore our pricing section below and get started with your awesome website.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Web Design & Development',
    image: Screenshot2,
    link: 'web-design'
  },
  {
    icon: ic_settings,
    title: 'Website Deployment',
    image: Screenshot1,
    link: 'web-deployment'
  },
  {
    icon: pieChart,
    title: 'Blog + SEO',
    image: Screenshot3,
    link: 'blog-and-search-engine-optimization'
  },
  {
    icon: briefcase,
    title: 'Website Copywriting',
    image: Screenshot4,
    link: 'website-copywriting'
  },
];

export const TESTIMONIALS = [
  {
    title: 'Google Review',
    review:
      'It was the best customer experience. The staff were very quick, effective, responsible and most of all - Friendly. They did my service very quickly, two-three days. They kept a thourough follow up with me with live updates. They performed the service according to me needs. Would definitely recommend this!',
    name: 'Jenith S',
    designation: 'College Student',
    avatar: AuthorOne,
    google: Google,
  },
  {
    title: 'Google Review',
    review:
      'Sean is brilliant it was a pleasure to work with him, he has also built me a stunning website  am so chuffed. Thanks',
    name: 'ShipWreck Cove',
    designation: 'Founder of ShipWreck Cove',
    avatar: AuthorTwo,
    google: Google,
  },
  {
    title: 'Google Review',
    review:
      'Absolutely fantastic work. Professional, as well.',
    name: 'Alexander Evans',
    designation: 'Manager of Hp co.',
    avatar: AuthorThree,
    google: Google,
  },
];
