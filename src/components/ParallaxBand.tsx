interface ParallaxBandProps {
  image: string;
  alt: string;
  blurDataURL?: string;
}

export default function ParallaxBand({ image, blurDataURL }: ParallaxBandProps) {
  return (
    <section
      className="relative h-[300px] md:h-[400px] bg-cover bg-center bg-fixed bg-earth"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label="Image décorative de séparation"
    >
      {blurDataURL && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
        />
      )}
      <div className="absolute inset-0 bg-night/20" />
    </section>
  );
}
