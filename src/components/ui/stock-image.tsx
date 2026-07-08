import { useState, useCallback } from "react";
import { imageService, StockImageData, ImageCategory } from "@/lib/image-service";

interface StockImageProps {
  category: ImageCategory;
  index?: number;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

import { cn } from "@/lib/utils";

export function StockImage({
  category,
  index = 0,
  alt,
  className,
  width,
  height,
  priority = false,
}: StockImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(
    () => imageService.getImage(category, index).url,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError) {
      setHasError(true);
      // Try fallback image
      const fallbackImage = imageService.getImage("business", 0);
      setImageSrc(fallbackImage.url);
    }
  }, [hasError]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const imageData = imageService.getImage(category, index);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />}
      <img
        src={imageSrc}
        alt={alt || imageData.alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
        )}
      />
      {!isLoading && !hasError && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
          Photo by {imageData.photographer} on {imageData.source}
        </div>
      )}
    </div>
  );
}
