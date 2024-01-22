import type { Metadata } from 'next'
import { RedHat } from '@/Fonts/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Varos',
  description: 'Investir de forma mais inteligente passa por aqui. Conheça!',
  keywords: ['varos', 'investimentos', 'carteiras', 'finanças', 'fundos imobiliários', 'curso', 'cursos',
    'cursos finanças', 'curso finança']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
        <body className={`dark:bg-dark dark:text-white bg-white text-dark ${RedHat.className}`}>{children}</body>
    </html>
  )
}
