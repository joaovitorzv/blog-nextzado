import Link from "next/link";
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <div className={utilStyles.errorPage}>
      <h1>404 - Sorry page not found</h1>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  )
}