import { client } from "../../libs/client";
import Header from "../components/header";
import Footer from "../components/footer";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default function BlogId({ blog }) {
  return (
    <>
      {" "}
      <Header />
      <main>
        <div className="l-heading">
          <div className="l-heading__inner">
            <div className="p-heading">
              <div className="p-heading__inner">
                <div className="c-blog-item__text-area">
                  <div className="c-blog-item__head">
                    <p className="c-blog-item__cat p-heading__cat">
                      {blog.category && `${blog.category.name}`}
                    </p>
                    <p className="c-blog-item__date p-heading__date">
                      {blog.date}
                    </p>
                  </div>
                </div>
                <h1 className="p-heading__title">{blog.title}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="l-cont-page">
          <div className="l-cont-page__inner">
            <div className="p-article">
              <div className="p-article__inner">
                <div
                  className="p-article__text"
                  dangerouslySetInnerHTML={{
                    __html: `${blog.text}`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
