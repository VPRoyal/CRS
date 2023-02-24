import React, { Component, createRef } from 'react'
import styles from "./Filter.module.css"
import Select from '../Customs/Select'
export default class Filter extends Component {
    constructor() {
        super()
        this.state = {
            reset: true,
            item: 0
        }

        this.items = new Array;
        this.status = { resolved: false, pending: false }
        this.date = { from: null, to: null }

        // this.handleReset = this.handleReset.bind(this);
        this.form = createRef()
    }
    handleReset = () => {
        this.form.current.reset()
        this.items = new Array;
        this.setState({
            item: 0, reset: true
        })
    }
    handleSubmit = () => {
        var submit = {
            status: this.status,
            date: this.date,
            items: this.items
        }

    }
    handleItem = (e) => {
        var sib = e.target.previousSibling
        this.setState({ reset: false })
        if (sib.tagName === "SPAN") {
            this.items.splice(this.items.indexOf(sib.innerHTML), 1)
            this.setState({ item: this.state.item - 1 })
        }
    }
    handleSelect = (data) => {
        this.setState({ reset: false })
        if (this.items.indexOf(data) === -1 &&data) {
            this.items.push(data);
            this.setState({ item: this.state.item + 1 })
        }
    }
    render() {
        return (

            <div id={styles.filter} >
                <div id={styles.title} ><h1>Filter</h1></div>

                <form ref={this.form} name="form" id={styles.body}>
                    <div className={styles.boxes} id={styles.status}>
                        <h4>STATUS</h4>
                        <div>
                            <input onClick={(e) => { this.status.resolved = e.target.checked }} type="checkbox" name="" value="" id='resolved' />
                            <label htmlFor="resolved">Resolved</label>
                            <input onChange={(e) => { this.status.resolved = e.target.checked }} type="checkbox" name="" value="" id='pending' />
                            <label htmlFor="pending">Pending</label>
                        </div>
                    </div>
                    <div className={styles.boxes} id={styles.date}>
                        <h4>DATE</h4>
                        <div>
                            <div>
                                <label>From</label>
                                <input onChange={(e) => { this.date.from = e.target.value }} type="date" />
                            </div>
                            <div>
                                <label>To</label>
                                <input min="2022-01-17" max={new Date().toJSON().slice(0, 10)} onChange={(e) => { this.date.to = e.target.value }} type="date" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxes} id={styles.section}>
                        <h4>SECTION</h4>
                        <div>
                            <div id={styles.items}>
                                <ul>
                                    {this.items.map((val, index) => {
                                        return (
                                            <li key={index} ><span>{val}</span><span onClick={this.handleItem}><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                            </svg></span></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div id={styles.add}>
                                <Select title="Add Section" options={["DSW", "Academic", "Sports", "Scholarship", "ID Card"]} databack={(data) => { this.handleSelect(data) }} />
                            </div>
                        </div>
                    </div>
                </form>
                <div id={styles.footer}><button onClick={this.handleReset} type="reset">Reset</button><button onClick={this.handleSubmit} type="submit">Apply</button></div>
            </div>
        )
    }
}
