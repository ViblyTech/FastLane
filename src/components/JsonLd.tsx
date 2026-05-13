type Props = { data: object | object[] };

export function JsonLd({ data }: Props) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
