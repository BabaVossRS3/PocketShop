import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BiLoaderAlt } from "react-icons/bi";
import ShopDetailsForm from "./ShopDetails";
import PersonalDetailsForm from "./PersonalDetailsForm";
import PasswordFields from "./PasswordFields";

const SignupForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    shopName: "",
    subdomain: "",
    description: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    logo: "" // Will store Cloudinary URL
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubdomainChange = (e) => {
    setFormData({
      ...formData,
      subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")
    });
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        variant: "destructive",
        title: "Σφάλμα",
        description: "Παρακαλώ επιλέξτε μια εικόνα"
      });
      return;
    }

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Upload failed');
      
      const { url } = await response.json();
      setFormData(prev => ({ ...prev, logo: url }));
      
      toast({
        title: "Επιτυχής Μεταφόρτωση",
        description: "Το λογότυπο ανέβηκε με επιτυχία"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Σφάλμα Μεταφόρτωσης",
        description: "Δοκιμάστε ξανά αργότερα"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast({
      title: "Παρακαλώ Περιμένετε...",
      description: "Επεξεργαζόμαστε την αίτησή σας"
    });

    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Οι κωδικοί πρόσβασης δεν ταιριάζουν");
      }

      if (formData.subdomain.length < 3) {
        throw new Error("Το subdomain πρέπει να έχει τουλάχιστον 3 χαρακτήρες");
      }

      const response = await fetch("/api/shop-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error((await response.json()).message || "Κάτι πήγε στραβά");
      }

      toast({
        title: "Η Αίτηση σας Υποβλήθηκε Επιτυχώς",
        className: "bg-green-500 text-white"
      });

      router.push("/signup/thank-you");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Κάτι Πήγε Στραβά",
        description: error.message || "Παρακαλώ ελέγξτε τα στοιχεία σας και προσπαθήστε ξανά"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ShopDetailsForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubdomainChange={handleSubdomainChange}
        handleLogoUpload={handleLogoUpload}
        isUploading={isUploading}
      />
      <PersonalDetailsForm
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <PasswordFields
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <Button
        type="submit"
        className="w-full bg-[#7886C7] hover:bg-[#2D336B]"
        disabled={isLoading || isUploading}
      >
        {isLoading ? (
          <BiLoaderAlt className="text-[#fff] animate-spin text-lg" />
        ) : (
          "Υποβολή Αίτησης"
        )}
      </Button>
    </form>
  );
};

export default SignupForm;