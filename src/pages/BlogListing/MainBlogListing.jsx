import React, { useState } from "react";
import {
  ClutchKibs,
  ControlArms,
  FuelPumps,
  OilFilters,
  SparkPlugs,
  WheelBearings,
} from "../../assets";
import { OverlayTrigger, Popover } from "react-bootstrap";

const AllBlog = () => {
  const initialBlogs = [
    {
      Image: ClutchKibs,
      header: "Telematics and Predictive Maintenance: The best way to go.",
      date: "October 16, 2024",
    },
    {
      Image: ControlArms,
      header: "3D Printing of Spare Parts",
      date: "October 16, 2024",
    },
    {
      Image: FuelPumps,
      header: "E-Commerce in Automotive Parts",
      date: "October 16, 2024",
    },
    {
      Image: OilFilters,
      header: "Telematics and Predictive Maintenance: The best way to go.",
      date: "October 16, 2024",
    },
    {
      Image: SparkPlugs,
      header: "3D Printing of Spare Parts",
      date: "October 16, 2024",
    },
    {
      Image: WheelBearings,
      header: "E-Commerce in Automotive Parts",
      date: "October 16, 2024",
    },
  ];

  const [blogs, setBlogs] = useState(initialBlogs);

  const loadMoreBlogs = () => {
    const additionalBlogs = [
      {
        Image: ClutchKibs,
        header: "Telematics and Predictive Maintenance: The best way to go.",
        date: "October 16, 2024",
      },
      {
        Image: ControlArms,
        header: "3D Printing of Spare Parts",
        date: "October 16, 2024",
      },
      {
        Image: FuelPumps,
        header: "E-Commerce in Automotive Parts",
        date: "October 16, 2024",
      },
    ];
    setBlogs([...blogs, ...additionalBlogs]);
  };

  const popover = (blog) => (
    <Popover>
      <Popover.Header as="h3">{blog.header}</Popover.Header>
    </Popover>
  );

  return (
    <>
    <div className="blog-grid">
      {blogs.map((blog, index) => (
        <div className="content-display" key={index}>
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={popover(blog)}
          >
            <div>
              <img src={blog.Image} alt={blog.header} />
            </div>
          </OverlayTrigger>
          <h3>{blog.header}</h3>
          <p>{blog.date}</p>
        </div>
      ))}
    </div>
      <div className="show-more-container">
        <button className="btn showMore" onClick={loadMoreBlogs}>
          Show More
        </button>
      </div>
      </>
  );
};

export default AllBlog;
