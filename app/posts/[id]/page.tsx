// app/[userId]/page.js
export default function UserProfile({ params }: any) {
  const { id } = params;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}
