export default function UserLayout({ children }: any) {
  return (
    <div>
      <div className="text-[30px]">
        <h1>Tech Blogs</h1>
        <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />
      </div>

      <div className="text-white m-10 flex  overflow-hidden">
        {children}
        <p></p>
      </div>
    </div>
  );
}
