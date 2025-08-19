interface CourseBreadcrumbProps {
  courseTitle: string;
}

/**
 * Course breadcrumb navigation component
 * Shows navigation path: Home > Tracks > Course
 */
export function CourseBreadcrumb({ courseTitle }: CourseBreadcrumbProps) {
  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Home</span>
          <span>›</span>
          <span>Tracks</span>
          <span>›</span>
          <span className="text-gray-900">
            {courseTitle.split(" ")[0]} {courseTitle.split(" ")[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
