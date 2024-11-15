import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/activity_icon.png",
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
    },
    {
      id: 1,
      iconUrl: "/images/video_icon.png",
      title: "Video Editing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
    },
    {
      id: 2,
      iconUrl: "/images/chart_icon.png",
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="text-[16px] mt-2 font-semibold">
      At the core of the tourism and travel industry, our mission is to empower agencies with innovative digital-first solutions. We aim to streamline operations, enhance creativity, and boost efficiency through cutting-edge technology. Our platform is designed to simplify workflows, foster collaboration, and unlock new opportunities for growth. By integrating modern tools and services, we help agencies deliver exceptional experiences to their clients. We believe in redefining the way travel agencies operate in the digital era. With Tourist Junction, success becomes simpler, faster, and more sustainable. Join us in shaping the future of travel!
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div> */}
    </section>
  );
}

export default ServiceSection;
