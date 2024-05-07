import { FaBox, FaCodeBranch, FaThLarge, FaUsers } from 'react-icons/fa'
import { SiGoogleanalytics } from 'react-icons/si'
import { PiCourtBasketball } from 'react-icons/pi'
import { MdEditCalendar } from 'react-icons/md'

export const routes = [
  {
    name: 'Analytics',
    href: '/',
    icon: SiGoogleanalytics,
    // permissions: ['superadmin', 'admin'],
  },
  {
    name: 'Category',
    href: '/category',
    icon: FaThLarge,
    // permissions: ['superadmin', 'admin'],
  },
  {
    name: 'Product',
    href: '/product',
    icon: FaBox,
    // permissions: ['superadmin', 'admin'],
  },
  {
    name: 'User',
    href: '/user',
    icon: FaUsers,
    // permissions: ['superadmin', 'admin'],
  },
]
