import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faBirthdayCake,
  faMapPin,
  faMobileAlt,
} from "@fortawesome/fontawesome-free-solid";
import "./UserCard.css";

export const UserCard = ({ user }) => {
  return (
    <div className="card-item">
      <div className="header">
        <span className="user-name">
          {user.name.title} {user.name.first} {user.name.last}, {user.dob.age}
        </span>
        <span>
          <FontAwesomeIcon className="pin-map" icon={faMapPin} />
          {user.location.state}
        </span>
      </div>
      <div className="user-img">
        <img src={user.picture.large} alt="user-img" />
      </div>
      <p>
        <b>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </b>
      </p>
      <div className="user-info">
        <span>
          <FontAwesomeIcon icon={faUser} />

          {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
        </span>
        <span>
          <FontAwesomeIcon icon={faBirthdayCake} />
          {user.dob.date.slice(0, 10)}
        </span>
        <span>
          <FontAwesomeIcon className="pin-map" icon={faMobileAlt} />
          {user.cell}
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
          {user.email}
        </span>
      </div>
    </div>
  );
};

/**
 * 
 * 
 *    "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
 */
