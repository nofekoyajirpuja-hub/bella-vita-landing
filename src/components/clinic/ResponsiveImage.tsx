interface ResponsiveImageProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
}

const ResponsiveImage = ({ desktopSrc, mobileSrc, alt, className = "" }: ResponsiveImageProps) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrc} />
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;
