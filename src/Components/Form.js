import { Component, useEffect } from "react";
import React from "react";
import './Form.css';
import { isCompositeComponent } from "react-dom/test-utils";

//to get the data from local storage
const getLocalItems = () => {
    let userlocal = localStorage.getItem('users')

    if (userlocal) {
        return JSON.parse(localStorage.getItem('users'))
    } else {
        return [];
    }
}

const delLocalItems = () => {
    let userlocal = localStorage.getItem('users')

    if (userlocal) {
        return JSON.parse(localStorage.getItem('users'))
    } else {
        return [];
    }
}


export default function Form() {
    
    
    const [formData, setFormData] = React.useState(
        {
        firstName: "", 
        middleName: "", 
        lastName:"", 
        email:"", 
        number:"",
        month: "Jan",
        day:"1",
        year:"2000",
        city:"",
        district:"",
        country:"Nepal",
        state:"Province 1"
     }
    )
    
    const [users, setUsers] = React.useState(getLocalItems())
    const [toggleSubmit, setToggleSubmit] = React.useState(true)
    const [isEditItem, setIsEditItem] = React.useState(null)
    const [isShowProfile, setIsShowProfile] = React.useState(false)
    const [displayProfile, setDisplayProfile] = React.useState({})
    
    const heading = ["FirstName", "MiddleName", "LastName", "Email", "Phone Number", "Month", "Day", "Year", "City", "District", "Country", "State" ,"Edit", "Del", "Show Profile"]
    
    function setItem(event) {
        if (formData && !toggleSubmit) {
                setUsers(users.map((ele) =>
                {
                    if (ele.id == isEditItem) {
                        return {...formData, [event.target.name]: event.target.value }
                }
                setToggleSubmit(!toggleSubmit)
                return ele
                
            })
                
                )
        }
        else {
        setUsers(prevUsers => {
            const allUsers = { id: new Date().getTime().toString(), ...formData}
            return [
                ...prevUsers,
                allUsers
            ]
        }
            )
    }
    }

    /// Add Data to localStorage

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    },[users]);
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        }
            )
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        console.log(users)

    }
    
    function editItem(id) {
        let newEditItem =  users.find((ele) => {
            return ele.id == id
        })
        console.log(newEditItem)
        setToggleSubmit(!toggleSubmit);
        setFormData(newEditItem);
        setIsEditItem(id);

    }
    function delItem(id) {
        let updateItems =  users.filter((ele) => {
            return ele.id != id
        })
        setUsers(updateItems)
    

        
        

    }

    var ProfileId = {}
    function showProfile(id) {
        let userProfile =  users.find((ele) => {
            return ele.id == id 
        })
        setIsShowProfile(!isShowProfile)
        setDisplayProfile(userProfile)
        
        

    }


    function userDisplayProfile(id) {
        
        return (
            <div className="userDetails" >
                <h1>User Details</h1>
                <h3>Name: {`${id.firstName} ${id.middleName} ${id.lastName}`}</h3>
                <h3>Email Address: {id.email}</h3>
                <h3>Phone Number: {id.number}</h3>
                <h3>Date of Birth: {`${id.month} ${id.day} ${id.year}`}</h3>
                <h3>Address: {`${id.city} ${id.district} ${id.state}, ${id.country}`}</h3>
            </div>
        )
    }

    
    
    

    let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul","Aug","Sep","Oct", "Nov","Dec"]
        
    const monthOption = months.map(month => {
        return <option value={month}>{month}</option>
    })

    var days = [...Array(31).keys()].map(x => x + 1)
    const dayOption =  days.map(day => {
        return <option value={day}>{day}</option>
    })

    var years = [...Array(125).keys()].map(x => x + 1900)
    const yearOption =  years.map(year => {
        return <option value={year}>{year}</option>
    })

    var states = [...Array(7).keys()].map(x => x + 1)
    const stateOption =  states.map(state => {
        return <option value={state}>Province {state}</option>
    })

    var checkEmpty = (ele, plchold) => ele == "" ? `Required ${plchold}` : ele;

    
    
    return (<>
        <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
            <div className="inlineInput">
                <div >
                    <h4>First Name *</h4>
                    <input
                        type="text"
                        placeholder= {checkEmpty(formData.firstName, "FirstName")}
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                        required
                        minLength="3"
                        
                        />
                    
                    
                </div>
              
             
                <div >
                    <h4>Middle Name</h4>
                    <input
                        type="text"
                        placeholder="Middle Name"
                        onChange={handleChange}
                        name="middleName"
                        value={formData.middleName}
                        
                        />
                </div>

                <div >
                    <h4>Last Name *</h4>
                    <input
                        type="text"
                        placeholder={checkEmpty(formData.lastName, "Last Name")}
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                        required
                        />
                </div>
            </div>
            <div className="inlineInput">
                <div>
                    <h4>Email *</h4>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        required
                    />
                </div>
                <div>
                    <h4>Phone Number *</h4>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        name="number"
                        value={formData.number}
                        minLength="7"
                        required
                        />
                </div>
                </div>
            
            {/* <input
                type="date"
                placeholder="DOB"
                onChange={handleChange}
                name="date"
                value={formData.date}
                /> */}
            <div className="inlineInput">
                <div>
                    <h4>Month</h4>
                    <select
                        id="month"
                        value={formData.month}
                        onChange={handleChange}
                        name="month"
                        >
                        {monthOption}
                    </select>
                </div>
                <div>
                    <h4>Day</h4>
                    <select
                        id="day"
                        value={formData.day}
                        onChange={handleChange}
                        name="day"
                        >
                        {dayOption}
                    </select>
                
                </div>
                <div>
                    <h4>Year</h4>
                    <select
                        id="year"
                        value={formData.year}
                        onChange={handleChange}
                        name="year"
                        >
                        {yearOption}
                    </select>
                </div>

                <div>
                    <h4>City</h4>
                    <input
                        type="city"
                        placeholder="City"
                        onChange={handleChange}
                        name="city"
                        value={formData.city}
                        />
                </div>
            </div>

            <div className="inlineInput">
                
                <div>
                    <h4>District</h4>
                    <input
                        type="district"
                        placeholder="District"
                        onChange={handleChange}
                        name="district"
                        value={formData.district}
                        />
                </div>
                <div style={{marginLeft: "45px"}}>
                    <h4>State</h4>
                    <select
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        name="state"
                        >
                        {stateOption}
                    </select>
                </div>
                <div>
                    <h4>Country</h4>
                    <input
                        type="country"
                        placeholder="Coutry"
                        onChange={handleChange}
                        name="country"
                        value={formData.country}
                        />
                </div>
            </div>
            
            
            {
                toggleSubmit ? <button type="submit" onClick={setItem}>Submit</button> :
                <button  onClick={setItem}>Edit</button>
            }
            
        </form>
        

        <div className="tables">
        <table >
              <thead>
                  <tr>
                      {heading.map(data => <th>{data}</th>)}
                  </tr>
              </thead>
              <tbody>
                {
                    users.map((ele) => {
                        return(
                            <tr key = {ele.id}>
                                <td>{ele.firstName}</td>
                                <td>{ele.middleName}</td>
                                <td>{ele.lastName}</td>
                                <td>{ele.email}</td>
                                <td>{ele.number}</td>
                                <td>{ele.month}</td>
                                <td>{ele.day}</td>
                                <td>{ele.year}</td>
                                <td>{ele.city}</td>
                                <td>{ele.district}</td>
                                <td>{ele.country}</td>
                                <td>{ele.State}</td>
                                <td><button onClick={()=> editItem(ele.id)} className="edit">E</button></td>
                                <td><button onClick={() => delItem(ele.id)} className="del">D</button></td>
                                {
                                    !isShowProfile ? <td><button onClick={() => showProfile(ele.id)}  className="profile">Show Profile</button></td> : <td><button onClick={() => showProfile(ele.id)}  className="profile"> Hide Profile</button></td>
                                }
                                



                            </tr>
                        )
                    })
                }
              </tbody>
        </table>
        </div>

        {
            isShowProfile &&  userDisplayProfile(displayProfile)
        }
        </>
    )
}



