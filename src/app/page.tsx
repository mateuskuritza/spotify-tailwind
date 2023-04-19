import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${inter.className} h-screen flex flex-col`}>
            <div className='flex flex-1'>
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </main>
    )
}
