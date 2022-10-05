import Layout from 'src/components/Layout'

export default function ProtectedPage() {

  // If session exists, display content
  return (
    <Layout>
      <h1>Protected Page</h1>
    </Layout>
  )
}
