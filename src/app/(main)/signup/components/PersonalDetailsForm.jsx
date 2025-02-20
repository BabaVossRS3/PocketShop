import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const PersonalDetailsForm = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-[#2D336B]">Προσωπικά Στοιχεία</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Όνομα</Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Επώνυμο</Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Τηλέφωνο</Label>
          <Input 
            id="phoneNumber" 
            name="phoneNumber" 
            type="tel" 
            value={formData.phoneNumber} 
            onChange={handleInputChange}
            placeholder="69XXXXXXXX"
            required 
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;