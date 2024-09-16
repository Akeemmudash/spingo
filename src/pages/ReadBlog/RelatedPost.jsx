import { useEffect, useState } from "react";
import { ControlArms } from "../../assets";
import Button from "../../components/Button";
import ArticleCard from "../../components/ArticleCard";
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
      } catch (err) {
        if (err) {
          setError(err.message);
        } else {
          setError("Failed to load related posts.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) return <div>Loading related posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="relatedpost container mt-5">
      <div className="">
        <div className="relatedpost-content">
          <div className="header-big d-flex justify-content-between">
            <h2 className="font-primary">You might also Like</h2>
            <div className="d-none d-md-block">
              <Button
                buttonType="link"
                hasUnderlineAndArrow
                variant="underline"
                to="/blog"
              >
                More articles
              </Button>
            </div>
          </div>
          <div className="card-container-big  mt-4 row mx-auto">
            {posts.map((post) => (
              <div className=" col-12 col-sm-6 col-lg-4 mb-2" key={post.id}>
                <ArticleCard title={post.title} />
              </div>
            ))}
          </div>
          <div className="d-block d-md-none ms-1">
            <Button
              buttonType="link"
              hasUnderlineAndArrow
              variant="underline"
              to="/blog"
            >
              More articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPost;
