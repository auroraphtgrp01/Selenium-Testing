'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { getAllUsers, registerUser } from '../(functionHandler)/function';

export default function Page() {
  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    console.log(getAllUsers());
    
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhoneNumber = (phoneNumber: string) => {
    const re = /^\+?[0-9]{10,15}$/
    return re.test(phoneNumber)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const { fullname, phoneNumber, email, password, confirmPassword } = formData

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Số điện thoại không hợp lệ')
      toast({
        title: "Validation Error !",
        description: "Số điện thoại không hợp lệ - Vui lòng thử lại.",
        variant: "destructive",
      })
      return
    }

    if (!validateEmail(email)) {
      setError('Email không hợp lệ')
      toast({
        title: "Validation Error !",
        description: "Email không hợp lệ - Vui lòng thử lại.",
        variant: "destructive",
      })
      return
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp')
      toast({
        title: "Validation Error !",
        description: "Mật khẩu không khớp - Vui lòng thử lại.",
        variant: "destructive",
      })
      return
    }

    setError('')
    const result = {
      fullname,
      phoneNumber,
      email,
      password
    }
    console.log(result)
    registerUser(result)
    toast({
      title: "Success !",
      description: "Đăng ký tài khoản thành công.",
      variant: "success",
    })
    
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-gray-500 dark:text-gray-400">Tạo tài khoản để bắt đầu.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Tên</Label>
              <Input 
                id="name" 
                name='fullname' 
                placeholder="John Doe" 
                required 
                value={formData.fullname} 
                onChange={handleChange} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input 
                id="phone" 
                type="tel" 
                name='phoneNumber' 
                placeholder="+1 (555) 555-5555" 
                required 
                value={formData.phoneNumber} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              name='email' 
              placeholder="example@email.com" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input 
              id="password" 
              type="password" 
              name='password' 
              required 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
            <Input 
              id="confirm-password" 
              type="password" 
              name='confirmPassword' 
              required 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="w-full">
            Đăng ký
          </Button>
        </form>
      </div>
    </div>
  )
}
