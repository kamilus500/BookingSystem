import React from "react";
import ContentLoader from "react-content-loader";

const OpinionLoader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="28" cy="30" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="15" y="61" rx="2" ry="2" width="311" height="151" />
    </ContentLoader>
  );
};

export default OpinionLoader;
