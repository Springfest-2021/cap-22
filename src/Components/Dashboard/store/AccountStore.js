import {Container} from "unstated";

const initialState = () => ({
    college_options: null,
    gender_options: [
        {value: 'F', label: 'Female'},
        {value: 'M', label: 'Male'},
        {value: 'O', label: 'Others'}
    ],
    yop_options: [
        {value: '2020', label: '2020'},
        {value: '2021', label: '2021'},
        {value: '2022', label: '2022'},
        {value: '2023', label: '2023'},
        {value: '2024', label: '2024'},
        {value: '2025', label: '2025'},
        {value: '2026', label: '2026'},
        {value: '2027', label: '2027'}
    ],
    state_options: [
        {
            "value": "Andaman and Nicobar Islands",
            "label": "Andaman and Nicobar Islands"
        },
        {
            "value": "Andhra Pradesh",
            "label": "Andhra Pradesh"
        },
        {
            "value": "Arunachal Pradesh",
            "label": "Arunachal Pradesh"
        },
        {
            "value": "Assam",
            "label": "Assam"
        },
        {
            "value": "Bihar",
            "label": "Bihar"
        },
        {
            "value": "Chandigarh",
            "label": "Chandigarh"
        },
        {
            "value": "Chhattisgarh",
            "label": "Chhattisgarh"
        },
        {
            "value": "Dadra and Nagar Haveli",
            "label": "Dadra and Nagar Haveli"
        },
        {
            "value": "Daman and Diu",
            "label": "Daman and Diu"
        },
        {
            "value": "Delhi",
            "label": "Delhi"
        },
        {
            "value": "Goa",
            "label": "Goa"
        },
        {
            "value": "Gujarat",
            "label": "Gujarat"
        },
        {
            "value": "Haryana",
            "label": "Haryana"
        },
        {
            "value": "Himachal Pradesh",
            "label": "Himachal Pradesh"
        },
        {
            "value": "Jammu and Kashmir",
            "label": "Jammu and Kashmir"
        },
        {
            "value": "Jharkhand",
            "label": "Jharkhand"
        },
        {
            "value": "Karnataka",
            "label": "Karnataka"
        },
        {
            "value": "Kerala",
            "label": "Kerala"
        },
        {
            "value": "Lakshadweep",
            "label": "Lakshadweep"
        },
        {
            "value": "Madhya Pradesh",
            "label": "Madhya Pradesh"
        },
        {
            "value": "Maharashtra",
            "label": "Maharashtra"
        },
        {
            "value": "Manipur",
            "label": "Manipur"
        },
        {
            "value": "Meghalaya",
            "label": "Meghalaya"
        },
        {
            "value": "Mizoram",
            "label": "Mizoram"
        },
        {
            "value": "Nagaland",
            "label": "Nagaland"
        },
        {
            "value": "Odisha",
            "label": "Odisha"
        },
        {
            "value": "Puducherry",
            "label": "Puducherry"
        },
        {
            "value": "Punjab",
            "label": "Punjab"
        },
        {
            "value": "Rajasthan",
            "label": "Rajasthan"
        },
        {
            "value": "Sikkim",
            "label": "Sikkim"
        },
        {
            "value": "Tamil Nadu",
            "label": "Tamil Nadu"
        },
        {
            "value": "Telangana",
            "label": "Telangana"
        },
        {
            "value": "Tripura",
            "label": "Tripura"
        },
        {
            "value": "Uttar Pradesh",
            "label": "Uttar Pradesh"
        },
        {
            "value": "Uttarakhand",
            "label": "Uttarakhand"
        },
        {
            "value": "West Bengal",
            "label": "West Bengal"
        }
    ]
})

export default class AccountStore extends Container{
    name = "AccountStore";
    state = initialState();
    init = () => {
    }
    setCollegeList = async (values) => {
        var options = [];
        values.forEach((value) => {options.push({value: value.college, label: value.college})});
        await this.setState({college_options: options});
        localStorage.setItem("college_options", JSON.stringify(options));
    }
    linkedStores = {}
    bindStore = store => {
        this.linkedStores[store.name] = store;
    }
}