// app/user/layout.js
export default function UserLayout({ children }: any) {
  return (
    <div>
      <nav>User Navigation</nav>
      <div className="text-white">
        {children}
        <p></p>
      </div>
    </div>
  );
}
