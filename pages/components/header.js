// 動くバージョン

import MyApp from "../_app";
import Link from "next/link";

const Header = () => {
  return (
    <header className="l-header l-header--radius">
      <div className="l-header__inner">
        <div className="p-header">
          <div className="p-header__inner">
            <div className="p-header__logo">
              <h1 className="c-logo">
                <img src="/img/logo.svg" alt="Your Name" />
              </h1>
            </div>

            <div className="p-header-pc lg-on">
              <div className="p-header__nav">
                <ul className="p-header__list">
                  <li className="p-header__item lg-mr20">
                    <Link href={`/`}>
                      <a className="">aaaaa</a>
                    </Link>
                  </li>
                  <li className="p-header__item lg-mr20">
                    <Link href={`/`}>
                      <a className="">bbbbbb</a>
                    </Link>
                  </li>
                  <li className="p-header__item lg-mr20">
                    <Link href={`/`}>
                      <a className="">ccccccc</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

// 理想形ただし、動かない

// import Link from "next/link";
// import Head from "next/head";
// import { client } from "../../libs/client";

// // データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });
//   // console.log(data);

//   // カテゴリーコンテンツの取得
//   const categoryData = await client.get({ endpoint: "categories" });
//   // console.log(categoryData);

//   const thumbnailData = await client.get({ endpoint: "thumbnail" });
//   const thumbnailData2 = thumbnailData.contents;
//   // console.log(thumbnailData2);

//   return {
//     props: {
//       blog: data.contents,
//       category: categoryData.contents,
//       thumbnail: thumbnailData2,
//     },
//   };
// };

// const Header = ({ blog, category }) => {
//   return (
//     <ul>
//       {category.map((category) => (
//         <li key={category.id}>
//           <Link href={`/category/${category.id}`}>
//             <a>{category.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default Header;
