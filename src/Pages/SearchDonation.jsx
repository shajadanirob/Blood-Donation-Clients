import React, { useState, useEffect } from "react";
import { getAllUser } from "../Api/Auth";
import Container from "../Shared/Container";

const SearchDonation = () => {
  const [donations, setDonation] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [Districts, setDistrict] = useState([]);
  const [upeZila, setUpeZila] = useState([]);

  useEffect(() => {
    getAllUser().then((res) => {
      setDonation(res);
      setFilteredDonations(res); // Initially set filtered data to all data
    });
  }, []);

  useEffect(() => {
    fetch("/Distric.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  useEffect(() => {
    fetch("/Upozila.json")
      .then((res) => res.json())
      .then((data) => setUpeZila(data));
  }, []);

  const handleSearch = (criteria) => {
    // Filter data based on the selected criteria
    const filteredData = donations.filter((donation) => {
      if (criteria.email && donation.email !== criteria.email) return false;
      if (criteria.district && donation.district !== criteria.district) return false;
      if (criteria.upazila && donation.upeZila !== criteria.upazila) return false;
      if (criteria.bloodGroup && donation.bloodGroup !== criteria.bloodGroup) return false;

      return true;
    });

    setFilteredDonations(filteredData);
  };

  return (
    <div className="my-32">
      <div className="lg:flex  justify-center items-center space-x-4 p-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by email..."
          className="border rounded p-2"
          onChange={(e) => handleSearch({ email: e.target.value })}
        />

        {/* Select Box 1 */}
        <select className="border rounded p-2" onChange={(e) => handleSearch({ district: e.target.value })} required>
          <option disabled selected value="">
            District
          </option>
          {Districts.map((dist) => (
            <option key={dist.id} value={dist.name}>
              {dist.name}
            </option>
          ))}
        </select>

        {/* Select Box 2 */}
        <select className="border rounded p-2" onChange={(e) => handleSearch({ upazila: e.target.value })} required>
          <option disabled selected value="">
            Upazila
          </option>
          {upeZila.map((upo) => (
            <option value={upo.name} key={upo.id}>
              {upo.name}
            </option>
          ))}
        </select>

        {/* Select Box 3 */}
        <select className="border rounded p-2" onChange={(e) => handleSearch({ bloodGroup: e.target.value })} required>
          <option disabled selected value="">
            Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* Search Button */}
        {/* <button className="bg-[#ea062b] text-white p-2 rounded" onClick={() => handleSearch({})}>
          Search
        </button> */}
      </div>

      <Container>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>name</th>
                <th>email</th>
                <th>Blood Group</th>
                <th>District</th>
                <th>upeZila</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {filteredDonations.map((donation, index) => (
                <tr key={donation._id}>
                  <th>{index + 1}</th>
                  <td>{donation.name}</td>
                  <td>{donation.email}</td>
                  <td>{donation.bloodGroup}</td>
                  <td>{donation.district}</td>
                  <td>{donation.upeZila}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default SearchDonation;
