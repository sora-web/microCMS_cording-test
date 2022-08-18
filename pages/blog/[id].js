import Head from "next/head";
import Link from "next/link";
import { client } from "../../libs/client";
import Footer from "../../components/footer";
import Title from "../../components/title";
import MyHead from "../../components/head";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const BlogData = await client.get({ endpoint: "blog" });
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      BlogData: BlogData.contents,
      blog: data,
      category: categoryData.contents,
    },
  };
};

export default function BlogId({ blog, category, BlogData }) {
  return (
    <>
      <MyHead title={"Article_Page"} />
      <header className="l-header l-header--radius">
        <div className="l-header__inner">
          <div className="p-header">
            <div className="p-header__inner">
              <Link href={`/`}>
                <a>
                  <h1 className="c-logo">
                    <img src="/img/logo.svg" alt="Your Name" />
                  </h1>
                </a>
              </Link>
              <div className="p-header-pc lg-on">
                <div className="p-header__nav">
                  <ul className="p-header__list">
                    {category.map((category) => (
                      <li key={category.id} className="p-header__item lg-mr20">
                        <Link href={`/category/${category.id}`}>
                          <a>{category.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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

        <div className="l-cont-page">
          <div className="l-cont-page__inner">
            <div className="c-blog-heading">
              <Title title={"最近の記事"} />
            </div>
            <ul className="c-blog">
              {BlogData.map((blog) => (
                <>
                  {(() => {
                    if (blog.category.name === "WeeklyUpdates") {
                      return (
                        <li className="c-blog-item" key={blog.id}>
                          <Link href={`/blog/${blog.id}`}>
                            <a>
                              <div className="c-blog-item__text-area">
                                <div className="c-blog-item__head">
                                  <p className="c-blog-item__cat">
                                    {blog.category && `${blog.category.name}`}
                                  </p>
                                  <p className="c-blog-item__date">
                                    {blog.date}
                                  </p>
                                </div>
                                <div className="c-blog-item__body">
                                  <p className="c-blog-item__title">
                                    {blog.title}
                                  </p>

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
                                  src={
                                    blog.thumbnail && `${blog.thumbnail.url}`
                                  }
                                  className="c-blog-item__img"
                                />
                              </div>
                            </a>
                          </Link>
                        </li>
                      );
                    }
                  })()}
                </>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
