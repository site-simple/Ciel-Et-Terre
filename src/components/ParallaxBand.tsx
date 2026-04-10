interface ParallaxBandProps {
  image: string;
  alt: string;
}

export default function ParallaxBand({ image }: ParallaxBandProps) {
  return (
    <section
      className="relative h-[300px] md:h-[400px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-night/20" />
    </section>
  );
}
