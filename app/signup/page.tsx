import { AuthLayout } from "@/components/auth/auth-layout";
import { SignupForm } from "@/components/auth/signup-form";

/**
 * Signup page - uses component-based structure
 * Displays signup form within auth layout
 */
export default function SignupPage() {
  return (
    <AuthLayout title="Sign up to get started">
      <SignupForm />
    </AuthLayout>
  );
}
