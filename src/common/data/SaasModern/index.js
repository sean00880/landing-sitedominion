import Process1 from '../../assets/image/saasModern/browse.png';
import Process2 from '../../assets/image/saasModern/package.png';
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
    label: 'Feature',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Pricing',
    path: '#pricing_section',
    offset: '0',
  },
  {
    label: 'Testimonial',
    path: '#testimonial_section',
    offset: '0',
  },
  {
    label: 'FAQ',
    path: '#faq_section',
    offset: '0',
  },
];

export const PROCESS_ITEMS = [
  {
    image: Process1,
    title: 'Browse Features',
    description:
      'Browse our website to see the different features and services we offer for web development.',
  },
  {
    image: Process2,
    title: 'Choose Package',
    description:
      'Choose a package that fits your requirements and budget.',
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
    freePlan: true,
    name: 'Basic Website',
    description: 'For Individuals',
    price: '$49.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: '#',
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
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small Businesses',
    price: '$69.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: '#',
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
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Enterprise Businesses ',
    price: '$89.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: '#',
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
        content: 'Unlimited Pages',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Website',
    description: 'For Individuals',
    price: '$399.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: '#',
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
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small Businesses',
    price: '$699.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: '#',
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
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Enterprise Businesses ',
    price: '$899.99',
    priceLabel: 'Per month',
    buttonLabel: 'BUY NOW',
    url: '#',
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
        content: 'Unlimited Pages',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: FeatureIcon1,
    title: 'Priority On Conversions',
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
    link: 'web-development'
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
    link: 'web-development'
  },
];

export const TESTIMONIALS = [
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: AuthorOne,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: AuthorTwo,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: AuthorThree,
  },
];
