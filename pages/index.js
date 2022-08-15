import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog, category }) {
  return (
    <div>
      <ul className="c-blog">
        {blog.map((blog) => (
          <li key={blog.id} className="c-blog-item">
            <Link href={`/blog/${blog.id}`}>
              <a>
                <div className="c-blog-item__head">
                  <p className="c-blog-item__cat">{blog.category2}</p>
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
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
