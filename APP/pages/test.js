import Head from 'next/head'
import Request from '../components/Dashboard/request'
import Select from '../components/Customs/Select'
export default function Home() {
    return(
      <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Test Design</title>
        <link rel="icon" href="/Mnit_trans.png" type="image/x-icon"/>
      </Head>
        <Select title="Add Section" options={["DSW", "Academic","Sports","Scholarship","ID Card"]} callback={(val)=>{console.log(val)}}/>
      </>
    )
  }