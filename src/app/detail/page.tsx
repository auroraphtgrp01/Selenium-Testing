'use client'
import { Header } from '@/components/component/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, ShieldCheck, Star, Truck } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePurchase = () => {
    toast.success('Đã mua hàng thành công!');
    setIsOpen(false); // Đóng dialog sau khi thanh toán thành công
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hình ảnh sản phẩm */}
          <div className="space-y-4">
            <div className="relative aspect-square">
              <img
                src="https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg"
                alt="MacBook Pro 16-inch"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Chi tiết sản phẩm */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">MacBook Pro 16-inch (2023)</h1>
              <p className="text-xl text-muted-foreground mt-2">
                Sức mạnh và hiệu suất được đẩy xa hơn
              </p>
            </div>

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary" />
              ))}
              <span className="text-sm text-muted-foreground">(256 đánh giá)</span>
            </div>

            <div className="text-3xl font-bold">$2,499.00</div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tính năng chính:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Chip Apple M2 Pro hoặc M2 Max cho hiệu suất đột phá</li>
                <li>Màn hình Liquid Retina XDR 16 inch</li>
                <li>Lên đến 32GB bộ nhớ hợp nhất</li>
                <li>Lưu trữ SSD siêu nhanh lên đến 8TB</li>
                <li>Thời lượng pin lên đến 22 giờ</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1">Thêm vào giỏ</Button>
              <Button size="lg" variant="blue" className="flex-1" onClick={() => setIsOpen(true)}>
                Mua ngay
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Giao hàng miễn phí
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" />
                Bảo hành 2 năm
              </div>
            </div>
          </div>
        </div>

        {/* Dialog Chi tiết đơn hàng */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
              <Dialog.Title className="text-lg font-semibold">Chi tiết đơn hàng</Dialog.Title>
              <Dialog.Description className="mt-2">
                MacBook Pro 16-inch (2023) - $2,499.00
              </Dialog.Description>
              <div className="mt-4">
                <Button className="w-full" onClick={handlePurchase}>Thanh toán</Button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Tabs sản phẩm */}
        <Tabs defaultValue="description" className="mt-[-150px]">
          <TabsList>
            <TabsTrigger value="description">Mô tả</TabsTrigger>
            <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p>
                  MacBook Pro mới mang lại hiệu suất thay đổi cuộc chơi cho các chuyên gia. Với chip M2 Pro hoặc M2 Max mạnh mẽ, màn hình Liquid Retina XDR sáng rực rỡ và thời lượng pin cả ngày trong một thiết kế di động, đây là chiếc laptop chuyên nghiệp tốt nhất thế giới.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          {/* ... các tab khác ... */}
        </Tabs>
      </div>
      <ToastContainer />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 LaptopWorld. Bản quyền thuộc mọi quyền.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="text-xs hover:underline underline-offset-4">
            Điều khoản dịch vụ
          </div>
          <div className="text-xs hover:underline underline-offset-4">
            Chính sách bảo mật
          </div>
        </nav>
      </footer>
    </div>
  )
}
