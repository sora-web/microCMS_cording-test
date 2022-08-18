import Link from "next/link";
import Head from "next/head";
import { client } from "../../../libs/client";
import Footer from "../../../components/footer";
import Title from "../../../components/title";
import MyHead from "../../../components/head";
import { Pagination } from "../../..//components/Pagination";

const PER_PAGE = 5;

// 動的なページを作成
// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });

  const pageNumbers = [];

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
      totalCount: data.totalCount,
    },
  };
};

const BlogPageId = ({ blog, category, totalCount }) => {
  return (
    <>
      <MyHead title={"Cording_Test"} />
      <header className="l-header l-header--radius">
        <div className="l-header__inner">
          <div className="p-header p-header--radius">
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

      <section className="l-cont l-cont--design-tool">
        <div className="l-cont__inner l-cont--design-tool__inner">
          {/* DesignTools */}
          <div className="p-home">
            <div className="c-blog-heading">
              <Title title={"Design Tools"} />
            </div>
            <ul className="c-blog">
              {blog.map((blog) => (
                <>
                  {(() => {
                    if (blog.category.name === "DesignTools") {
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

          {/* WeeklyUpdates */}
          <div className="p-home">
            <div className="c-blog-heading">
              <Title title={"Weekly Updates"} />
            </div>
            <ul className="c-blog">
              {blog.map((blog) => (
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
          {/* tutorial */}
          <div className="p-home">
            <div className="c-blog-heading">
              <Title title={"Tutorials"} />
            </div>
            <ul className="c-blog">
              {blog.map((blog) => (
                <>
                  {(() => {
                    if (blog.category.name === "Tutorials") {
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
          <div className="p-home">
            <Pagination totalCount={totalCount} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BlogPageId;
