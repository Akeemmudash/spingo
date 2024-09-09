import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ControlArms } from "../../assets";

const fetchRelatedPosts = async () => {
  return [
    {
      id: 1,
      title: "Revolutionizes Automotive Repair with Cutting-Edge Spare Parts",
      date: "August 16, 2024",
      image: ControlArms,
    },
    {
      id: 2,
      title: "Vescan Introduces New Innovations in Vehicle Suspension",
      date: "July 21, 2024",
      image: ControlArms,
    },
    {
      id: 3,
      title: "The Future of Automotive: AI-Driven Diagnostics",
      date: "September 10, 2024",
      image: ControlArms,
    },
  ];
};

const RelatedPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchRelatedPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load related posts.");
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) return <div>Loading related posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
        <div className="relatedpost">
                  {/* Large Screen View */}
      <div className="relatedpost-big">
        <div className="header-big">
          <h2>You might also Like</h2>
          <p>More articles <FaArrowRight /></p>
        </div>
        <div className="card-container-big">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="card-body">
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small Screen View */}
      <div className="relatedpost-small">
        <h2>You might also Like</h2>
        <div className="card-container-small">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="card-body">
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="moreArticles">More articles <FaArrowRight /></p>
      </div>
        </div>

    </div>

  );
};

export default RelatedPost;
