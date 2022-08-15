import Title from "./Title";
import Content from "./Content";

const Article = (props) => {
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  );
};
export default Article;

// const Article = (props) => {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//     </div>
//   );
// };
// export default Article;

// const Article = (props) => {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//     </div>
//   );
// };
// export default Article;
