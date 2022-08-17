import Link from "next/link";
import Head from "next/head";
import { client } from "../libs/client";
import HeaderRadius from "./components/header-radius";
import Footer from "./components/footer";
import Title from "./components/title";

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  // console.log(data);
  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });
  // console.log(categoryData);

  const thumbnailData = await client.get({ endpoint: "thumbnail" });
  const thumbnailData2 = thumbnailData.contents;
  console.log(thumbnailData2);

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
      thumbnail: thumbnailData2,
    },
  };
};

const Home = ({ blog, category, thumbnail }) => {
  return (
    <>
      {" "}
      <ul className="c-blog">
        {blog.map((blog) => (
          <li key={blog.id} className="c-blog-item">
            {blog.thumbnail && `${blog.thumbnail.url}`}
            <img
              src={blog.thumbnail && `${blog.thumbnail.url}`}
              className="c-blog-item__img"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
