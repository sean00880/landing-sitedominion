import Link from "next/link";
import Slider from "react-slick";
import { projectThreeActive } from "../../sliderProps";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section className="project-area-three py-130 rel z-1" id="project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Recent Projects</span>
              <h2>Showcasing Our Latest Web Design Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider {...projectThreeActive} className="project-three-active">
        <div className="project-item style-two wow fadeInUp delay-0-2s">
          <div className="project-iamge">
            <Image loading="lazy" width={480} height={225}
              src="/assets/images/projects/project-three1.png"
              alt="Project"
            />
            <div className="project-over">
              <Link legacyBehavior  href="/grandpa-rons">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link legacyBehavior  href="/grandpa-rons">Grandpa Ron&apos;s LLC</Link>
            </h4>
            <span className="category">Landscaping Business</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-4s">
          <div className="project-iamge">
            <Image loading="lazy" width={480} height={225}
              src="/assets/images/projects/project-three2.png"
              alt="Project"
            />
            <div className="project-over">
              <Link legacyBehavior  href="/explore-consultants">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link legacyBehavior  href="/explore-consultants">Explore Engineering Consultants Pvt. Ltd.</Link>
            </h4>
            <span className="category">Engineering Organization</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-6s">
          <div className="project-iamge">
            <Image loading="lazy" width={480} height={225}
              src="/assets/images/projects/project-three3.png"
              alt="Project"
            />
            <div className="project-over">
              <Link legacyBehavior  href="/explore-consultants">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link legacyBehavior  href="/metanetic">Metanetic</Link>
            </h4>
            <span className="category">Social Media Marketing Agency</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-8s">
          <div className="project-iamge">
            <Image loading="lazy" width={480} height={225}
              src="/assets/images/projects/project-three2.png"
              alt="Project"
            />
            <div className="project-over">
              <Link legacyBehavior  href="/metanetic">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link legacyBehavior  href="/project-details">Software Landing Pages</Link>
            </h4>
            <span className="category">Design Responsive</span>
          </div>
        </div>
      </Slider>
    </section>
  );
};
export default RecentProjects;
