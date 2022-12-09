export  const inputs = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "First Name",
        label: "First Name",
        pattern: "^[A-Za-z]$",
        required: "true",
        errorMessage: "First Name be more than 3 characters and shouldn't include numbers and special characters"

    },
    {
        id: 2,
        name: "middleName",
        type: "text",
        placeholder: "Middle Name",
        label: "Middle Name",
        pattern: "^[A-Za-z]$",
        

    },
    {
        id: 3,
        name: "lastName",
        type: "text",
        placeholder: "Last Name",
        label: "Last Name",
        pattern: "^[A-Za-z]{3,20}$",
        required: "true",
        errorMessage: "Last Name be 3-20 characters and shouldn't include numbers &special characters"

    },
    {
        id: 4,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 5,
        name: "phonenumber",
        type: "text",
        placeholder: "Phone Number",
        errorMessage:
          "Phone number should be at least 7 characters and shouldn't include other characters",
        label: "Username",
        pattern: "^[0-9]{7,10}$",
        required: true,
      },
    //   {
    //     id: "month",
    //     name: "month",
    //     option: monthOption,

    //   },
    //   {
    //     id: "day",
    //     name: "day",
    //     option: dayOption,

    //   },
    //   {
    //     id: "year",
    //     name: "year",
    //     option: yearOption,

    //   },
      {
        id: 6,
        name: "district",
        type: "text",
        placeholder: "District",
        label: "District",
        pattern: "^[A-Za-z]$",
        

    },
    {
        id: 7,
        name: "city",
        type: "text",
        placeholder: "City",
        label: "City",
        pattern: "^[A-Za-z]$",
        

    },
    {
        id: 8,
        name: "country",
        type: "country",
        placeholder: "Country",
        label: "Country",
        pattern: "^[A-Za-z]$",
        

    }
      
]