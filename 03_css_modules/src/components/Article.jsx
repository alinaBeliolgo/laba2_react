function Article({ title, text }) {
    return (
      <article className="article">
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  }
  
  export default Article;
  