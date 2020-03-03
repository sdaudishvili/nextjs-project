import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  )
}

export default Page
