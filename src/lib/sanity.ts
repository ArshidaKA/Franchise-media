import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"; // ✅ Correct import

// Create Sanity client
export const client: SanityClient = createClient({
  projectId: "ma3xnu7x", // Find this in sanity.io/manage
  dataset: "production",
  useCdn: true, // false if you want fresh data
  apiVersion: "2025-09-30", // YYYY-MM-DD
});

// Create image builder
const builder: ImageUrlBuilder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source: SanityImageSource) => builder.image(source);
