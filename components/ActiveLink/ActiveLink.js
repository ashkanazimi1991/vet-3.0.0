



import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    // marginRight: 10,
    color: router.asPath === href ? '#FFED00' : '#fff',
    // backgroundColor: router.asPath === href ? '#040f1491' : '#040f1491',
    width: '100%',
    // paddingRight:'18px'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
