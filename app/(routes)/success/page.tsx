import Link from 'next/link';
import css from "./success.module.css"
 
export default function Success() {
  return (
        <div className={css.container}>
            <div className={css.background}></div>
            <div className={css.frame}>
                <h2> <span className={css.error}>You are now subscribed!</span></h2>
                <p>Soon, you will receive updates to the registered email! In the meantime, keep enjoying our website</p>

                <Link href="/">
                    <div className={css.button}>
                        <p>Go to home page</p>
                    </div>
                </Link>
            </div>
        </div>
  )
}; 