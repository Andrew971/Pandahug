import React, {Component} from 'react';
import './index.css';
import Chatbox from '../../../js/chatbox';
import {search} from '../../../js/chatbox/search'
import Jumbotron from '../../../js/Jumbotron'

import {Label, ListGroup, ListGroupItem} from 'reactstrap';
import SearchResults from '../Search/SearchResults';
import axios from 'axios';

export default class Search extends Component {
  constructor() {
    super()

    this.state = {
      searchItems: [],
      searchValue: ''
    }
  }

  searchResultCommon = (event) => {
    event.preventDefault()

    let studyLevel = event.target.studyLevel.value;
    let studyCommon = event.target.studyCommon.value;
    let studyCountry = event.target.studyCountry.value;

    axios.post('http://localhost:8080/search', {
      level: studyLevel,
      subject: studyCommon,
      country: studyCountry
    }).then((response) => {
      // console.log(response.data)
      this.setState({searchItems: response.data})
    }).catch(function(error) {
      // console.log(error);
    });

  }

  render() {
    const {contactForm} = this.props

    return (<div>

        <Jumbotron id="searchJumbo" contactForm={contactForm}>
          <h1 className="display-4">Find your Dream School</h1>
        </Jumbotron>


        <div className="searchForm">
          <hr/>

          <form
            action="/search" method="POST"
            name="search" onSubmit={(event) => {
              this.searchResultCommon(event)
            }}>
            <Label htmlFor="BestSchools">The Top Schools with Commonly Searched Majors:</Label>
            <select name='studyLevel' id='levels'>

              <option value="undergrad">Undergraduate</option>
              <option value="postgrad">Graduate</option>

            </select>
            <select name='studyCommon' id="majors">
              <option value="accounting-finance">Accounting and Finance</option>
              <option value="agriculture-forestry">Agriculture and Forestry
              </option>

              <option value="anatomy-physiology">Anatomy and Physiology</option>
              <option value="anthropology">Anthropology</option>
              <option value="archaeology">Archaeology</option>
              <option value="architecture">Architecture</option>
              <option value="area-studies">Area Studies</option>
              <option value="art-design">Art and Design</option>
              <option value="astronomy">Astronomy</option>
              <option value="biological-sciences">Biological Sciences</option>
              <option value="built-environment">Built Environment</option>
              <option value="business-management-studies">Business and Management Studies</option>
              <option value="chemistry">Chemistry</option>
              <option value="classics-ancient-history">Classics and Ancient History</option>
              <option value="communication-media-studies">Communication and Media Studies</option>
              <option value="computer-science-information-systems">Computer Science and Information Systems</option>
              <option value="dentistry">Dentistry</option>
              <option value="development-studies">Development Studies</option>
              <option value="earth-marine-sciences">Earth and Marine Sciences</option>
              <option value="economics-econometrics">Economics and Econometrics</option>
              <option value="education-training">Education and Training</option>
              <option value="engineering-aeronautical">Engineering - Aeronautical</option>
              <option value="engineering-chemical">Engineering - Chemical</option>
              <option value="engineering-civil-structural">Engineering - Civil and Structural</option>
              <option value="engineering-electrical-electronic">Engineering - Electrical and Electronic</option>
              <option value="engineering-general">Engineering - General</option>
              <option value="engineering-manufacturing-production">Engineering - Manufacturing and Production</option>
              <option value="engineering-mechnical">Engineering - Mechnical</option>
              <option value="engineering-mineral-mining">Engineering - Mineral and Mining</option>
              <option value="engineering-management">Engineering Management</option>
              <option value="english-language-literature">English Language and Literature</option>
              <option value="ethnicity-gender-diversity">Ethnicity, Gender and Diversity</option>
              <option value="finance">Finance</option>
              <option value="geography">Geography</option>
              <option value="hospitality-leisure-management">Hospitality and Leisure Management</option>
              <option value="human-resources-management">Human Resources Management</option>
              <option value="international-relationsstudiesaffairs">International Relations/Studies</option>
              <option value="journalism">Journalism</option>
              <option value="law-legal-studies">Law and Legal Studies</option>
              <option value="library-information-management">Library and Information Management</option>
              <option value="linguistics">Linguistics</option>
              <option value="logistics-supply-chain-management">Logistics/Supply Chain Management</option>
              <option value="marketing">Marketing</option>
              <option value="materials-sciences">Materials Sciences</option>
              <option value="mathematics">Mathematics</option>
              <option value="medicine">Medicine</option>
              <option value="medicine-related-studies">Medicine Related Studies</option>
              <option value="modern-languages">Modern Languages</option>
              <option value="nursing">Nursing</option>
              <option value="performing-arts">Performing Arts</option>
              <option value="pharmacology">Pharmacology</option>
              <option value="philosophy">Philosophy</option>
              <option value="physics-astronomy">Physics and Astronomy</option>
              <option value="politics-psychology">Politics and Psychology</option>
              <option value="public-policy">Public Policy</option>
              <option value="sociology">Sociology</option>
              <option value="sport-related-courses">Sport Related Courses</option>
              <option value="statistics-operational-research">Statistics and Operational Research</option>
              <option value="theology-divinity-religious-studies">Theology, Divinity and Religious Studies</option>
              <option value="urban-planning">Urban Planning</option>
              <option value="veterinary-science">Veterinary Science</option>
              <option value="zoology">Zoology</option>

            </select>
            <select name='studyCountry' id='countries'>
              <option value="canada">Canada</option>
              <option value="united-states">United States</option>

            </select>

            <button type="submit">
              Search
            </button>
          </form>

          <hr/>

        </div>

        <div>

          <SearchResults searchItems={this.state.searchItems}/>

        </div>
        <div className="toptenUni">
          <h4 id="topten">Top 10 Universities in the World 2018</h4>
          <ListGroup>
            <ListGroupItem>#1 Massachusetts Institute of Technology (MIT)</ListGroupItem>
            <ListGroupItem>#2 Stanford University</ListGroupItem>
            <ListGroupItem>#3 Harvard University</ListGroupItem>
            <ListGroupItem>#4 California Institute of Technology (Caltech)</ListGroupItem>
            <ListGroupItem>#5 University of Cambridge</ListGroupItem>
            <ListGroupItem>#6 University of Oxford</ListGroupItem>
            <ListGroupItem>#7 University College London (UCL)</ListGroupItem>
            <ListGroupItem>#8 Imperial College London</ListGroupItem>
            <ListGroupItem>#9 University of Chicago</ListGroupItem>
          <ListGroupItem>#10 Swiss Federal Institute of Technology (ETH Zurich)</ListGroupItem>
          </ListGroup>

        </div>


      <div className="chatbot">
        <Chatbox steps={search} />
      </div>

    </div >)
  }
}
