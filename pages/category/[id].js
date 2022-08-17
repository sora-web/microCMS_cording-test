// pages/category/[id].js
import Link from "next/link";
import Head from "next/head";
import { client } from "../../libs/client";
import Header from "../components/header";
import Footer from "../components/footer";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  console.log(data);

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

  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "categories" });
  // console.log(categoryData);

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};

const Category = ({ blog, category }) => {
  return (
    <>
      {" "}
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cording-test</title>
      </Head>
      <header className="l-header l-header--radius">
        <div className="l-header__inner">
          <div className="p-header">
            <div className="p-header__inner">
              <div className="p-header__logo">
                <Link href={`/`}>
                  <a>
                    <h1 className="c-logo">
                      <img src="/img/logo.svg" alt="Your Name" />
                    </h1>
                  </a>
                </Link>
              </div>
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
      <ul>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Header /> */}
      <section className="l-cont l-cont--design-tool">
        <div className="l-cont__inner l-cont--design-tool__inner">
          <div className="p-category">
            <div className="c-blog-heading">
              {blog.map((blog) => (
                <h2 key={blog.id} className="">
                  {blog.category && `${blog.category.name}`}
                </h2>
              ))}
            </div>
            <p>{blog.date}</p>

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
                          src={blog.thumbnail && `${blog.thumbnail.url}`}
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
