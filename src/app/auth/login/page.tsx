'use client'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button';
import { useToast } from '../../../components/ui/use-toast';
import { loginUser } from '../(functionHandler)/function';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';

export default function page() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const [error, setError] = useState('')
      const { toast } = useToast()
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { email, password } = formData
    
        if (!email || !password) {
          setError('Vui lòng điền đầy đủ email và mật khẩu.')
          toast({
            title: "Validation Error !",
            description: "Vui lòng điền đầy đủ email và mật khẩu.",
            variant: "destructive",
          })
          return
        }
    
        setError('')
        try {
          const userData = await loginUser(email, password).then((res) => {
            if(res?.status) { 
                toast({
                    title: "Đăng nhập thành công !",
                    description: "Chào mừng bạn trở lại",
                    variant: "success",
                  })
            } else { 
                toast({
                    title: "Đăng nhập thất bại",
                    description: "Vui lòng kiểm tra lại email và mật khẩu.",
                    variant: "destructive",
                  })
            }
          })
        } catch (error) {
          toast({
            title: "Error !",
            description: "Đăng nhập không thành công - Vui lòng kiểm tra lại email và mật khẩu.",
            variant: "destructive",
          })
        }
      }
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
          <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Đăng nhập</h1>
              <p className="text-gray-500 dark:text-gray-400">Nhập email và mật khẩu để đăng nhập.</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full">
                Đăng nhập
              </Button>
            </form>
          </div>
        </div>
      )
}
