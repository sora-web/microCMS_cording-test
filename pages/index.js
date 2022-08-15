import Link from "next/link";
import { client } from "../libs/client";
import Article from "./components/Article";

const Home = ({ blog, category }) => {
  return (
    <section className="l-cont l-cont--design-tool">
      <div className="l-cont__inner l-cont--design-tool__inner">
        <div>
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
                            __html: `${blog.text}`,
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
  );
};
export default Home;

// データをテンプレートに受け渡す部分の処理を記述します;
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
