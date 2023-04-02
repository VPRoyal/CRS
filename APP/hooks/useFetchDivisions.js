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
      const division = () => {
            var sections = [], departments = []
            if (data) {
                  data.forEach(val => {
                        departments.push({ departID: val.departID, departName: val.departName })
                        sections.push(...val.section)
                  });
            }
            return [departments, sections]
      }
      useEffect(() => {

            fetch()
      }, [])
      return [division, err, isFetching]
}
export default useFetchDivisions;
