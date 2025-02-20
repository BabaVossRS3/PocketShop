import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// PasswordFields.jsx
const PasswordFields = ({ formData, handleInputChange }) => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="password">Κωδικός Πρόσβασης</Label>
          <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Επιβεβαίωση Κωδικού</Label>
          <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required />
        </div>
      </div>
    );
  };
  export default PasswordFields;