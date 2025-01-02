"use client";

import { useState } from "react";
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
  // const [setIsLoading] = useState<boolean>(false);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const fetchData = async () => {
    try {
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
                    How to make a Game look more attractive with New VR & AI{" "}
                  </h1>
                  <p className="text-gray-800 text-[16px] leading-6">
                    Virtual Reality (VR) and Artificial Intelligence (AI) are
                    rapidly transforming the gaming industry, offering immersive
                    and visually stunning experiences that were once thought
                    impossible. VR allows players to fully immerse themselves in
                    meticulously crafted virtual worlds, where realistic
                    lighting, textures, and advanced controllers work together
                    to create a genuine sense of presence and interaction.
                  </p>
                  <Image
                    src="/images/container.png"
                    alt="container"
                    width={800}
                    height={800}
                    className="p-3 mt-3 justify-center rounded-2xl flex w-full h-auto"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap gap-8 p-3 justify-start">
                    <h2 className="text-[18px] text-[#7C4EE4] font-medium">
                      Development
                    </h2>
                    <h2 className="text-[18px] text-gray-400">16 March 2024</h2>
                  </div>
                  <p className="text-gray-800 text-[16px] leading-6 ">
                    {postData ? postData.title : ""}These lifelike environments
                    engage players in ways that traditional gaming cant, making
                    every moment feel like a real adventure. Whether exploring
                    vast open worlds, solving intricate puzzles, or engaging in
                    intense action sequences, VR makes it all come to life,
                    offering a level of immersion that pulls players directly
                    into the heart of the game.
                    <br />
                    <br />
                    AI takes these experiences to a whole new level by powering
                    intelligent, responsive characters and systems that adapt to
                    player actions in real time. Non-player characters (NPCs)
                    are no longer bound to predictable, scripted behaviors;
                    instead, they react dynamically to a player choices,
                    creating a more unpredictable and challenging environment.
                    This interaction not only enhances gameplay but also
                    provides a sense of depth and realism that keeps players on
                    their toes. Additionally, AI personalizes the gaming
                    experience by analyzing individual player preferences,
                    adjusting gameplay elements like difficulty levels,
                    storylines, and quests to tailor the adventure. This ensures
                    that no two players experience the same journey, adding
                    replay value and keeping the gameplay fresh.
                    <br />
                    <br />
                    One of the most exciting features of AI in gaming is dynamic
                    storytelling. AI-driven narratives evolve based on the
                    players decisions, making every choice feel significant and
                    impactful. This creates a more engaging experience, as
                    players see the consequences of their actions play out in
                    real-time, shaping the game world around them. Multiplayer
                    gaming also benefits from VR and AI, with VR avatars
                    replicating real-life movements and interactions, fostering
                    more authentic and socially engaging experiences. AI ensures
                    that games are fair, moderates player behavior, and even
                    detects cheating, creating a balanced and positive
                    environment for all.
                  </p>

                  {isContentVisible && (
                    <p className="text-gray-800 text-[16px] leading-6 mt-7">
                      For game developers, AI and VR are invaluable tools that
                      streamline the creation of intricate game assets and
                      detailed worlds. <br /> These technologies allow for
                      faster development cycles and more efficient production
                      workflows, enabling developers to focus on creativity and
                      innovation. AI-driven analytics provide insights into
                      player behavior and preferences, helping developers refine
                      gameplay, improve player engagement, and roll out timely
                      updates that keep players coming back. <br /> <br />{" "}
                      Together, VR and AI are revolutionizing the gaming world,
                      offering players captivating, personalized, and futuristic
                      experiences that challenge the limits of what gaming can
                      achieve. As these technologies continue to evolve, the
                      future of gaming looks more exciting and immersive than
                      ever before.
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
