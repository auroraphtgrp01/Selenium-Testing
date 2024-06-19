'use client'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table"
import { Button } from '../../components/ui/button'
import { callTest } from '../auth/(functionHandler)/function'
import { TestCase, initTestCase } from '../../constants/data'
import { useToast } from '../../components/ui/use-toast'
  

export default function page() {
    const { toast } = useToast()
    const [testCase, setTestCase] = useState<TestCase[]>(initTestCase)
    function callTestFunc(item: TestCase) { 
        callTest(item.code).then((res) => {
            if(res.status === 'PASSED') { 
                setTestCase(testCase.map((i) => i.code === item.code ? {...i, status: 'PASSED'} : i))
                toast({
                    title: "Test Passed",
                    description: `Test case ${item.code} passed successfully`,
                    variant: "success",
                })
            } else { 
                setTestCase(testCase.map((i) => i.code === item.code ? {...i, status: 'FAILED'} : i))
                toast({
                    title: "Test Failed",
                    description: `Test case ${item.code} failed`,
                    variant: "destructive",
                })
            }
        })
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
    <div className="w-full max-w-5xl space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
      <Table className="mx-auto">
        <TableCaption>A list of test case</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">#</TableHead>
            <TableHead>Case</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {testCase.map((item, index) => (
                <TableRow key={index}>
            <TableCell className="font-medium">{index +1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
                <Button variant={'destructive'} onClick={() => {
                    callTestFunc(item)
                }}>
                    Run Test
                </Button>
            </TableCell>
            <TableCell>
                {item.status === 'FAILED' && (
                    <Button variant={'destructive'}>
                    FAILED
                    </Button>
                )}
                {item.status === 'PASSED' && (
                    <Button variant={'green'}>
                    PASSED
                    </Button>
                )}
                {item.status === 'PENDING' && (
                    <Button variant={'blue'}>
                    PENDING
                    </Button>
                )}
            </TableCell>
          </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  </div>
  
  )
}
