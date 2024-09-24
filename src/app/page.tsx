import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from '../components/component/header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Search, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <Header/>
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Chào mừng đến với LaptopWorld
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Khám phá chiếc laptop hoàn hảo cho nhu cầu của bạn. Từ những trạm làm việc mạnh mẽ đến các ultrabook mỏng nhẹ.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Tìm kiếm laptop..." type="text" />
                  <Button type="submit" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Tìm kiếm</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Laptop Nổi Bật</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "UltraBook Pro",
                  description: "Mạnh mẽ và nhẹ nhàng cho những người chuyên nghiệp di chuyển nhiều.",
                  price: "$1299",
                  image: "https://laptop88.vn/media/news/2910_hinhanhmaytinhxachtay4.jpg",
                },
                {
                  title: "GamerX Elite",
                  description: "Laptop chơi game hiệu năng cao với đồ họa RTX.",
                  price: "$1799",
                  image: "https://cdn.tgdd.vn/Files/2021/09/06/1380709/dell3511-shivtechsmart_1280x774-800-resize.jpg",
                },
                {
                  title: "StudentBook Air",
                  description: "Giá cả phải chăng và dễ di chuyển cho học sinh và người dùng thông thường.",
                  price: "$699",
                  image: "https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg",
                },
                {
                  title: "WorkStation Pro",
                  description: "Laptop mạnh mẽ cho các tác vụ chuyên nghiệp đòi hỏi cao.",
                  price: "$2199",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVYZI-GIusqU-O7z-HGjsbaNmjSbVnfoeFA&s",
                },
                {
                  title: "Convertible 360",
                  description: "Laptop 2-trong-1 linh hoạt với màn hình cảm ứng.",
                  price: "$999",
                  image: "https://cdn.tgdd.vn/Files/2019/01/09/1143716/man-hinh-ips-va-tn-tren-laptop-khac-nhau-nhu-the-nao-uu-nhuoc-diem-moi-loai-va-cach-nhan-biet-4.jpg",
                },
                {
                  title: "BudgetBook",
                  description: "Laptop giá rẻ cho các nhu cầu tính toán hàng ngày.",
                  price: "$499",
                  image: "https://www.shopcongngheso.vn/Upload/2021/1/6/dell-xps-9570-i7-8750h_bp-1973.jpg",
                },
              ].map((laptop, index) => (
                <Link href={'/detail'} key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle>{laptop.title}</CardTitle>
                    <CardDescription>{laptop.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={laptop.title}
                      className="w-full h-48 object-cover mb-4"
                      height="200"
                      src={laptop.image}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                    <p className="text-2xl font-bold">{laptop.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Thêm vào giỏ
                    </Button>
                  </CardFooter>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 LaptopWorld. Bản quyền thuộc về mọi quyền.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="text-xs hover:underline underline-offset-4" >
            Điều khoản dịch vụ
          </div>
          <div className="text-xs hover:underline underline-offset-4" >
            Chính sách bảo mật
          </div>
        </nav>
      </footer>
  </div>
  );
}
