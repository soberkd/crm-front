import { tokens } from "../theme";

export const mockDataTeam = [
  {
    "id": 1,
    "name": "Gilly Kim",
    "email": "Gillykim100@gmail.com",
    "age": 26,
    "phone": "+254700236628",
    "access": "administrator",
    "property_managed": ["Villa Serenity", "Lakeview Apartments"]
  },
  {
    "id": 2,
    "name": "Wanjiku Mwangi",
    "email": "wanjikumwangi@gmail.com",
    "age": 42,
    "phone": "+254733333333",
    "access": "manager",
    "property_managed": ["Green Gardens Estate", "Palm Grove Apartments"]
  },
  {
    "id": 3,
    "name": "James Kimani",
    "email": "jameskimani@gmail.com",
    "age": 45,
    "phone": "+254711111111",
    "access": "agent",
    "property_managed": ["Riverside Villas", "Sunset Residences"]
  },
  {
    "id": 4,
    "name": "Amina Odhiambo",
    "email": "aminaodhiambo@gmail.com",
    "age": 28,
    "phone": "+254799999999",
    "access": "administrator",
    "property_managed": ["Highland Towers", "Oceanfront Homes"]
  },
  {
    "id": 5,
    "name": "David Mutua",
    "email": "davidmutua@gmail.com",
    "age": 31,
    "phone": "+254788888888",
    "access": "agent",
    "property_managed": ["Mara Gardens", "Skyview Apartments"]
  },
  {
    "id": 6,
    "name": "Esther Muthoni",
    "email": "esthermuthoni@gmail.com",
    "age": 38,
    "phone": "+254766666666",
    "access": "manager",
    "property_managed": ["Safari Homes", "Valley View Villas"]
  },
  {
    "id": 7,
    "name": "Francis Njoroge",
    "email": "francisnjoroge@gmail.com",
    "age": 44,
    "phone": "+254755555555",
    "access": "agent",
    "property_managed": ["Hillside Residences", "Golden Gate Apartments"]
  },
  {
    "id": 8,
    "name": "Grace Wangari",
    "email": "gracewangari@gmail.com",
    "age": 36,
    "phone": "+254722222222",
    "access": "agent",
    "property_managed": ["Maple Gardens", "Prestige Towers"]
  },
  {
    "id": 9,
    "name": "Harrison Otieno",
    "email": "harrisonotieno@gmail.com",
    "age": 50,
    "phone": "+254733333333",
    "access": "administrator",
    "property_managed": ["Lakeside Residences", "Golden Sands Condos"]
  }
];

export const mockDataClients = [
  {
    id: 1,
    clientName: "Eugene",
    contactInformation: {
      phoneNumber: "+1234567890",
      emailAddress: "john.smith@example.com",
      mailingAddress: "123 Main St, Nairobi",
    },
    numberOfPropertiesListed: 17,
    numberOfPropertiesSold: 7,
    totalSalesRevenue: "Ksh 55,000,000",
    activeListings: 10,
    propertiesUnderContract: 3,
    clientType: "Realtor",
  },
  {
    id: 2,
    clientName: "Emily Johnson",
    contactInformation: {
      phoneNumber: "+9876543210",
      emailAddress: "emily.johnson@example.com",
      mailingAddress: "456 Elm St, Mombasa",
    },
    numberOfPropertiesListed: 4,
    numberOfPropertiesSold: 2,
    totalSalesRevenue: "Ksh 4,000,000",
    activeListings: 2,
    propertiesUnderContract: 0,
    clientType: "Property Owner",
  },
  {
    id: 3,
    clientName: "David Kimani",
    contactInformation: {
      phoneNumber: "+254712345678",
      emailAddress: "david.kimani@example.com",
      mailingAddress: "789 Oak St, Kisumu",
    },
    numberOfPropertiesListed: 2,
    numberOfPropertiesSold: 1,
    totalSalesRevenue: "Ksh 2,500,000",
    activeListings: 1,
    propertiesUnderContract: 1,
    clientType: "Property Seller",
  },
  {
    id: 4,
    clientName: "Grace Akinyi",
    contactInformation: {
      phoneNumber: "+254721234567",
      emailAddress: "grace.akinyi@example.com",
      mailingAddress: "101 Pine Rd, Nairobi",
    },
    numberOfPropertiesListed: 3,
    numberOfPropertiesSold: 0,
    totalSalesRevenue: "Ksh 0",
    activeListings: 3,
    propertiesUnderContract: 0,
    clientType: "Property Owner",
  },
];

export const mockDataBooking = [
  {
    id: 1,
    propertyID: "P001",
    buyerName: "John Smith",
    eventType: "Down Payment",
    eventDateTime: "2023-10-15 14:00",
    eventLocation: "123 Main St, Nairobi",
    bookingAmount: "$5,000",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    propertyID: "P002",
    buyerName: "Emily Johnson",
    eventType: "Open House",
    eventDateTime: "2023-09-30 10:00",
    eventLocation: "456 Elm St, Mombasa",
    bookingAmount: "$0 (Free)",
    paymentStatus: "Pending",
  },
  {
    id: 3,
    propertyID: "P003",
    buyerName: "David Kimani",
    eventType: "Property Tour",
    eventDateTime: "2023-09-25 15:30",
    eventLocation: "789 Oak St, Kisumu",
    bookingAmount: "$0 (Free)",
    paymentStatus: "Paid",
  },
  {
    id: 4,
    propertyID: "P004",
    buyerName: "Grace Akinyi",
    eventType: "Open House",
    eventDateTime: "2023-10-05 11:00",
    eventLocation: "101 Pine Rd, Nairobi",
    bookingAmount: "$0 (Free)",
    paymentStatus: "Partially Paid",
  },
  {
    id: 5,
    propertyID: "P005",
    buyerName: "Peter Omondi",
    eventType: "Down Payment",
    eventDateTime: "2023-10-20 13:15",
    eventLocation: "222 Cedar Ave, Mombasa",
    bookingAmount: "$7,500",
    paymentStatus: "Pending",
  },
];
export const mockDataTasks = [
  {
    id: 1,
    name: "Research Property Market",
    description:
      "Conduct market research to determine property value and demand.",
    assigned: "John Smith",
    priority: "High",
    duedate: "2023-10-15",
    status: "In Progress",
    feedback: "",
  },
  {
    id: 2,
    name: "Property Listing",
    description:
      "Create an attractive property listing with high-quality photos and detailed information.",
    assigned: "Emily Johnson",
    priority: "Medium",
    duedate: "2023-09-30",
    status: "Completed",
    feedback: "Listing looks great!",
  },
  {
    id: 3,
    name: "Legal Due Diligence",
    description:
      "Review property documents, titles, and permits for legal compliance.",
    assigned: "David Kimani",
    priority: "High",
    duedate: "2023-09-25",
    status: "Not Started",
    feedback: "",
  },
  {
    id: 4,
    name: "Property Viewing",
    description: "Schedule property viewings for potential buyers.",
    assigned: "Grace Akinyi",
    priority: "Medium",
    duedate: "2023-10-05",
    status: "Scheduled",
    feedback: "",
  },
  {
    id: 5,
    name: "Negotiation with Buyer",
    description:
      "Engage in negotiations with a potential buyer to finalize the sale.",
    assigned: "Peter Omondi",
    priority: "High",
    duedate: "2023-10-20",
    status: "Pending",
    feedback: "",
  },
  {
    id: 6,
    name: "Documentation and Contracts",
    description: "Prepare legal documents and contracts for the property sale.",
    assigned: "Lucy Njoroge",
    priority: "High",
    duedate: "2023-10-10",
    status: "In Progress",
    feedback: "",
  },
  {
    id: 7,
    name: "Property Handover",
    description: "Coordinate the handover of the property to the new owner.",
    assigned: "Samuel Wanjiku",
    priority: "Medium",
    duedate: "2023-11-05",
    status: "Not Started",
    feedback: "",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Wanjiku Njoroge",
    email: "wanjikunjoroge@gmail.com",
    age: 25,
    phone: "(665)121-5454",
    address: "1234 Karibu Avenue, Karen, Nairobi, KE 00100",
    landLocation: "Karen, Nairobi",
    status: "Interested",
    landSize: "1 acre",
    agent: "Agent A",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Muthoni Kamau",
    email: "muthonikamau@gmail.com",
    age: 32,
    phone: "(421)314-2288",
    address: "5678 Nyumbani Road, Milimani, Kisumu, KE 40100",
    landLocation: "Milimani, Kisumu",
    status: "Not Interested",
    landSize: "0.5 acre",
    agent: "Agent B",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Omondi Otieno",
    email: "omondiotieno@gmail.com",
    age: 35,
    phone: "(422)982-6739",
    address: "9876 Furaha Street, Nyali, Mombasa, KE 80101",
    landLocation: "Nyali, Mombasa",
    status: "Interested",
    landSize: "2 acres",
    agent: "Agent A",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Njeri Gitonga",
    email: "njerigitonga@gmail.com",
    age: 30,
    phone: "(921)425-6742",
    address: "2345 Baraka Lane, Nakuru Town, Nakuru, KE 20105",
    landLocation: "Nakuru Town, Nakuru",
    status: "Interested",
    landSize: "0.75 acre",
    agent: "Agent C",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Kamau Ndungu",
    email: "kamaundungu@gmail.com",
    age: 40,
    phone: "(421)445-1189",
    address: "11122 Bahati Street, Kapsoya, Eldoret, KE 30120",
    landLocation: "Kapsoya, Eldoret",
    status: "Interested",
    landSize: "1.5 acres",
    agent: "Agent B",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Akinyi Ochieng",
    email: "akinyiochieng@gmail.com",
    age: 45,
    phone: "(232)545-6483",
    address: "3456 Nyumbani Road, Milimani, Kisumu, KE 40100",
    landLocation: "Milimani, Kisumu",
    status: "Not Interested",
    landSize: "0 acres",
    agent: "Agent A",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Odhiambo Omondi",
    email: "odhiamboomondi@gmail.com",
    age: 50,
    phone: "(543)124-0123",
    address: "7890 Furaha Street, Nyali, Mombasa, KE 80101",
    landLocation: "Nyali, Mombasa",
    status: "Interested",
    landSize: "3 acres",
    agent: "Agent C",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Wanjiru Karanja",
    email: "wanjirukaranja@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4567 Karibu Avenue, Karen, Nairobi, KE 00100",
    landLocation: "Karen, Nairobi",
    status: "Interested",
    landSize: "1.2 acres",
    agent: "Agent B",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Ochieng Owiti",
    email: "ochiengowiti@gmail.com",
    age: 45,
    phone: "(444)555-6239",
    address: "6543 Baraka Lane, Nakuru Town, Nakuru, KE 20105",
    landLocation: "Nakuru Town, Nakuru",
    status: "Interested",
    landSize: "0.8 acres",
    agent: "Agent C",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Achieng Mwangi",
    email: "achiengmwangi@gmail.com",
    age: 28,
    phone: "(222)444-5555",
    address: "3456 Bahati Street, Kapsoya, Eldoret, KE 30120",
    landLocation: "Kapsoya, Eldoret",
    status: "Not Interested",
    landSize: "0 acres",
    agent: "Agent A",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Wachira Karimi",
    email: "wachirakarimi@gmail.com",
    age: 27,
    phone: "(444)555-6239",
    address: "5678 Nyumba Ndogo Road, Nyali, Mombasa, KE 80101",
    landLocation: "Nyali, Mombasa",
    status: "Interested",
    landSize: "2.5 acres",
    agent: "Agent B",
    registrarId: 92197,
  },
];
export const mockDataPropertyLand = [
  {
    "id": "LND001",
    "propertyId": "NAK001",
    "name": "Nakuru Valley Farmland",
    "location": "Nakuru",
    "type": "Agricultural",
    "size": "10 acres",
    "price": "1200000",
    "status": "Available"
  },
  {
    "id": "LND002",
    "propertyId": "KIS002",
    "name": "Kisii Tea Plantation",
    "location": "Kisii",
    "type": "Agricultural",
    "size": "30 acres",
    "price": "3500000",
    "status": "Under Negotiation"
  },
  {
    "id": "LND003",
    "propertyId": "MER003",
    "name": "Meru Residential Plot",
    "location": "Meru",
    "type": "Residential",
    "size": "0.5 acres",
    "price": "800000",
    "status": "Available"
  },
  {
    "id": "LND004",
    "propertyId": "MBS004",
    "name": "Mombasa Coastal Land",
    "location": "Mombasa",
    "type": "Commercial",
    "size": "5 acres",
    "price": "5500000",
    "status": "Available"
  },
  {
    "id": "LND005",
    "propertyId": "ELD005",
    "name": "Eldoret Industrial Zone",
    "location": "Eldoret",
    "type": "Industrial",
    "size": "15 acres",
    "price": "2800000",
    "status": "Under Development"
  },
  {
    "id": "LND006",
    "propertyId": "THK006",
    "name": "Thika Prime Land",
    "location": "Thika",
    "type": "Commercial",
    "size": "2 acres",
    "price": "2400000",
    "status": "Available"
  },
  {
    "id": "LND007",
    "propertyId": "LAI007",
    "name": "Laikipia Ranch",
    "location": "Laikipia",
    "type": "Rural",
    "size": "50 acres",
    "price": "6500000",
    "status": "Available"
  }
];

export const mockDataProperty = [
  {
    "id": "PROP001",
    "propertyId": "NGP001",
    "name": "Green Gardens Estate",
    "location": "Nairobi",
    "type": "Apartment",
    "bedrooms": 3,
    "bathrooms": 2,
    "price": "2500000",
    "status": "Available"
  },
  {
    "id": "PROP002",
    "propertyId": "KAR002",
    "name": "Kisumu Residences",
    "location": "Kisumu",
    "type": "House",
    "bedrooms": 4,
    "bathrooms": 3,
    "price": "4500000",
    "status": "Under Contract"
  },
  {
    "id": "PROP003",
    "propertyId": "MBS003",
    "name": "Mombasa Beachfront Villa",
    "location": "Mombasa",
    "type": "Villa",
    "bedrooms": 5,
    "bathrooms": 4,
    "price": "7500000",
    "status": "Available"
  },
  {
    "id": "PROP004",
    "propertyId": "NAX004",
    "name": "Nakuru Heights Apartments",
    "location": "Nakuru",
    "type": "Apartment",
    "bedrooms": 2,
    "bathrooms": 2,
      "price": "3200000",
      "status": "Available",
    },
  ];
export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    "txId": "KES123ABC",
    "user": "janekamau",
    "date": "2023-09-29",
    "cost": "450000"
  },
  {
    "txId": "MPESAXYZ1",
    "user": "wangarikariuki",
    "date": "2023-09-28",
    "cost": "120050"
  },
  {
    "txId": "KES456DEF",
    "user": "muthoniesther",
    "date": "2023-09-27",
    "cost": "780000"
  },
  {
    "txId": "MPESABCD2",
    "user": "otienoharrison",
    "date": "2023-09-26",
    "cost": "32000"
  },
  {
    "txId": "KES789GHI",
    "user": "kimanirobert",
    "date": "2023-09-25",
    "cost": "150000"
  },
  {
    "txId": "MPESAEFG3",
    "user": "njorogefrancis",
    "date": "2023-09-24",
    "cost": "8800"
  },
  {
    "txId": "KES101112JKL",
    "user": "akinyinancy",
    "date": "2023-09-23",
    "cost": "250000"
  }
]
;

export const mockBarData = [
  {
    month: "January",
    Eugene: 5,
    Kim: 6,
    Optiven: 7,
    Loyd: 4,
    Others: 3, // Added "Others" category
  },
  {
    month: "February",
    Eugene: 6,
    Kim: 7,
    Optiven: 8,
    Loyd: 5,
    Others: 2, // Added "Others" category
  },
  {
    month: "March",
    Eugene: 7,
    Kim: 8,
    Optiven: 9,
    Loyd: 6,
    Others: 1, // Added "Others" category
  },
  {
    month: "April",
    Eugene: 8,
    Kim: 9,
    Optiven: 10,
    Loyd: 7,
    Others: 2, // Added "Others" category
  },
  {
    month: "May",
    Eugene: 9,
    Kim: 10,
    Optiven: 11,
    Loyd: 8,
    Others: 3, // Added "Others" category
  },
  {
    month: "June",
    Eugene: 10,
    Kim: 11,
    Optiven: 12,
    Loyd: 9,
    Others: 4, // Added "Others" category
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

// export const mockLineData = [
//   {
//     id: "japan",
//     color: tokens("dark").greenAccent[500],
//     data: [
//       {
//         x: "plane",
//         y: 101,
//       },
//       {
//         x: "helicopter",
//         y: 75,
//       },
//       {
//         x: "boat",
//         y: 36,
//       },
//       {
//         x: "train",
//         y: 216,
//       },
//       {
//         x: "subway",
//         y: 35,
//       },
//       {
//         x: "bus",
//         y: 236,
//       },
//       {
//         x: "car",
//         y: 88,
//       },
//       {
//         x: "moto",
//         y: 232,
//       },
//       {
//         x: "bicycle",
//         y: 281,
//       },
//       {
//         x: "horse",
//         y: 1,
//       },
//       {
//         x: "skateboard",
//         y: 35,
//       },
//       {
//         x: "others",
//         y: 14,
//       },
//     ],
//   },
//   {
//     id: "france",
//     color: tokens("dark").blueAccent[300],
//     data: [
//       {
//         x: "plane",
//         y: 212,
//       },
//       {
//         x: "helicopter",
//         y: 190,
//       },
//       {
//         x: "boat",
//         y: 270,
//       },
//       {
//         x: "train",
//         y: 9,
//       },
//       {
//         x: "subway",
//         y: 75,
//       },
//       {
//         x: "bus",
//         y: 175,
//       },
//       {
//         x: "car",
//         y: 33,
//       },
//       {
//         x: "moto",
//         y: 189,
//       },
//       {
//         x: "bicycle",
//         y: 97,
//       },
//       {
//         x: "horse",
//         y: 87,
//       },
//       {
//         x: "skateboard",
//         y: 299,
//       },
//       {
//         x: "others",
//         y: 251,
//       },
//     ],
//   },
//   {
//     id: "us",
//     color: tokens("dark").redAccent[200],
//     data: [
//       {
//         x: "plane",
//         y: 191,
//       },
//       {
//         x: "helicopter",
//         y: 136,
//       },
//       {
//         x: "boat",
//         y: 91,
//       },
//       {
//         x: "train",
//         y: 190,
//       },
//       {
//         x: "subway",
//         y: 211,
//       },
//       {
//         x: "bus",
//         y: 152,
//       },
//       {
//         x: "car",
//         y: 189,
//       },
//       {
//         x: "moto",
//         y: 152,
//       },
//       {
//         x: "bicycle",
//         y: 8,
//       },
//       {
//         x: "horse",
//         y: 197,
//       },
//       {
//         x: "skateboard",
//         y: 107,
//       },
//       {
//         x: "others",
//         y: 170,
//       },
//     ],
//   },
// ];

export const mockLineData = [
  {
    id: "Eugene",
    color: tokens("dark").greenAccent[500],
    data: [
      { month: "January", totalSales: 5 },
      { month: "February", totalSales: 6 },
      { month: "March", totalSales: 7 },
      { month: "April", totalSales: 8 },
      { month: "May", totalSales: 9 },
      { month: "June", totalSales: 10 },
    ],
  },
  {
    id: "Kim",
    color: tokens("dark").blueAccent[300],
    data: [
      { month: "January", totalSales: 6 },
      { month: "February", totalSales: 7 },
      { month: "March", totalSales: 8 },
      { month: "April", totalSales: 9 },
      { month: "May", totalSales: 10 },
      { month: "June", totalSales: 11 },
    ],
  },
  {
    id: "Optiven",
    color: tokens("dark").redAccent[200],
    data: [
      { month: "January", totalSales: 7 },
      { month: "February", totalSales: 8 },
      { month: "March", totalSales: 9 },
      { month: "April", totalSales: 10 },
      { month: "May", totalSales: 11 },
      { month: "June", totalSales: 12 },
    ],
  },
  {
    id: "Loyd",
    color: tokens("dark").greenAccent[300],
    data: [
      { month: "January", totalSales: 4 },
      { month: "February", totalSales: 5 },
      { month: "March", totalSales: 6 },
      { month: "April", totalSales: 7 },
      { month: "May", totalSales: 8 },
      { month: "June", totalSales: 9 },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
