import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";

const CreateUserDialog = ({ isOpen, onOpenChange, onCreateUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    shopName: "",
    subdomain: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateUser(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      shopName: "",
      subdomain: "",
    });
  };

  const handleSubdomainChange = (e) => {
    // Only allow lowercase letters, numbers, and hyphens
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    setFormData(prev => ({ ...prev, subdomain: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-[#7886C7] hover:bg-[#2D336B]">
          <Plus className="mr-2 h-4 w-4" /> Create New User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>
            Create credentials for a new shop owner.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="shopName">Shop Name</Label>
            <Input
              id="shopName"
              value={formData.shopName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  shopName: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subdomain">
              Subdomain
              <span className="ml-1 text-sm text-gray-500">
                .pocketshop.gr
              </span>
            </Label>
            <Input
              id="subdomain"
              value={formData.subdomain}
              onChange={handleSubdomainChange}
              placeholder="my-shop"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#7886C7] hover:bg-[#2D336B]"
          >
            Create User
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserDialog;