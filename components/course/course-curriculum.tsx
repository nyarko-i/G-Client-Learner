/* eslint-disable react/no-unescaped-entities */
interface CourseCurriculumProps {
  curriculum: string[];
}

/**
 * Course curriculum component displaying what students will learn
 * Features bullet-point list with custom styling
 */
export function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What you'll learn
      </h2>
      <ul className="space-y-3">
        {curriculum.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
