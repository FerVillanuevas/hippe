export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <article className="prose prose-lg dark:prose-invert container mx-auto max-w-4xl">
      {children}
    </article>
  );
}
