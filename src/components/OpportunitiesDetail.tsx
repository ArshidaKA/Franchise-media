import { useParams } from "react-router-dom";

const BusinessDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Convert slug → readable title
  const formattedTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Business Details";

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {formattedTitle}
      </h1>

      {/* Placeholder description */}
      <p className="text-gray-600 leading-relaxed">
        Detailed information about <strong>{formattedTitle}</strong> will appear here.
        You can dynamically load data using API, JSON file, or context.
      </p>

      {/* Future section */}
      <div className="mt-8 p-4 border rounded-xl bg-gray-50">
        <p className="text-sm text-gray-500">
          Tip: Fetch business details using the slug:
          <code className="bg-white px-2 py-1 rounded ml-2">
            /business/{slug}
          </code>
        </p>
      </div>
    </div>
  );
};

export default BusinessDetail;
