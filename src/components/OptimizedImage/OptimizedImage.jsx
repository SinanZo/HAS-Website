/* ────────────────────────────────────────────────────────── */
/*  src/components/OptimizedImage/OptimizedImage.jsx           */
/* ────────────────────────────────────────────────────────── */

import React, { useState, useEffect } from 'react';
import './OptimizedImage.css';

/**
 * OptimizedImage Component
 * Handles lazy loading, responsive sizing, and format negotiation
 * 
 * Usage:
 * <OptimizedImage
 *   src="/images/product.jpg"
 *   alt="Product name"
 *   width={300}
 *   height={300}
 *   priority={false}
 * />
 */
const OptimizedImage = ({
  src,
  alt = '',
  width = 300,
  height = 300,
  priority = false,
  className = '',
  onLoad = null,
  onError = null,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(!priority);
  const [imageRef, setImageRef] = useState(null);

  // Get image path without extension
  const getImageVariants = (basePath) => {
    const lastDot = basePath.lastIndexOf('.');
    const baseName = lastDot !== -1 ? basePath.substring(0, lastDot) : basePath;

    return {
      avif: `${baseName}.avif`,
      webp: `${baseName}.webp`,
      fallback: basePath
    };
  };

  const variants = getImageVariants(src);

  // High priority: load immediately
  useEffect(() => {
    if (!priority || !imageRef) return;

    const img = new Image();
    img.src = variants.fallback;
    img.onload = () => {
      setImageSrc(variants.fallback);
      setIsLoading(false);
      onLoad?.(img);
    };
    img.onerror = () => {
      setImageSrc(variants.fallback);
      setIsLoading(false);
      onError?.(img);
    };
  }, [priority, variants, onLoad, onError, imageRef]);

  // Low priority: lazy load with Intersection Observer
  useEffect(() => {
    if (priority || !imageRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = variants.fallback;
            img.onload = () => {
              setImageSrc(variants.fallback);
              setIsLoading(false);
              onLoad?.(img);
            };
            img.onerror = () => {
              setImageSrc(variants.fallback);
              setIsLoading(false);
              onError?.(img);
            };
            observer.unobserve(imageRef);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before visible
        threshold: 0
      }
    );

    observer.observe(imageRef);

    return () => observer.disconnect();
  }, [priority, variants, onLoad, onError, imageRef]);

  return (
    <picture
      ref={setImageRef}
      className={`optimized-image-wrapper ${isLoading ? 'loading' : 'loaded'} ${className}`}
    >
      {/* AVIF (best compression) */}
      <source srcSet={variants.avif} type="image/avif" />
      
      {/* WebP (good compression) */}
      <source srcSet={variants.webp} type="image/webp" />
      
      {/* Fallback (JPEG/PNG) */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="optimized-image"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
