import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Loader2 } from "lucide-react";
import Image from "next/image";

const ShopDetailsForm = ({ formData, handleInputChange, handleSubdomainChange, handleLogoUpload, isUploading }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-[#2D336B]">Στοιχεία Καταστήματος</h3>
      
      {/* Logo Upload Section */}
      <div className="space-y-2">
        <Label htmlFor="logo">Λογότυπο Καταστήματος</Label>
        <p className="text-sm text-gray-500">Μέγιστο μέγεθος: 5MB. Προτεινόμενη ανάλυση: 512x512px</p>
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center overflow-hidden">
            {formData.logo ? (
              <Image
                src={formData.logo}
                alt="Shop Logo"
                fill
                className="object-cover"
              />
            ) : (
              <div className="text-center p-2">
                <ImagePlus className="w-8 h-8 mx-auto text-gray-400" />
                <span className="text-xs text-gray-500">Upload Logo</span>
              </div>
            )}
            <Input
              id="logo"
              name="logo"
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleLogoUpload}
              disabled={isUploading}
            />
          </div>
          {isUploading && (
            <Loader2 className="w-6 h-6 animate-spin text-[#2D336B]" />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="shopName">Όνομα Καταστήματος</Label>
        <Input 
          id="shopName" 
          name="shopName" 
          value={formData.shopName} 
          onChange={handleInputChange} 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subdomain">Υποτομέας (Subdomain)</Label>
        <div className="flex items-center space-x-2">
          <Input 
            id="subdomain" 
            name="subdomain" 
            value={formData.subdomain} 
            onChange={handleSubdomainChange} 
            placeholder="to-katastima-sas" 
            required 
          />
          <span className="text-[#2D336B]/70">.pocketshop.gr</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Περιγραφή Καταστήματος</Label>
        <Textarea 
          id="description" 
          name="description" 
          value={formData.description} 
          onChange={handleInputChange} 
          placeholder="Περιγράψτε το κατάστημά σας..." 
          required 
        />
      </div>
    </div>
  );
};

export default ShopDetailsForm;