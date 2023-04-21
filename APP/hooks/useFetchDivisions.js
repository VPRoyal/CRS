import axios from "axios";
import { useState, useEffect } from "react";
const useFetchDivisions = () => {
      const [isFetching, setFetching] = useState(false)
      const [data, setData] = useState(null)
      const [err, setErr] = useState(null)
      const fetch = async () => {
            setFetching(true)
            axios.get('http://localhost:5000/department/').then((res) => {
                  setData(res.data)
            }).catch((err) => {
                  setErr({ name: err.name, message: err.message, code: err.code })
            }).finally(() => { setFetching(false) })
      }
      const division = (type="department", id=null) => {
            var sections = [], departments = [], sectionByDepartID={}
            if (data) {
                  data.forEach(val => {
                        departments.push({ departID: val.departID, departName: val.departName })
                        sections.push(...val.section)
                        sectionByDepartID[val.departID]={
                              departName:val.departName,
                              sections:val.section}
                  });
            if(type==="department") return departments
            else if(type==="section"&&!id) return sections
            else if(type==="section"&&id&&sectionByDepartID.hasOwnProperty(id)) return sectionByDepartID[id]
            else []
            }
            return []
      }
      useEffect(() => {

            fetch()
      }, [])
      return [isFetching,division, err]
}
export default useFetchDivisions;
