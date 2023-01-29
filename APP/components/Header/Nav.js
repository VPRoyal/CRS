import { useRef,useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './nav.module.css'
const links=[{"text":"Dashboard","path":"",},{"text":"Profile","path":"profile"},{"text":"Complain!","path":"complain"},{"text":"Test","path":"test"}]
export default function Nav() {
    const router=useRouter()
    const selector = useRef()
    const link=useRef()
    const [Pos, setPos] = useState(false);
    const animate = (elem, target) => {
        let Cwidth=elem.offsetWidth, CPos = elem.offsetLeft
        let width=target.offsetWidth, pos=target.offsetLeft
        if (CPos === pos)
            return
        let f=CPos<pos?1:-1
        elem.style.setProperty('--PFactor',f+'px')
        elem.style.setProperty('--CPos',CPos+'px')
        elem.style.setProperty('--pos',pos+'px')
        elem.style.setProperty('--Cwidth',Cwidth+'px')
        elem.style.setProperty('--width',width+'px')
        setPos(true)
    }
    const removeAnimation= ()=>{
        setPos(false)
     }
    const handleChange = (e) => {
        var tar = e.target
        if (tar.tagName == "LI") {
            animate(selector.current, tar)
        }
    }
    const handleOnload=()=>{
        let tar=link.current.children.active
        let elem=selector.current
        elem.style.setProperty('--Cwidth',tar.offsetWidth+'px')
        elem.style.setProperty('--CPos',tar.offsetLeft+'px')
    }
    useEffect(() => {
        //Onload Management----->>>>>
        handleOnload()
        // Events Management---->>>>>
        const elem = selector.current;
        elem.addEventListener('animationend', removeAnimation);
        return () => {
          elem.removeEventListener('animationend', removeAnimation);
        };
      }, []);
    return (
        <div className={styles.wrap} >
            <div className={styles.box} >
                <div ref={selector} id={Pos?styles.animate:styles.animateEnd} className={styles.selector}>
                    <div className={styles.left} ></div>
                    <div className={styles.right} ></div>
                </div>
                <ul ref={link} onClick={handleChange} >
                    {
                        links.map((val,index)=>{
                            return(<li key={index} name={router.asPath===("/"+val.path)?'active':null} ><Link href={"/dashboard/"+val.path}>{val.text}</Link></li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
