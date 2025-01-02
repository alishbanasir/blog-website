"use client"
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react"; 


type ContentSection =
  | { type: "paragraph"; text: string }
  | { type: "Image"; src: string; alt: string }
  | {
      type: "list";
      items: {
        heading: string;
        content: string;
        points?: string[];
      }[];
    }
    | { type: "hr" };

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: ContentSection[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "Train-Or-Bus-Journey-Which-one-suits",
    title: "Train Or Bus Journey Which one suits?",
    content: [
      {
        type: "paragraph",
        text: "The choice between a train or bus journey depends on factors like distance, time, cost, and personal preferences. Trains and buses offer unique advantages, such as comfort, affordability, or flexibility, and the best option varies based on the nature of your trip. Here a quick comparison to help you decide:",
      },
      {
        type: "Image",
        src: "/images/train.png",
        alt: "train",
      },
      {
        type: "list",
        items: [
          {
            heading: "Comfort and Space",
            content: "Comfort is a key factor, especially for long journeys. The amount of space available and the quality of seating can significantly impact your travel experience.",
            points: [
              "Train: Trains provide more legroom, allow you to move around freely, and often have sleeper options for long-distance travel, making them a comfortable choice.",
              "Bus: Modern buses now include reclining seats, charging ports, and Wi-Fi, but the overall space is usually more limited compared to trains.",
            ],
          },
          {
            heading: "Scenic Views",
            content: "The journey itself can be an experience if you enjoy scenic views. Both options offer different perspectives of the surroundings.",
            points: [
              "Train: Train journeys often pass through picturesque landscapes, offering beautiful views of nature, mountains, and countryside.",
              "Bus: Buses generally stick to highways and urban areas, so the views may be less scenic but still enjoyable depending on the route.",
            ],
          },
          {
            heading: "Cost",
            content: "Cost is a crucial factor for many travelers. The affordability of a ticket often determines the mode of transportation.",
            points: [
              "Train: Train fares are reasonable and consistent, with discounts available for students, seniors, and frequent travelers.",
              "Bus: Buses are usually cheaper for short trips, but luxury bus services may cost as much as train tickets.",
            ],
          },
          {
            heading: "Travel Time",
            content: "Time efficiency can be vital, especially for those on tight schedules. Both options cater to different travel durations.",
            points: [
              "Train: Trains are faster, especially for long distances, with high-speed trains significantly reducing travel time.",
              "Bus: Buses are better suited for short-distance travel but can be delayed due to traffic and road conditions.",
            ],
          },
          {
            heading: "Accessibility",
            content: "Accessibility often influences travel decisions, particularly for those in remote areas or seeking convenience.",
            points: [
              "Train: Train stations are typically located in city centers, making them accessible and reliable for planned travel.",
              "Bus: Buses offer flexible routes and schedules, making them ideal for reaching remote or less accessible areas.",
            ],
          },
          {
            heading: "Safety and Environment",
            content: "Safety and environmental impact are increasingly important considerations for modern travelers.",
            points: [
              "Train: Trains are safer during bad weather and are a more eco-friendly mode of transport, producing less carbon per passenger.",
              "Bus: While buses are generally safe, they are more affected by traffic and are less environmentally friendly than trains.",
            ],
          },
        ],
      },
      {
        type: "hr"
      },
      {
        type: "paragraph",
        text: "Conclusion: If you prioritize comfort, speed, and scenic views, trains are an excellent choice. However, if affordability, flexibility, and access to remote locations are more important, buses may suit you better. Both options have their own appeal, so pick what aligns best with your journey!"
      }
    ],
  },


{
  id: 2,
  slug: "Best-Website-to-research-for-your-next-project",
  title: "Best Websites for Researching Your Next Project",
  content: [
    {
      type: "paragraph",
      text: "Capitalize on opportunities to identify valuable activities and test innovative ideas. Bridge gaps with efficient tools and resources. Finding the right platforms for project research can save time and improve results. Here are some top websites to help you with your next project:",
    },
    {
      type: "Image",
      src: "/images/laptop.png ",
      alt: "laptop",
    },
    {
      type: "list",
      items: [
        {
          heading: "Google Scholar",
          content: "Google Scholar is an excellent resource for finding academic materials like scholarly articles, books, conference papers, and theses. It indexes a vast array of reputable sources, including peer-reviewed journals, making it indispensable for students, educators, and professionals seeking reliable information.",
          points: [
            "Best For: Academic and technical research, including detailed literature reviews and citation tracking.",
          ],
        },
        {
          heading: "Research Gate",
          content: "Research Gate connects you with a global network of researchers and professionals in various fields. It allows members to share their work, access research papers, and participate in discussions. You can also follow researchers whose work aligns with your interests.",
          points: [
            "Best For: Networking with experts, discovering niche academic research, and collaborating on projects.",
          ],
        },
        {
          heading: "PubMed",
          content: "PubMed is a highly specialized database focused on life sciences and medical research. It includes articles from medical journals, clinical trials, and other scholarly sources, offering critical insights into healthcare and biomedical advancements.",
          points: [
            "Best For: Comprehensive medical literature, evidence-based studies, and clinical guidelines.",
          ],
        },
        {
          heading: "Project Gutenberg",
          content: "Project Gutenberg offers free access to thousands of eBooks, primarily focusing on public domain works. It is an invaluable resource for literature enthusiasts, historians, and anyone researching older texts or classic literature.",
          points: [
            "Best For: Accessing historical texts, literary works, and enriching cultural research.",
          ],
        },
        {
          heading: "TED Talks",
          content: "TED Talks feature presentations by world-renowned experts on a wide variety of topics. These engaging talks provide thought-provoking insights and innovative approaches that inspire new ideas and foster creativity.",
          points: [
            "Best For: Exploring innovative solutions, staying updated on global trends, and generating creative ideas.",
          ],
        },
        {
          heading: "Kaggle",
          content: "Kaggle is a one-stop platform for data science projects. It offers datasets, tutorials, and competitions that help users build and enhance their skills. It also fosters a collaborative environment for solving real-world problems through data.",
          points: [
            "Best For: Data-driven project development, machine learning exploration, and honing data analysis skills.",
          ],
        },
        {
          heading: "LinkedIn Learning",
          content: "LinkedIn Learning provides a vast library of courses designed by industry professionals. Topics range from technical skills like coding to soft skills like leadership and time management, making it a versatile learning platform.",
          points: [
            "Best For: Professional skill development, career advancement, and continuous learning.",
          ],
        },
        {
          heading: "GitHub",
          content: "GitHub is a collaborative platform designed for developers and programmers. It hosts open-source projects and allows version control, making it essential for coding, project collaboration, and learning from existing codebases.",
          points: [
            "Best For: Software development, project management, and contributing to open-source communities.",
          ],
        }, 
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Using these websites can elevate your project research. They provide diverse resources tailored to various fields, helping you save time and achieve better results. Start exploring and make your next project a success!"
    }
  ],
},
{
  id: 3,
  slug: "How-to-Be-a-Dancer-in-2023-with-proper-skills",
  title: "How to Be a Dancer in 2023?",
  content: [
    {
      type: "paragraph",
      text: "Becoming a dancer in 2023 requires a blend of passion, discipline, and skill development. Whether you aim to perform professionally or pursue dance as a personal passion, the steps to success involve learning the right techniques, networking, and maintaining a growth mindset. Here a guide to help you on your journey to becoming a skilled dancer:",
    },
    {
      type: "Image",
      src: "/images/human.png",
      alt: "human",
    },
    {
      type: "list",
      items: [
        {
          heading: " Choose Your Dance Style",
          content: "Decide which dance style aligns with your interests and start exploring it.",
          points: [
            "Explore multiple dance styles to find your passion.",
            "Watch performances to understand different genres.",
            "Identify your physical strengths and match them to a style.",
          ],
        },
        {
          heading: "Take Professional Training",
          content: "Join a dance academy or learn from experienced trainers to build a strong foundation.",
          points: [
            "Attend regular classes for consistent improvement.",
            "Learn from industry professionals through workshops.",
            "Use online platforms for additional resources.",
          ],
        },
        {
          heading: "Practice Consistently",
          content: "Dedicate regular time to practice and refine your moves.",
          points: [
            "Set a fixed schedule for practice sessions.",
            "Work on core strength and flexibility.",
            "Record and review your practice sessions.",
          ],
        },
        {
          heading: "Develop Performance Skills",
          content: "Work on stage presence and connecting with your audience.",
          points: [
            "Practice facial expressions and emotional movements.",
            "Participate in local events or competitions.",
            "Build confidence through small performances.",
          ],
        },
        {
          heading: "Network and Build Connections",
          content: "Join dance communities and connect with fellow dancers.",
          points: [
            "Be active in local and online dance communities.",
            "Share your work on social media.",
            "Collaborate with other dancers and choreographers.",
          ],
        },
        {
          heading: "Develop a Unique Style",
          content: "Blend techniques and create your own dance identity.",
          points: [
            "Combine different techniques to craft unique routines.",
            "Highlight your individuality in performances.",
            "Be authentic and creative.",
          ],
        },
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Whether you are pursuing dance professionally or personally, the journey demands dedication, continuous learning, and adaptability. With the right mindset and effort, you can achieve your goals and shine in the world of dance."
    }
  ],
},
{
  id: 4,
  slug: "Who-is-the-best-singer-on-chart-Know-him",
  title: "Who is the best singer on chart?Know him?",
  content: [
    {
      type: "paragraph",
      text: "Olivia Rodrigo has quickly become one of the top singers today. Since her breakout hit drivers license, she has dominated the charts with her unique blend of pop, indie, and alternative rock. Her debut album SOUR was a huge success, with hits like Good 4 U and Deja Vu. Olivia emotional lyrics and powerful vocals connect deeply with listeners, and her follow-up album Guts further solidified her place in the music world.",
    },
    {
      type: "Image",
      src: "/images/human2.png",
      alt: "human2",
    },
    {
      type: "list",
      items: [
        {
          heading: "Olivia Breakthrough Moment",
          content: "Olivia career took off with her debut single drivers license, which became a global sensation. It broke streaming records and stayed at number one on the charts for weeks. The songs emotional depth and relatable lyrics made it an instant hit, capturing the hearts of listeners worldwide.",
        },
        {
          heading: "Her Unique Sound and Style:",
          content: "Olivia blends pop, indie, and alternative rock influences, creating a fresh and unique sound. Her ability to combine catchy melodies with raw emotional depth sets her apart from many other artists on the charts today. Her vocal delivery, ranging from soft and vulnerable to powerful and anthemic, further enhances her appeal.",
        },
        {
          heading: "Chart-Topping Success:",
          content: "Olivia debut album SOUR was a commercial success, producing chart-topping hits like Good 4 U, Deja Vu, and Traitor. Her follow-up album, Guts, continued her streak of chart dominance with songs like Vampire and Bad Idea Right? Both albums showcase her growth as an artist and her ability to create songs that connect with listeners.",
        },
        {
          heading: "Cultural Impact:",
          content: "Olivias music resonates strongly with younger audiences, particularly Gen Z, due to its raw honesty and emotional vulnerability. She has become a role model for many, using her platform to share personal experiences of heartbreak, self-reflection, and growth, which makes her music relatable to millions.",
        },
        {
          heading: "Awards and Recognition:",
          content: "Olivia has received significant recognition within the music industry, including Grammy nominations and wins. Her debut album SOUR won Best Pop Vocal Album, solidifying her place in the industry. She continues to receive accolades for her music, proving her talent and the lasting impact she has had on the charts.",
        },
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Olivia Rodrigo is undoubtedly one of the best singers on the charts today. Her mix of pop, indie, and alternative sounds, coupled with her powerful vocals and deeply personal lyrics, has set her apart from other artists. With multiple chart-topping hits, widespread recognition, and a loyal fanbase, Olivias influence on both the music industry and pop culture will continue to grow."
    }
  ],
},
{
  id: 5,
  slug: "How-to-start-export-import-business-from-home",
  title: "How to Start an Export-Import Business from Home",
  content: [
    {
      type: "paragraph",
      text: "Starting an export-import business from home is a rewarding opportunity to connect with global markets and earn a profitable income. Digital tools and platforms simplify managing every aspect of the business from home, from market research to logistics. With flexibility and efficiency, you can thrive in this venture. Follow this guide to start your journey into international trade and grow step by step.",
    },
    {
      type: "Image",
      src: "/images/human3.png",
      alt: "human3",
    },
    {
      type: "list",
      items: [
        {
          heading: "Research and Choose Your Niche",
          content: "Understanding and selecting the right niche is the foundation of a successful export-import business. Your chosen niche should align with market demand, profitability, and your interests or expertise. A well-researched niche ensures a clear direction and enhances your chances of success in international trade.",
          points: [
            "Explore industries such as textiles, electronics, food products, or handicrafts.",
            "Identify target countries with a demand for your chosen products.",
            "Evaluate the competition and assess the profit margins.",
          ],
        },
        {
          heading: "Understand Legal Requirements",
          content: "Complying with legal regulations is crucial to operate an export-import business seamlessly. It ensures legitimacy, avoids penalties, and builds trust with clients and suppliers.",
          points: [
            "Register your business legally as a sole proprietorship, partnership, or company.",
            "Obtain necessary permits, licenses, and an Import Export Code (IEC).",
            "Familiarize yourself with trade laws, duties, and taxes applicable to your niche.",
          ],
        },
        {
          heading: "Create a Business Plan",
          content: "A detailed business plan serves as a roadmap for your export-import venture, guiding your strategies and decisions effectively.",
          points: [
            "Define your short-term and long-term business goals.",
            "Include a financial plan with expected costs and revenue",
            "Develop strategies for sourcing products, shipping, and reaching your market.",
          ],
        },
        {
          heading: "Build an Online Presence",
          content: "Establishing a strong online presence is essential to connect with global buyers and suppliers while showcasing your business effectively.",
          points: [
            "Design a user-friendly website to showcase your products and services.",
            "Leverage social media to market your business and connect with clients.",
            "Join platforms like Alibaba, Amazon, or other B2B portals to increase visibility.",
          ],
        },
        {
          heading: "TED Talks",
          content: "TED Talks feature presentations by world-renowned experts on a wide variety of topics. These engaging talks provide thought-provoking insights and innovative approaches that inspire new ideas and foster creativity.",
          points: [
            "Best For: Exploring innovative solutions, staying updated on global trends, and generating creative ideas.",
          ],
        },
        {
          heading: "Kaggle",
          content: "Kaggle is a one-stop platform for data science projects. It offers datasets, tutorials, and competitions that help users build and enhance their skills. It also fosters a collaborative environment for solving real-world problems through data.",
          points: [
            "Best For: Data-driven project development, machine learning exploration, and honing data analysis skills.",
          ],
        },
        {
          heading: "LinkedIn Learning",
          content: "LinkedIn Learning provides a vast library of courses designed by industry professionals. Topics range from technical skills like coding to soft skills like leadership and time management, making it a versatile learning platform.",
          points: [
            "Best For: Professional skill development, career advancement, and continuous learning.",
          ],
        },
        {
          heading: "GitHub",
          content: "GitHub is a collaborative platform designed for developers and programmers. It hosts open-source projects and allows version control, making it essential for coding, project collaboration, and learning from existing codebases.",
          points: [
            "Best For: Software development, project management, and contributing to open-source communities.",
          ],
        }, 
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Using these websites can elevate your project research. They provide diverse resources tailored to various fields, helping you save time and achieve better results. Start exploring and make your next project a success!"
    }
  ],
},
{
  id: 6,
  slug: "Make-some-drinks-with-chocolates-and-milk",
  title: "Make some drinks with chocolates and milk",
  content: [
    {
      type: "paragraph",
      text: "Capitalize on opportunities to identify valuable activities and test innovative ideas. Bridge gaps with efficient tools and resources. Finding the right platforms for project research can save time and improve results. Here are some top websites to help you with your next project:",
    },
    {
      type: "Image",
      src: "/images/chocolate.png",
      alt: "chocolate",
    },
    {
      type: "list",
      items: [
        {
          heading: "Google Scholar",
          content: "Google Scholar is an excellent resource for finding academic materials like scholarly articles, books, conference papers, and theses. It indexes a vast array of reputable sources, including peer-reviewed journals, making it indispensable for students, educators, and professionals seeking reliable information.",
          points: [
            "Best For: Academic and technical research, including detailed literature reviews and citation tracking.",
          ],
        },
        {
          heading: "Research Gate",
          content: "Research Gate connects you with a global network of researchers and professionals in various fields. It allows members to share their work, access research papers, and participate in discussions. You can also follow researchers whose work aligns with your interests.",
          points: [
            "Best For: Networking with experts, discovering niche academic research, and collaborating on projects.",
          ],
        },
        {
          heading: "PubMed",
          content: "PubMed is a highly specialized database focused on life sciences and medical research. It includes articles from medical journals, clinical trials, and other scholarly sources, offering critical insights into healthcare and biomedical advancements.",
          points: [
            "Best For: Comprehensive medical literature, evidence-based studies, and clinical guidelines.",
          ],
        },
        {
          heading: "Project Gutenberg",
          content: "Project Gutenberg offers free access to thousands of eBooks, primarily focusing on public domain works. It is an invaluable resource for literature enthusiasts, historians, and anyone researching older texts or classic literature.",
          points: [
            "Best For: Accessing historical texts, literary works, and enriching cultural research.",
          ],
        },
        {
          heading: "TED Talks",
          content: "TED Talks feature presentations by world-renowned experts on a wide variety of topics. These engaging talks provide thought-provoking insights and innovative approaches that inspire new ideas and foster creativity.",
          points: [
            "Best For: Exploring innovative solutions, staying updated on global trends, and generating creative ideas.",
          ],
        },
        {
          heading: "Kaggle",
          content: "Kaggle is a one-stop platform for data science projects. It offers datasets, tutorials, and competitions that help users build and enhance their skills. It also fosters a collaborative environment for solving real-world problems through data.",
          points: [
            "Best For: Data-driven project development, machine learning exploration, and honing data analysis skills.",
          ],
        },
        {
          heading: "LinkedIn Learning",
          content: "LinkedIn Learning provides a vast library of courses designed by industry professionals. Topics range from technical skills like coding to soft skills like leadership and time management, making it a versatile learning platform.",
          points: [
            "Best For: Professional skill development, career advancement, and continuous learning.",
          ],
        },
        {
          heading: "GitHub",
          content: "GitHub is a collaborative platform designed for developers and programmers. It hosts open-source projects and allows version control, making it essential for coding, project collaboration, and learning from existing codebases.",
          points: [
            "Best For: Software development, project management, and contributing to open-source communities.",
          ],
        }, 
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Using these websites can elevate your project research. They provide diverse resources tailored to various fields, helping you save time and achieve better results. Start exploring and make your next project a success!"
    }
  ],
},
{
  id: 7,
  slug: "8-Rules-of-Travelling-In-Sea-You-Need-To-Know",
  title: "8 Rules of Travelling In Sea You Need To Know",
  content: [
    {
      type: "paragraph",
      text: "Capitalize on opportunities to identify valuable activities and test innovative ideas. Bridge gaps with efficient tools and resources. Finding the right platforms for project research can save time and improve results. Here are some top websites to help you with your next project:",
    },
    {
      type: "Image",
      src: "/images/tree.png",
      alt: "tree",
    },
    {
      type: "list",
      items: [
        {
          heading: "Google Scholar",
          content: "Google Scholar is an excellent resource for finding academic materials like scholarly articles, books, conference papers, and theses. It indexes a vast array of reputable sources, including peer-reviewed journals, making it indispensable for students, educators, and professionals seeking reliable information.",
          points: [
            "Best For: Academic and technical research, including detailed literature reviews and citation tracking.",
          ],
        },
        {
          heading: "Research Gate",
          content: "Research Gate connects you with a global network of researchers and professionals in various fields. It allows members to share their work, access research papers, and participate in discussions. You can also follow researchers whose work aligns with your interests.",
          points: [
            "Best For: Networking with experts, discovering niche academic research, and collaborating on projects.",
          ],
        },
        {
          heading: "PubMed",
          content: "PubMed is a highly specialized database focused on life sciences and medical research. It includes articles from medical journals, clinical trials, and other scholarly sources, offering critical insights into healthcare and biomedical advancements.",
          points: [
            "Best For: Comprehensive medical literature, evidence-based studies, and clinical guidelines.",
          ],
        },
        {
          heading: "Project Gutenberg",
          content: "Project Gutenberg offers free access to thousands of eBooks, primarily focusing on public domain works. It is an invaluable resource for literature enthusiasts, historians, and anyone researching older texts or classic literature.",
          points: [
            "Best For: Accessing historical texts, literary works, and enriching cultural research.",
          ],
        },
        {
          heading: "TED Talks",
          content: "TED Talks feature presentations by world-renowned experts on a wide variety of topics. These engaging talks provide thought-provoking insights and innovative approaches that inspire new ideas and foster creativity.",
          points: [
            "Best For: Exploring innovative solutions, staying updated on global trends, and generating creative ideas.",
          ],
        },
        {
          heading: "Kaggle",
          content: "Kaggle is a one-stop platform for data science projects. It offers datasets, tutorials, and competitions that help users build and enhance their skills. It also fosters a collaborative environment for solving real-world problems through data.",
          points: [
            "Best For: Data-driven project development, machine learning exploration, and honing data analysis skills.",
          ],
        },
        {
          heading: "LinkedIn Learning",
          content: "LinkedIn Learning provides a vast library of courses designed by industry professionals. Topics range from technical skills like coding to soft skills like leadership and time management, making it a versatile learning platform.",
          points: [
            "Best For: Professional skill development, career advancement, and continuous learning.",
          ],
        },
        {
          heading: "GitHub",
          content: "GitHub is a collaborative platform designed for developers and programmers. It hosts open-source projects and allows version control, making it essential for coding, project collaboration, and learning from existing codebases.",
          points: [
            "Best For: Software development, project management, and contributing to open-source communities.",
          ],
        }, 
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Using these websites can elevate your project research. They provide diverse resources tailored to various fields, helping you save time and achieve better results. Start exploring and make your next project a success!"
    }
  ],
},
{
  id: 8,
  slug: "How-to-build-portfolio-and-get-a-Job-in-ui-ux",
  title: "How to build portfolio and get a Job in UI/UX",
  content: [
    {
      type: "paragraph",
      text: "Capitalize on opportunities to identify valuable activities and test innovative ideas. Bridge gaps with efficient tools and resources. Finding the right platforms for project research can save time and improve results. Here are some top websites to help you with your next project:",
    },
    {
      type: "Image",
      src: "/images/pc.png",
      alt: "website researching",
    },
    {
      type: "list",
      items: [
        {
          heading: "Google Scholar",
          content: "Google Scholar is an excellent resource for finding academic materials like scholarly articles, books, conference papers, and theses. It indexes a vast array of reputable sources, including peer-reviewed journals, making it indispensable for students, educators, and professionals seeking reliable information.",
          points: [
            "Best For: Academic and technical research, including detailed literature reviews and citation tracking.",
          ],
        },
        {
          heading: "Research Gate",
          content: "Research Gate connects you with a global network of researchers and professionals in various fields. It allows members to share their work, access research papers, and participate in discussions. You can also follow researchers whose work aligns with your interests.",
          points: [
            "Best For: Networking with experts, discovering niche academic research, and collaborating on projects.",
          ],
        },
        {
          heading: "PubMed",
          content: "PubMed is a highly specialized database focused on life sciences and medical research. It includes articles from medical journals, clinical trials, and other scholarly sources, offering critical insights into healthcare and biomedical advancements.",
          points: [
            "Best For: Comprehensive medical literature, evidence-based studies, and clinical guidelines.",
          ],
        },
        {
          heading: "Project Gutenberg",
          content: "Project Gutenberg offers free access to thousands of eBooks, primarily focusing on public domain works. It is an invaluable resource for literature enthusiasts, historians, and anyone researching older texts or classic literature.",
          points: [
            "Best For: Accessing historical texts, literary works, and enriching cultural research.",
          ],
        },
        {
          heading: "TED Talks",
          content: "TED Talks feature presentations by world-renowned experts on a wide variety of topics. These engaging talks provide thought-provoking insights and innovative approaches that inspire new ideas and foster creativity.",
          points: [
            "Best For: Exploring innovative solutions, staying updated on global trends, and generating creative ideas.",
          ],
        },
        {
          heading: "Kaggle",
          content: "Kaggle is a one-stop platform for data science projects. It offers datasets, tutorials, and competitions that help users build and enhance their skills. It also fosters a collaborative environment for solving real-world problems through data.",
          points: [
            "Best For: Data-driven project development, machine learning exploration, and honing data analysis skills.",
          ],
        },
        {
          heading: "LinkedIn Learning",
          content: "LinkedIn Learning provides a vast library of courses designed by industry professionals. Topics range from technical skills like coding to soft skills like leadership and time management, making it a versatile learning platform.",
          points: [
            "Best For: Professional skill development, career advancement, and continuous learning.",
          ],
        },
        {
          heading: "GitHub",
          content: "GitHub is a collaborative platform designed for developers and programmers. It hosts open-source projects and allows version control, making it essential for coding, project collaboration, and learning from existing codebases.",
          points: [
            "Best For: Software development, project management, and contributing to open-source communities.",
          ],
        }, 
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Using these websites can elevate your project research. They provide diverse resources tailored to various fields, helping you save time and achieve better results. Start exploring and make your next project a success!"
    }
  ],
},
{
  id: 9,
  slug: "How-to-Be-a-Professional-Footballer-in-2023",
  title: "How to Be a Footballer in 2023",
  content: [
    {
      type: "paragraph",
      text: "Capitalize on opportunities to identify valuable activities and test innovative ideas. Bridge gaps with efficient tools and resources. Finding the right platforms for project research can save time and improve results. Here are some top websites to help you with your next project:",
    },
    {
      type: "Image",
      src: "/images/ball.png",
      alt: "ball",
    },
    {
      type: "list",
      items: [
        {
          heading: "Google Scholar",
          content: "Google Scholar is an excellent resource for finding academic materials like scholarly articles, books, conference papers, and theses. It indexes a vast array of reputable sources, including peer-reviewed journals, making it indispensable for students, educators, and professionals seeking reliable information.",
          points: [
            "Best For: Academic and technical research, including detailed literature reviews and citation tracking.",
          ],
        },
        {
          heading: "Research Gate",
          content: "Research Gate connects you with a global network of researchers and professionals in various fields. It allows members to share their work, access research papers, and participate in discussions. You can also follow researchers whose work aligns with your interests.",
          points: [
            "Best For: Networking with experts, discovering niche academic research, and collaborating on projects.",
          ],
        },
        {
          heading: "PubMed",
          content: "PubMed is a highly specialized database focused on life sciences and medical research. It includes articles from medical journals, clinical trials, and other scholarly sources, offering critical insights into healthcare and biomedical advancements.",
          points: [
            "Best For: Comprehensive medical literature, evidence-based studies, and clinical guidelines.",
          ],
        },
        {
          heading: "Project Gutenberg",
          content: "Project Gutenberg offers free access to thousands of eBooks, primarily focusing on public domain works. It is an invaluable resource for literature enthusiasts, historians, and anyone researching older texts or classic literature.",
          points: [
            "Best For: Accessing historical texts, literary works, and enriching cultural research.",
          ],
        },
        {
          heading: "TED Talks",
          content: "TED Talks feature presentations by world-renowned experts on a wide variety of topics. These engaging talks provide thought-provoking insights and innovative approaches that inspire new ideas and foster creativity.",
          points: [
            "Best For: Exploring innovative solutions, staying updated on global trends, and generating creative ideas.",
          ],
        },
        {
          heading: "Kaggle",
          content: "Kaggle is a one-stop platform for data science projects. It offers datasets, tutorials, and competitions that help users build and enhance their skills. It also fosters a collaborative environment for solving real-world problems through data.",
          points: [
            "Best For: Data-driven project development, machine learning exploration, and honing data analysis skills.",
          ],
        },
        {
          heading: "LinkedIn Learning",
          content: "LinkedIn Learning provides a vast library of courses designed by industry professionals. Topics range from technical skills like coding to soft skills like leadership and time management, making it a versatile learning platform.",
          points: [
            "Best For: Professional skill development, career advancement, and continuous learning.",
          ],
        },
        {
          heading: "GitHub",
          content: "GitHub is a collaborative platform designed for developers and programmers. It hosts open-source projects and allows version control, making it essential for coding, project collaboration, and learning from existing codebases.",
          points: [
            "Best For: Software development, project management, and contributing to open-source communities.",
          ],
        }, 
      ],
    },
    {
      type: "hr"
    },
    {
      type: "paragraph",
      text: "Conclusion: Using these websites can elevate your project research. They provide diverse resources tailored to various fields, helping you save time and achieve better results. Start exploring and make your next project a success!"
    }
  ],
},
];

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    notFound();
  }




const [commentText, setCommentText] = useState("");  
const [comments, setComments] = useState<any[]>([]);  

const handleCommentSubmit = () => {
  const newComment = {
    text: commentText,
    date: new Date().toLocaleString(),
  };
  setComments([newComment, ...comments]);  
  setCommentText("");  
};



  return (
    <div className="bg-[#E2E2E2]">
              <div className="max-w-[1440px] h-auto bg-[#E2E2E2] mx-auto">
        <div className="container mx-auto">
    <div className="max-w-5xl mx-auto  space-y-6">
      <div className="p-10">
      <h1 className="text-[28px] text-gray-950 p-3 text-center font-bold">{blogPost.title}</h1>
      {blogPost.content.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p key={index} className="text-gray-800 text-[16px]">
                {section.text}
              </p>
            );
          case "Image":
            return (
              <Image
                key={index}
                src={section.src}
                alt={section.alt}
                width={800}
                height={800}
                className="w-full h-full rounded-xl mt-3 p-2"
              />
            );
          case "list":
            return (
              <ul key={index} className="list-decimal text-[18px] text-gray-950 list-outside">
                {section.items.map((item, idx) => (
                  <li key={idx} className="">
                    <h3 className="font-bold text-gray-950 text-[20px] mt-3 m-2 underline">{item.heading}</h3>
                    <p className=" text-gray-800 text-[16px] m-1 p-1">{item.content}</p>
                    {item.points && (
                      <ul className="list-disc list-inside text-gray-800 mt-1 text-[16px] mb-5 ml-2">
                        {item.points.map((point, pointIdx) => (
                          <li key={pointIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            );
            case "hr":
              return <hr key={index} className="border-t mt-8 mb-8 border-gray-400 " />;
          default:
            return null;
        }
      })}
    </div>
    </div>
    </div>
    </div>

<div className="bg-[#E2E2E2]">
              <div className="max-w-[1440px] h-auto bg-[#E2E2E2] mx-auto">
        <div className="container mx-auto">
    <div className="max-w-5xl mx-auto  space-y-6">
    <div className="p-8 text-gray-900">
<form>
        <fieldset>
          <legend className="text-[23px] font-bold text-gray-900 px-1">Comments!</legend>
          <textarea
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full text-gray-900 px-2 py-4 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
          ></textarea>
        </fieldset>
      </form>
      <div className="w-full flex mt-5">
        <button
          type="button"
          disabled ={commentText === ""? true : false}
          onClick={handleCommentSubmit}
          className="bg-[#7C4EE4] py-2 px-2 text-[20px] text-white hover:bg-[#E2E2E2] border hover:underline hover:border-[#7C4EE4] hover:text-gray-900 w-24 rounded-lg"
        >
          Submit
        </button>
      </div>

      <div className="mt-5">
        {comments.length === 0 ? (
          <p></p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="w-full px-2 py-2 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
              >
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-sm text-gray-500 mt-1">{comment.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    <br /><br /><br />
    </div>
  );
}

