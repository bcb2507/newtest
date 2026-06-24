export default function BlogImage({ 
  src, 
  alt, 
  floatDirection = 'left', 
  width = '300px' 
}: {
  src: string;
  alt: string;
  floatDirection?: 'left' | 'right';
  width?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        float: floatDirection,
        marginRight: floatDirection === 'left' ? '20px' : '0',
        marginLeft: floatDirection === 'right' ? '20px' : '0',
        width: width,
        marginBottom: '10px'
      }}
    />
  );
}
