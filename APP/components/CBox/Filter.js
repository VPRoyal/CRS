import React, { Component, createRef } from 'react'
import styles from "./Filter.module.css"
export default class Filter extends Component {
    constructor() {
        super()
        this.state = {
            reset:true,
            check: false,
            item: 0
        }

        this.items=new Array;
        this.status={resolved:false,pending:false}
        this.date={from:null,to:null}

        // this.handleReset = this.handleReset.bind(this);
        this.form=createRef()
    }
    handleReset=()=>{
        this.form.current.reset()
        this.items=new Array;
        this.setState({check: false,
            item: 0,reset:true})
    }
    handleSubmit=()=>{
        var submit={
            status:this.status,
            date:this.date,
            items:this.items
        }
        
    }
    handleItem = (e) => {
        var sib = e.target.previousSibling
        this.setState({reset:false})
        if (sib.tagName === "SPAN") {
            this.items.splice(this.items.indexOf(sib.innerHTML), 1)
            this.setState({ item: this.state.item-1})
        }
    }
    handleSelect = (e) => {
        this.setState({reset:false})
        if (e.target.tagName == "LI") {
            var val=e.target.innerHTML
            this.setState({ check: false })
            if(this.items.indexOf(val) === -1) {
                this.items.push(val);
                this.setState({ item: this.state.item+1})
            }
        }
    }
    render() {
        return (
            
            <div id={styles.filter} >
                <div id={styles.title} ><h1>Filter</h1></div>
                
                    <form ref={this.form} name="form" id={styles.body}>
                    <div  className={styles.boxes} id={styles.status}>
                        <h4>STATUS</h4>
                        <div>
                            <input onClick={(e)=>{this.status.resolved=e.target.checked}} type="checkbox" name="" value="" id='resolved' />
                            <label htmlFor="resolved">Resolved</label>
                            <input onChange={(e)=>{this.status.resolved=e.target.checked}} type="checkbox" name="" value="" id='pending' />
                            <label htmlFor="pending">Pending</label>
                        </div>
                    </div>
                    <div className={styles.boxes} id={styles.date}>
                        <h4>DATE</h4>
                        <div>
                            <div>
                                <label>From</label>
                                <input onChange={(e)=>{this.date.from=e.target.value}} type="date" />
                            </div>
                            <div>
                                <label>To</label>
                                <input min="2022-01-17" max={new Date().toJSON().slice(0,10)} onChange={(e)=>{this.date.to=e.target.value}} type="date" />
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
                                <div>
                                    <ul>
                                        <label>Add Section</label>
                                        <input checked={this.state.check} onChange={(e) => { this.setState({ check: e.target.checked }) }} type="checkbox" id='select' />
                                        <label htmlFor='select' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                            </svg>
                                        </label></ul>
                                    <ul onClick={this.handleSelect} style={{ display: this.state.check ? 'flex' : 'none' }} >
                                        <li>DoSW</li>
                                        <li>Academic</li>
                                        <li>DoSW</li>
                                        <li>DoSW</li>
                                        <li>DoSW</li>
                                        <li>DoSW</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div id={styles.footer}><button onClick={this.handleReset} type="reset">Reset</button><button onClick={this.handleSubmit} type="submit">Apply</button></div>
            </div>
        )
    }
}
