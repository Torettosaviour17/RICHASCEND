// import React from "react";

const VideoSection = () => {
  const videos = [
    {
      title: "Transformer Manufacturing",
      desc: "See how our transformers are built to last",
      path: "/videos/manufacturing.mp4",
    },
    {
      title: "Solar Installation",
      desc: "Watch our installation process",
      path: "/videos/installation.mp4",
    },
    {
      title: "Case Study: Industrial Park",
      desc: "Successful implementation at a major facility",
      path: "/videos/casestudy.mp4",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video Showcase
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See our products in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                >
                  <source src={video.path} type="video/mp4" />
                </video>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

