import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";

/**
 * Login page - uses component-based structure
 * Displays login form within auth layout
 */
export default function LoginPage() {
  return (
    <AuthLayout title="Log in to continue your learning journey">
      <LoginForm />
    </AuthLayout>
  );
}
