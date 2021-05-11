import "../stylesheets/Link.css";

const Link = ({ content, active }) => {
  return <button className={active ? "link active" : "link"}>{content}</button>;
};

export default Link;
