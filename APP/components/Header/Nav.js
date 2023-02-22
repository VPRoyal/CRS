import { useRef,useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './nav.module.css'
const links=[{"text":"Dashboard","path":"",},{"text":"Profile","path":"/profile"},{"text":"Complain!","path":"/complain"}]
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
        handleOnload()
     }
    const handleChange = (e) => {
        var tar = e.target
        if (tar.tagName == "A") {
            animate(selector.current, tar.parentElement)
        }
    }
    const handleOnload=()=>{
        var tar=link.current.children.active
        var elem=selector.current
        elem.style.setProperty('--width',tar.offsetWidth+'px')
        elem.style.setProperty('--pos',tar.offsetLeft+'px')
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
            {console.log("hi")}
            <div className={styles.box} >
                <div ref={selector} id={Pos?styles.animate:styles.animateEnd} className={styles.selector}>
                    <div className={styles.left} ></div>
                    <div className={styles.right} ></div>
                </div>
                <ul ref={link} onClick={handleChange} >
                    {
                        links.map((val,index)=>{
                            var active=router.asPath===("/dashboard"+val.path)?'active':null
                            return(<li key={index} name={active} className={styles[active]} ><Link href={"/dashboard"+val.path}>{val.text}</Link></li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
