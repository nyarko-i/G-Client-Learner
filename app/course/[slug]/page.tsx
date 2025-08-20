import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";
import { CourseBreadcrumb } from "@/components/course/course-breadcrum";
import { CourseHeader } from "@/components/course/course-header";
import { CourseCurriculum } from "@/components/course/course-curriculum";
import { RelatedCourses } from "@/components/course/related-courses";
import { CourseSidebar } from "@/components/course/course-sidebar";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

/**
 * Individual course detail page
 * Shows course information, curriculum, pricing, and related courses
 */
export default function CoursePage({ params }: CoursePageProps) {
  // Mock course data - in real app this would be fetched based on slug
  const getCourseData = (slug: string) => {
    const courses = {
      "software-development": {
        title: "Software Development Track",
        description:
          "Unlock your potential with comprehensive training in modern software development techniques and best practices. Learn React, Node.js, PostgreSQL, WebGL, and DevOps.",
        instructor: "John Doe",
        enrolledStudents: 50,
        duration: "3 months",
        rating: 4.5,
        price: 350.0,
        image: "/images/our-solutions/software.jpg",
        curriculum: [
          "Build full-stack development projects for your portfolio, ready to apply for junior developer jobs.",
          "Build fully-fledged websites and web apps for your startup or business.",
          "Master frontend development with React, JavaScript, HTML, CSS, Vue and Angular.",
          "Master backend development with Node, PHP, Python etc.",
          "Master backend development with React, Node, Python etc.",
        ],
        relatedCourses: [
          {
            title: "Data Science Mastery",
            description:
              "Equip yourself with the skills to analyze, interpret, and leverage data.",
            image: "/images/our-solutions/data.jpg",
          },
          {
            title: "Cloud Computing",
            description:
              "Gain hands-on experience in cloud architecture, preparing you to manage scalable solutions.",
            image: "/images/our-solutions/cloud.jpg",
          },
        ],
      },
      "data-science-mastery": {
        title: "Data Science Mastery Track",
        description:
          "Equip yourself with the skills to analyze, interpret, and leverage data to drive business growth. Learn machine learning, statistical analysis, and data visualization.",
        instructor: "John Doe",
        enrolledStudents: 50,
        duration: "3 months",
        rating: 4.5,
        price: 350.0,
        image: "/images/our-solutions/data.jpg",
        curriculum: [
          "Learn data analysis and visualization with Python, Pandas, and Matplotlib.",
          "After the course, you will be able to analyze, visualize, and interpret complex datasets with confidence.",
          "Optimize and test machine learning models and data-driven applications.",
          "Master data analysis and visualization with Python, Pandas, Matplotlib, and Seaborn.",
          "Gain expertise in machine learning, deep learning, AI, and business growth.",
        ],
        relatedCourses: [
          {
            title: "Software Development",
            description:
              "Unlock your potential with comprehensive training in modern software development.",
            image: "/images/our-solutions/software.jpg",
          },
          {
            title: "Cloud Computing",
            description:
              "Gain hands-on experience in cloud architecture, preparing you to manage scalable solutions.",
            image: "/images/our-solutions/cloud.jpg",
          },
        ],
      },
      "cloud-computing-expertise": {
        title: "Cloud Computing Expertise",
        description:
          "Gain hands-on experience in cloud computing, preparing you to manage scalable solutions. Learn AWS, Azure, and cloud architecture best practices.",
        instructor: "John Doe",
        enrolledStudents: 50,
        duration: "3 months",
        rating: 4.5,
        price: 350.0,
        image: "/images/our-solutions/cloud.jpg",
        curriculum: [
          "Gain a fundamental understanding of cloud computing and best practices.",
          "Designing and managing applications in AWS, Azure, and GCP.",
          "Serverless computing with AWS Lambda, Azure Functions, and Google Cloud Functions.",
          "Containerization and orchestration with Docker and Kubernetes.",
          "CI/CD pipelines and DevOps practices for cloud-based applications.",
        ],
        relatedCourses: [
          {
            title: "Data Science Mastery",
            description:
              "Equip yourself with the skills to analyze, interpret, and leverage data.",
            image: "/images/our-solutions/data.jpg",
          },
          {
            title: "Software Development",
            description:
              "Unlock your potential with comprehensive training in modern software development.",
            image: "/images/our-solutions/software.jpg",
          },
        ],
      },
    };

    return (
      courses[slug as keyof typeof courses] || courses["software-development"]
    );
  };

  const course = getCourseData(params.slug);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <CourseBreadcrumb courseTitle={course.title} />

      {/* Course Header */}
      <CourseHeader
        title={course.title}
        description={course.description}
        instructor={course.instructor}
        enrolledStudents={course.enrolledStudents}
        duration={course.duration}
        rating={course.rating}
        image={course.image}
      />

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <CourseCurriculum curriculum={course.curriculum} />
              <RelatedCourses courses={course.relatedCourses} />
            </div>

            {/* Sidebar */}
            <CourseSidebar
              duration={course.duration}
              enrolledStudents={course.enrolledStudents}
              instructor={course.instructor}
              price={course.price}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
