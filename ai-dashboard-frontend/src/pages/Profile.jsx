import { motion } from "framer-motion";
import { UserCircle, Edit, Mail, Phone } from "lucide-react";

const user = {
  name: "Parvej Khan",
  email: "parvej@example.com",
  phone: "+91 9876543210",
  role: "Software Developer",
  joined: "Jan 15, 2024",
  avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Parvej",
};

const Profile = () => {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
        <UserCircle className="w-6 h-6" />
        My Profile
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-6 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-purple-500"
          />
          <h3 className="text-xl font-semibold mt-4">{user.name}</h3>
          <p className="text-purple-500 text-sm">{user.role}</p>
          <span className="text-gray-400 text-xs mt-1">Joined {user.joined}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Mail className="w-4 h-4" /> Email
              </p>
              <p className="font-medium">{user.email}</p>
            </div>
            <Edit className="text-purple-500 cursor-pointer w-4 h-4" />
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Phone className="w-4 h-4" /> Phone
              </p>
              <p className="font-medium">{user.phone}</p>
            </div>
            <Edit className="text-purple-500 cursor-pointer w-4 h-4" />
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium">{user.role}</p>
            </div>
            <Edit className="text-purple-500 cursor-pointer w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
