import React from 'react';
// import Image from 'next/image';
import { RiMenu3Fill } from 'react-icons/ri';
import { Drawer, DrawerBody,DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react'

  // import logo from '../../public/images/logo02.png'

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <div className='fixed top-1/2 right-0  bg-[#142028e8]  rounded-l-full items-center '>
        <Button ref={btnRef}  onClick={onOpen} colorScheme='link'>
        <RiMenu3Fill className='text-[#ff9900]   text-xl'/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor='#142028'>
            <DrawerCloseButton />
            <DrawerHeader color='gray.400' textAlign='center'> خدمات و محصولات وتنا</DrawerHeader>
  
            <DrawerBody>
              <div className='w-full'>
                <div className='grid grid-cols-2 gap-4 py-6'>
                 
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>جوجه یک روزه</p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>فروشگاه طیور </p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>داروخانه طیور</p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>اخبار طیور</p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>منابع آموزشی</p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>مشاوره تخصصی</p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>هوشمندسازی</p>
                  <p className='text-gray-300 text-center px-4 py-2 border rounded  cursor-pointer text-sm'>ارتباط با ما</p>

          
                

               

                </div>
              </div>
            </DrawerBody>
  
       
          </DrawerContent>
        </Drawer>
      </div>
    )
}

export default SideBar