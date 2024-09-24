import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Header } from '@/components/component/header'

export default function page() {
  return (
    <div>
         <Header/>
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                   Liên hệ với chúng tôi
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Mua hàng ngay
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                   Tìm hiểu thêm
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <p>24 Hàm Nghi, Đà Nẵng</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <p>09192381293</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <p>contact@acmelaptops.com</p>
                </div>
                <form className="space-y-4 mt-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Your Message" />
                  <Button type="submit">Gửi tin nhắn</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 LaptopWorld. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </div>
          <div className="text-xs hover:underline underline-offset-4" >
            Privacy
          </div>
        </nav>
      </footer>
    </div>
  )
}
