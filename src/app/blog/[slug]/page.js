export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <span>{params.slug}</span>
    </main>
  );
}
