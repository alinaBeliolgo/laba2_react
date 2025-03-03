function Article({ title, text }) {
  return (
    <article className="bg-white shadow-lg rounded-lg p-5 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </article>
  );
}

export default Article;