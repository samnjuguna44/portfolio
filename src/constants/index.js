import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    portfolio,
    ecommerce,
    tripguide,
    skylogo,
    threejs,
    jumialogo,
    invoice,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front-End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Sky Garden",
      icon: skylogo,
      iconBg: "#383E56",
      date: "January 2019 - October 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Followed SDLC best practices within Agile environment to produce rapid iterations for clients.",
        "Contributed to projects within Scrum project management environments.",
        "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Jumia",
      icon: jumialogo,
      iconBg: "#E6DEDD",
      date: "Feb 2016 - Sep 2018",
      points: [
        "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices..",
        "Assembled and addressed technical and design requirements, integrating user-facing and front-end elements to maintain web presence effectiveness.",
        "Integrated web applications for mobile platforms into front end environment.",
        "Identified bottlenecks and bugs and devised solutions.",
        "Assembled and addressed technical and design requirements, integrating user-facing and front-end elements to maintain web presence effectiveness.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "From the start of the project, through to completion, Samson supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him.",
      name: "James Mwai ",
      designation: "CTO",
      company: "Sky Garden Limited",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Samson does. Samson is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.",
      name: "Terry",
      designation: "Director",
      company: "Mascotte Branding Limited",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Ecommerce Website",
      description:
        "Web-based platform created using React and Next.Js that allows users to place orders online, add them to cart and make payments. Also has an Admin side where you can edit products .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/samnjuguna44/ecommerce-website",
      source_code_live: "https://ecommerce-website-six.vercel.app/",
    },
    {
      name: "Invoice Maker",
      description:
        "Web based platform created using React and Tailwind CSS that allows users to create invoices for their businesses or for personal use.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: invoice,
      source_code_link: "https://github.com/samnjuguna44/invoicer-app",
      source_code_live: "https://invoicer-app-vert.vercel.app/",
    },
    {
      name: "Portfolio",
      description:
        "My personal portfolio showcasing my works created using React and the animations created using React Three.Js.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/samnjuguna44/portfolio",
      source_code_live: "https://portfolio-rho-bice-51.vercel.app/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };