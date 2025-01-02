"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type PostData = {
  title: string;
  body: string;
};

type Comment = {
  text: string;
  date: string;
};

const BlogPost = ({ params }: { params: { content: string } }) => {
  const [postData, setPostData] = useState<PostData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      console.log("Fetching data for title:", params.content);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?title=${params.content}`
      );
      const data = await res.json();

      console.log("Fetched data:", data);

      if (data.length > 0) {
        setPostData(data[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadMoreClick = () => {
    setIsContentVisible(true);
    if (!postData) {
      fetchData();
    }
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() === "") return;
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    const newComment: Comment = { text: commentText, date: formattedDate };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  return (
    <div className="bg-[#E2E2E2]">
      <div className="max-w-[1440px] h-auto bg-[#E2E2E2] mx-auto">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="w-full mx-auto">
              <div className="p-10">
                <div className="w-full h-auto object-cover object-center rounded">
                  <h1 className="text-[30px] text-gray-900 p-2 text-center font-bold">
                    {postData ? postData.title : ""}
                    How AI will Change the Future
                  </h1>
                  <p className="text-gray-800 text-[16px] leading-6">
                    Artificial Intelligence (AI) has emerged as one of the most
                    transformative technologies of the 21st century. With rapid
                    advancements in machine learning, natural language
                    processing, and robotics, AI is poised to revolutionize
                    various industries and reshape the way we live and work.
                    Here a look at how AI is set to change the future:
                  </p>
                  <Image
                    src="/images/img1.png"
                    alt="Image 1"
                    width={800}
                    height={800}
                    className="p-3 mt-3 justify-center rounded-2xl flex w-full h-auto"
                  />
                </div>
                <div className="w-full">
                  <p className="text-gray-800 text-[16px] leading-6 mt-4">
                    {postData ? postData.title : ""}AI-powered automation is
                    already streamlining processes across industries. In the
                    future, more repetitive and mundane tasks will be handled by
                    AI, allowing humans to focus on creative and strategic
                    roles. While this may lead to job displacement in some
                    areas, it will also create new opportunities in AI
                    development, maintenance, and ethical oversight. AI is
                    transforming healthcare by enabling early diagnosis,
                    personalized treatment, and efficient patient management.
                    <br />
                    <br /> In the future, AI-powered tools will help doctors
                    analyze medical data more accurately, predict diseases
                    before symptoms appear, and recommend tailored treatment
                    plans, improving patient outcomes worldwide. The education
                    sector will benefit immensely from AI. Personalized learning
                    platforms will adapt to individual student needs, offering
                    customized curriculums and real-time feedback. AI tutors
                    will provide support to students, ensuring no one is left
                    behind, regardless of their location or economic status.
                    <br />
                    <br />
                    Autonomous vehicles are just the beginning of AI impact on
                    transportation. In the future, AI will optimize traffic
                    management, reduce accidents, and lower carbon emissions.
                    Smart cities powered by AI will efficiently manage resources
                    like water, electricity, and waste, creating sustainable
                    urban environments. AI-driven chatbots and virtual
                    assistants are already enhancing customer support. In the
                    future, these tools will become even more intuitive,
                    offering seamless and personalized interactions across
                    industries, from retail to banking.
                  </p>

                  {isContentVisible && (
                    <p className="text-gray-800 text-[16px] leading-6 mt-5">
                      AI can analyze vast amounts of data to find solutions to
                      complex problems. From climate change to pandemic
                      management, AI will play a crucial role in tackling global
                      challenges by identifying patterns and suggesting
                      innovative strategies. AI is not just about data and
                      numbers; its making strides in creative fields too. In the
                      future, AI will collaborate with humans to produce art,
                      music, literature, and films, expanding the horizons of
                      creativity. As AI becomes more integrated into our lives,
                      ethical considerations will gain prominence. <br /> <br />{" "}
                      Issues like data privacy, algorithmic bias, and the
                      potential misuse of AI will require strict regulations and
                      a collaborative approach to ensure technology serves
                      humanity responsibly. The future of AI holds immense
                      promise, but it also comes with challenges. By embracing
                      its potential while addressing its risks, we can shape a
                      future where AI augments human capabilities and
                      contributes to a better, more equitable world. The journey
                      ahead is as exciting as it is uncertain, and how we choose
                      to navigate it will define the role AI plays in our lives.
                    </p>
                  )}
                  {!isContentVisible && (
                    <button
                      type="submit"
                      onClick={handleReadMoreClick}
                      className="text-blue-800 text-[16px] hover:underline mt-1 mb-1"
                    >
                      Read More...
                    </button>
                  )}
                </div>

                <form className="mt-7">
                  <fieldset>
                    <legend className="text-[23px] font-bold px-1 mt-5">
                      Comments!
                    </legend>
                    <textarea
                      placeholder="Write your comment here..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full px-2 py-4 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                    ></textarea>
                  </fieldset>
                </form>
                <div className="w-full flex mt-5">
                  <button
                    type="button"
                    onClick={handleCommentSubmit}
                    className="bg-[#7C4EE4] py-2 px-2 text-white text-[20px] hover:bg-[#E2E2E2] border hover:underline hover:border-[#7C4EE4] hover:text-gray-900 w-24 rounded-lg"
                  >
                    Submit
                  </button>
                </div>

                <div className="mt-5">
                  {comments.length === 0 ? (
                    <p className="text-gray-600"></p>
                  ) : (
                    <ul className="space-y-4">
                      {comments.map((comment, index) => (
                        <li
                          key={index}
                          className="w-full px-2 py-2 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                        >
                          <p className="text-gray-800">{comment.text}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {comment.date}
                          </p>
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
      <br />
    </div>
  );
};

export default BlogPost;
