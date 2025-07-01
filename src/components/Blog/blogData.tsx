import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "🧠 Best AI Tools to Analyze Fight Performance",
    paragraph:
      "Explore the most effective UI and data components built for combat — enabling seamless access to stats, visualizations, and performance breakdowns.",
    image: "/crise.io/images/blog/blog-02.jpg",
    author: {
      name: "Hrithik",
      image: "/crise.io/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "🥊 9 Ways to Improve Your Fight IQ with Data",
    paragraph:
      "From real-time feedback to historical comparisons — learn how fighters and coaches use Crise.io insights to sharpen strategy and reaction time.",
    image: "/crise.io/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/crise.io/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
