// pages/category/[id].js
import Link from "next/link";
import { client } from "../../libs/client";
import Header from "../components/header";
import Footer from "../components/footer";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${id}` },
  });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

const Category = ({ blog, category }) => {
  return (
    <>
      {" "}
      {/* <Header /> */}
      <section className="l-cont l-cont--design-tool">
        <div className="l-cont__inner l-cont--design-tool__inner">
          <div className="p-category">
            <div className="c-blog-heading">
              {blog.map((blog) => (
                <h2 key={blog.id} className="c-blog-item">
                  {blog.category && `${blog.category.name}`}
                </h2>
              ))}
            </div>
            <ul className="c-blog">
              {blog.map((blog) => (
                <li key={blog.id} className="c-blog-item">
                  <Link href={`/blog/${blog.id}`}>
                    <a>
                      <div className="c-blog-item__text-area">
                        <div className="c-blog-item__head">
                          <p className="c-blog-item__cat">
                            {blog.category && `${blog.category.name}`}
                          </p>
                          <p className="c-blog-item__date">{blog.date}</p>
                        </div>
                        <div className="c-blog-item__body">
                          <p className="c-blog-item__title">{blog.title}</p>
                          <div
                            className="c-blog-item__text"
                            dangerouslySetInnerHTML={{
                              __html: `${blog.desc}`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="c-blog-item__img-area">
                        <img
                          src="img/POST_THUMBNAIL.jpg"
                          className="c-blog-item__img"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Category;
