import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        {/* <img src="/not_found.png" alt="404 Not Found" className="w-100 mb-4" /> */}
        <Image
          src="/not_found.png" alt="404 Not Found"
          width={400} height={300}
        />
        <h1 className="text-xl font-bold text-gray-600">404 | Halaman Tidak Ditemuka</h1>
      </div>
    </div>
  );
}

export default Custom404;