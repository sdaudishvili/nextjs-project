import { useRouter } from 'next/router';

export default function UpdateProjectById() {
  const router = useRouter();
  return (
    <div className="flex">
      <h1>update project id: {router.query.id}</h1>
    </div>
  );
}
