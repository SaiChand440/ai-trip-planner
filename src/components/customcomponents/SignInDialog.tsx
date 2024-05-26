import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/lib/supabase/browser";


export const SignInDialog = ({isSideBar, toggle}:
  {isSideBar: boolean; 
   toggle ?: () => void       
 }) => {
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
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="default" onClick={()=>{
        if(isSideBar && toggle){
          toggle()
        }
      }}>Sign In</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>
          Sign in to save your trip plans, see our recommended trips and access them on any device.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="default" onClick={() => {
          handleLoginWithOAuth();
        }}>Continue</Button>
      </DialogFooter>
    </DialogContent>
    </Dialog>
  );
}
