import Link from "next/link";
import Head from "next/head";
import { client } from "../libs/client";
import Footer from "./components/footer";
import Title from "./components/title";

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { limit: 20, offset: 0, limit: 20 },
  });

  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};

const Home = ({ blog, category }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cording-test</title>
      </Head>

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
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
