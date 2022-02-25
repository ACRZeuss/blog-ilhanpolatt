import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title='Hakkımızda - Blog | İlhan Polat'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>Hakkımızda</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>Blog | İlhan Polat</h3>

        <p className='mb-3'>Merhaba, adım İlhan Polat, Fotoğrafçıyım. Başkent Üniversitesi, İletişim Fakültesi, Radyo, Televizyon ve Sinema bölümünde 1. sınıf öğrencisiyim. Fotoğrafçılık yapmaya devam ediyorum, onun haricinde videografi de öğreniyorum. Bu siteyi de insanlara erişebilmek için kurduk.</p>
      </div>
    </Layout>
  )
}
