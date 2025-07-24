import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data }: any = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-2xl font-bold text-gray-600">Profile Page</h1>
      <h2 className="text-md text-gray-500 font-semibold">Welcome, {data && data.user.fullname}</h2>
    </div>
  )
}

export default ProfilePage;