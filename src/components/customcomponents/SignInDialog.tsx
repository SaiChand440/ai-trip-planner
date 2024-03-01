import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/lib/supabase/browser";

export const SignInDialog = () => {
    const handleLoginWithOAuth = async () => {
        const supabase = createSupabaseClient();
        supabase.auth.signInWithOAuth({
          provider: "google",
          options:{
            redirectTo: location.origin + "/auth/callback"
          }
        })
    }
    
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default">Sign In</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign In</AlertDialogTitle>
          <AlertDialogDescription>
            Sign in to save your trip plans, see our recommended trips and access them on any device.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => {
            handleLoginWithOAuth();
          }}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
