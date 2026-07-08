// Free stock image service using multiple APIs
export interface StockImageData {
  url: string;
  photographer: string;
  source: string;
  alt?: string;
}

// Define the type for fallback images to make it accessible
export type ImageCategory = "business" | "finance" | "office" | "hero";

class ImageService {
  private pixabayApiKey = process.env.VITE_PIXABAY_API_KEY || "";
  private pexelsApiKey = process.env.VITE_PEXELS_API_KEY || "";
  private unsplashApiKey = process.env.VITE_UNSPLASH_API_KEY || "";

  // Fallback curated images that don't require API keys
  private fallbackImages: Record<ImageCategory, StockImageData[]> = {
    business: [
      {
        url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Fauxels",
        source: "Pexels",
        alt: "Business team meeting in modern office",
      },
      {
        url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Fauxels",
        source: "Pexels",
        alt: "Professional business meeting",
      },
    ],
    finance: [
      {
        url: "https://images.pexels.com/photos/530212/pexels-photo-530212.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Kaboompics.com",
        source: "Pexels",
        alt: "Finance and accounting documents",
      },
      {
        url: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Scott Webb",
        source: "Pexels",
        alt: "Calculator and financial planning",
      },
    ],
    office: [
      {
        url: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Pixabay",
        source: "Pexels",
        alt: "Modern office workspace",
      },
      {
        url: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Christina Morillo",
        source: "Pexels",
        alt: "Team working on laptops",
      },
    ],
    hero: [
      {
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Unsplash",
        source: "Unsplash",
        alt: "Professional business team collaboration",
      },
      {
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
        photographer: "Fauxels",
        source: "Pexels",
        alt: "Business professionals in meeting",
      },
    ],
  };

  // Get image by category with fallback
  getImage(category: ImageCategory, index: number = 0): StockImageData {
    const images = this.fallbackImages[category];
    if (images && images[index]) {
      return images[index];
    }

    // Return a default image if category not found
    return {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
      photographer: "Fauxels",
      source: "Pexels",
      alt: "Professional business meeting",
    };
  }

  // Get random image from category
  getRandomImage(category: ImageCategory): StockImageData {
    const images = this.fallbackImages[category];
    if (images && images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    return this.getImage("business");
  }

  // Search Pixabay (requires API key)
  async searchPixabay(query: string, perPage: number = 20): Promise<StockImageData[]> {
    if (!this.pixabayApiKey) {
      console.warn("Pixabay API key not found, using fallback images");
      return [this.getImage("business")];
    }

    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${this.pixabayApiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${perPage}`,
      );
      const data = await response.json();

      return data.hits.map((hit: any) => ({
        url: hit.webformatURL,
        photographer: hit.user,
        source: "Pixabay",
        alt: hit.tags || "Stock image",
      }));
    } catch (error) {
      console.error("Pixabay API error:", error);
      return [this.getImage("business")];
    }
  }

  // Search Pexels (requires API key)
  async searchPexels(query: string, perPage: number = 20): Promise<StockImageData[]> {
    if (!this.pexelsApiKey) {
      console.warn("Pexels API key not found, using fallback images");
      return [this.getImage("business")];
    }

    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
        {
          headers: {
            Authorization: this.pexelsApiKey,
          },
        },
      );
      const data = await response.json();

      return data.photos.map((photo: any) => ({
        url: photo.src.large,
        photographer: photo.photographer,
        source: "Pexels",
        alt: photo.alt || "Stock image",
      }));
    } catch (error) {
      console.error("Pexels API error:", error);
      return [this.getImage("business")];
    }
  }

  // Search Unsplash (requires API key)
  async searchUnsplash(query: string, perPage: number = 20): Promise<StockImageData[]> {
    if (!this.unsplashApiKey) {
      console.warn("Unsplash API key not found, using fallback images");
      return [this.getImage("business")];
    }

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}`,
        {
          headers: {
            Authorization: `Client-ID ${this.unsplashApiKey}`,
          },
        },
      );
      const data = await response.json();

      return data.results.map((photo: any) => ({
        url: photo.urls.regular,
        photographer: photo.user.name,
        source: "Unsplash",
        alt: photo.description || photo.alt_description || "Stock image",
      }));
    } catch (error) {
      console.error("Unsplash API error:", error);
      return [this.getImage("business")];
    }
  }
}

export const imageService = new ImageService();

// Helper function for React components
export function getStockImageUrl(category: ImageCategory, index?: number): string {
  return imageService.getImage(category, index).url;
}
