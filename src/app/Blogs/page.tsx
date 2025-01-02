import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "Train-Or-Bus-Journey-Which-one-suits",
    title: "Train Or Bus Journey?Which one suits?",
    excerpt:
      "Choosing between a train or bus journey depends on distance, time, cost, and preferences. Both have unique advantages, so pick what fits your travel needs best.",
    content: "Travel",
    date: "13 March 2023",
    image: "/images/train.png",
  },
  {
    id: 2,
    slug: "Best-Website-to-research-for-your-next-project",
    title: "Best Website to research project",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ",
    content: "Development",
    date: "11 March 2023",
    image: "/images/laptop.png",
  },
  {
    id: 3,
    slug: "How-to-Be-a-Dancer-in-2023-with-proper-skills",
    title: "How to Be a Dancer in 2023?",
    excerpt:
      "Becoming a dancer in 2023 requires passion, discipline, and skill development. Focus on learning and maintaining a growth mindset to succeed. Here a quick guide:",
    content: "Sports",
    date: "10 March 2023",
    image: "/images/human.png",
  },
  {
    id: 4,
    slug: "Who-is-the-best-singer-on-chart-Know-him",
    title: "Who is the best singer on chart?Know him?",
    excerpt:
      "Olivia Rodrigo, known for her emotional ballads and powerful vocals, has dominated the charts since drivers license with her mix of pop, indie, and alternative sounds.",
    content: "Travel",
    date: "13 March 2023",
    image: "/images/human2.png",
  },
  {
    id: 5,
    slug: "How-to-start-export-import-business-from-home",
    title: "How to start export import from home",
    excerpt:
      "Starting an export-import business from home offers global opportunities and profitable income. With digital tools, you can efficiently manage this business without stepping out. Here a step-by-step guide to help you begin.",
    content: "Development",
    date: "13 March 2023",
    image: "/images/human3.png",
  },
  {
    id: 6,
    slug: "Make-some-drinks-with-chocolates-and-milk",
    title: "Make some drinks with chocolates and milk",
    excerpt:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    content: "Sports",
    date: "14 March 2023",
    image: "/images/chocolate.png",
  },
  {
    id: 7,
    slug: "8-Rules-of-Travelling-In-Sea-You-Need-To-Know",
    title: "8 Rules of Travelling In Sea You Need To Know",
    excerpt:
      "Break free from procrastination and take charge of your time! Discover practical tips to build focus, overcome delays, and achieve your goals with greater efficiency.",
    content: "Travel",
    date: "11 March 2023",
    image: "/images/tree.png",
  },
  {
    id: 8,
    slug: "How-to-build-portfolio-and-get-a-Job-in-ui-ux",
    title: "How to build portfolio and get a Job in UI/UX",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
    content: "Development",
    date: "13 March 2023",
    image: "/images/pc.png",
  },
  {
    id: 9,
    slug: "How-to-Be-a-Professional-Footballer-in-2023",
    title: "How to Be a Footballer in 2023",
    excerpt:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
    content: "Sports",
    date: "16 March 2023",
    image: "/images/ball.png",
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-[#E2E2E2]">
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1440px] h-auto bg-[#E2E2E2] mx-auto">
          <div className="container mx-auto">
            <div className="text-center justify-center flex flex-wrap align-middle items-center">
              <div className="max-w-4xl mx-auto p-6 mt-5">
                <h1 className="text-[35px] font-bold text-black mt-2">
                  Find our all blogs from here
                </h1>
                <p className="text-[16px] text-gray-500 mt-2">
                  our blogs are written from very research research and well
                  known writers writers so that we can provide you the best
                  blogs and articles articles for you to read them all along
                </p>
              </div>
            </div>
            <div className="max-w-5xl bg-[#E2E2E2] mx-auto p-4 ">
              <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#E2E2E2] md:grid-cols-2 gap-10 justify-center">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#E2E2E2] rounded-lg shadow-xl w-full md:w-80"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={800}
                      className="w-full object-cover mb-3"
                    />
                    <div className="px-3 py-4 w-full ">
                      <div className="flex  gap-5">
                        <p className="text-[12px] text-blue-700">
                          {post.content}
                        </p>
                        <p className="text-[12px] text-gray-500">{post.date}</p>
                      </div>
                      <h2 className="text-[23px] mt-3 leading-7 text-black font-bold">
                        {post.title}
                      </h2>
                      <p className="text-[12px] text-gray-600 mt-2 leading-5 mb-3">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/Blogs/${post.slug}`}
                        className="text-[15px] font-bold mt-2 text-blue-700 underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
    </div>
  );
}
