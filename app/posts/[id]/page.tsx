// app/user/[id]/page.js

export default function UserProfile({ params }: any) {
  const { id } = params;
  console.log(params);
  return (
    <div>
      <h1>User Profile: {id}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const users = [{ id: "1" }, { id: "2" }, { id: "3" }];
  return users.map((user) => ({ id: user.id }));
}

export async function serverSideProps({ params }: any) {
  const { id } = params;
  console.log(params);
  return {
    props: {
      id,
    },
  };
}
