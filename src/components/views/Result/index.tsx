import DetailArticle from "./DetailArticle";
import Reference from "./Reference";

import styles from "./Result.module.scss";

const Result = () => {
  return (
    <>
      <article className={styles.summary}>
        <h3>
          <p> 방배서리풀e편한세상 아파트 108동 802호</p>
          <span>서울 서초구 효령로33길 50</span>
        </h3>

        <div className={styles.buttonWrap}>
          <button>공유하기</button>
          <button>위치확인</button>
        </div>
      </article>
      <DetailArticle />
      <DetailArticle />
      <DetailArticle />
      <DetailArticle />
      <Reference />
    </>
  );
};

export default Result;
