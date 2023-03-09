import styles from "./Result.module.scss";

const DetailArticle = () => {
  return (
    <article className={styles.detailArticle}>
      <h3>주택 상태 확인하기</h3>
      <p>무허가 불법 주택은 아닌지, 현장상태는 어떤지 주택상태를 확인해요.</p>

      <dl>
        <dt>[주택 상태 확인]</dt>
        <dd>- 불법 건축물이 있습니다.</dd>
        <dd>- 이 건물은 제2종 근린생활용도에요.</dd>
      </dl>

      <div>
        <img src="" alt="icon" />
        <p>Tip! 입주전 사진 및 동영상을 남겨두는 것이 좋아요.</p>
      </div>
    </article>
  );
};

export default DetailArticle;
