import React, { Component } from 'react';
import $ from 'jquery';
import ChatbotDashboard from '../ChatbotDashboard';
import './index.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem } from 'reactstrap';
import Footer from '../Footer';
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



  clickLevel = () => {
    $("#level p").on('click', function () {

      $("#levelButton").html($(this).text());
    });
  }

  clickSubject = () => {
    $("#subject p").on('click', function () {

      $("#subjectButton").html($(this).text());
    });
  }

  clickValuable = () => {
    $("#valuable p").on('click', function () {

      $("#valuableButton").html($(this).text());
    });
  }

  clickCountry = () => {
    $("#country p").on('click', function () {

      $("#countryButton").html($(this).text());
    });
  }

  searchResultValuable = (event) => {
    event.preventDefault()

    //  console.log(this.studyLevel.value)
    let studyLevel = event.target.studyLevel.value;
    let studyValuable = event.target.studyValuable.value;
    let studyCountry = event.target.studyCountry.value;
    console.log(studyLevel, studyValuable, studyCountry)
  
    


  
  
  }





  searchResultCommon = (event) => {
    event.preventDefault()

    //  console.log(this.studyLevel.value)
    let studyLevel = event.target.studyLevel.value;
    let studyCommon = event.target.studyCommon.value;
    let studyCountry = event.target.studyCountry.value;


    console.log(studyLevel, studyCommon, studyCountry)
   
    axios.post('http://localhost:8080/search', {
      level: studyLevel,
      subject: studyCommon,
      country: studyCountry,
    })
      .then((response)=> {
        console.log(response.data)
        this.setState({
          searchItems: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });


  }
 
  

render() {

  return (
    <div>
      <div className="container-fluid">

        <div className="jumbotron" align="center" id="searchJumbo" >
          {/* <div className="container"> */}
          <div id="overlay"></div>
          <h1 className="display-4">Find your Dream School</h1>
          

          {/* </div> */}
        </div>

        {/* <form
          // action="/search" method="POST"
          name="search" onSubmit={(event) => { this.searchResultValuable(event) }}>
          <Label for="BestSchools">The Best Schools with Valuable Majors for 2020: </Label>
          <select name='studyLevel'>
        
            <option value="undergrad">Undergraduate</option>
            <option value="postgrad">Graduate</option>

          </select>
          <select name='studyValuable'>
            <Label for="ValuableSubjects">Valuable Majors</Label>
            <option value="BiomedicalEngineering">Biomedical Engineering</option>
            <option value="Biochemistry"  >Biochemistry </option>
            <option value="Computer Science" >Computer Science</option>
            <option value="Software Engineering" >Software Engineering</option>
            <option value="Environmental Engineering" >Environmental Engineering</option>
            <option value="Civil Engineering" >Civil Engineering</option>
            <option value="Geology" >Geology</option>
            <option value="Management Information Systems" >Management Information Systems</option>
            <option value="Applied Mathematics" >Applied Mathematics</option>
            <option value="Mathematics" >Mathematics</option>
            <option value="Construction Management" >Construction Management</option>
            <option value="Finance" >Finance</option>
            <option value="Physics" >Physics</option>
            <option value="Statistics" >Statistics</option>
          </select>
          <select name='studyCountry'>
            <Label for="Country">Country</Label>
            <option value="canada" >Canada</option>
            <option value="united-states"  >United States</option>

          </select>

          <button type="submit" disabled> Search </button>
        </form> */}


        <hr />


        <div className="searchForm">

          <form
            // action="/search" method="POST"
            name="search"  onSubmit={(event) => { this.searchResultCommon(event) }}>
            <Label for="BestSchools">The Top Schools with Commonly Searched Majors:</Label>
            <select name='studyLevel' id='levels'>
             
              <option value="undergrad">Undergraduate</option>
              <option value="postgrad">Graduate</option>

            </select>
            <select name='studyCommon' id="majors">
              <Label for="CommonSubjects"  >Majors</Label>
              <option value="accounting-finance" >Accounting and Finance</option>
              <option value="agriculture-forestry"  >Agriculture and Forestry </option>
              
              <option value="anatomy-physiology" >Anatomy and Physiology</option>
              <option value="anthropology" >Anthropology</option>
              <option value="archaeology" >Archaeology</option>
              <option value="architecture" >Architecture</option>
              <option value="area-studies" >Area Studies</option>
              <option value="art-design" >Art and Design</option>
              <option value="astronomy" >Astronomy</option>
              <option value="biological-sciences" >Biological Sciences</option>
              <option value="built-environment" >Built Environment</option>
              <option value="business-management-studies" >Business and Management Studies</option>
              <option value="chemistry" >Chemistry</option>
              <option value="classics-ancient-history" >Classics and Ancient History</option>
              <option value="communication-media-studies" >Communication and Media Studies</option>
              <option value="computer-science-information-systems" >Computer Science and Information Systems</option>
              <option value="dentistry" >Dentistry</option>
              <option value="development-studies" >Development Studies</option>
              <option value="earth-marine-sciences" >Earth and Marine Sciences</option>
              <option value="economics-econometrics" >Economics and Econometrics</option>
              <option value="education-training" >Education and Training</option>
              <option value="engineering-aeronautical" >Engineering - Aeronautical</option>
              <option value="engineering-chemical" >Engineering - Chemical</option>
              <option value="engineering-civil-structural" >Engineering - Civil and Structural</option>
              <option value="engineering-electrical-electronic" >Engineering - Electrical and Electronic</option>
              <option value="engineering-general" >Engineering - General</option>
              <option value="engineering-manufacturing-production" >Engineering - Manufacturing and Production</option>
              <option value="engineering-mechnical" >Engineering - Mechnical</option>
              <option value="engineering-mineral-mining" >Engineering - Mineral and Mining</option>
              <option value="engineering-management" >Engineering Management</option>
              <option value="english-language-literature" >English Language and Literature</option>
              <option value="ethnicity-gender-diversity" >Ethnicity, Gender and Diversity</option>
              <option value="finance" >Finance</option>
              <option value="geography" >Geography</option>
              <option value="hospitality-leisure-management" >Hospitality and Leisure Management</option>
              <option value="human-resources-management" >Human Resources Management</option>
              <option value="international-relationsstudiesaffairs" >International Relations/Studies</option>
              <option value="journalism" >Journalism</option>
              <option value="law-legal-studies" >Law and Legal Studies</option>
              <option value="library-information-management" >Library and Information Management</option>
              <option value="linguistics" >Linguistics</option>
              <option value="logistics-supply-chain-management" >Logistics/Supply Chain Management</option>
              <option value="marketing" >Marketing</option>
              <option value="materials-sciences" >Materials Sciences</option>
              <option value="mathematics" >Mathematics</option>
              <option value="medicine" >Medicine</option>
              <option value="medicine-related-studies" >Medicine Related Studies</option>
              <option value="modern-languages" >Modern Languages</option>
              <option value="nursing" >Nursing</option>
              <option value="performing-arts" >Performing Arts</option>
              <option value="pharmacology" >Pharmacology</option>
              <option value="philosophy" >Philosophy</option>
              <option value="physics-astronomy" >Physics and Astronomy</option>
              <option value="politics-psychology" >Politics and Psychology</option>
              <option value="public-policy" >Public Policy</option>
              <option value="sociology" >Sociology</option>
              <option value="sport-related-courses" >Sport Related Courses</option>
              <option value="statistics-operational-research" >Statistics and Operational Research</option>
              <option value="theology-divinity-religious-studies" >Theology, Divinity and Religious Studies</option>
              <option value="urban-planning" >Urban Planning</option>
              <option value="veterinary-science" >Veterinary Science</option>
              <option value="zoology" >Zoology</option>



            </select>
            <select name='studyCountry' id='countries'>
              <Label for="Country">Country</Label>
              <option value="canada" >Canada</option>
              <option value="united-states"  >United States</option>

            </select>

            <button type="submit"> Search </button>
          </form>


          <hr />

        </div>
         
       
        <div>
          
          <SearchResults searchItems={this.state.searchItems}/>
         
        </div>
      <div className="toptenUni">
          <h4 id="topten">Top 10 Universities in the World 2018</h4>
          <ListGroup>
            <ListGroupItem>#1      Massachusetts Institute of Technology (MIT)</ListGroupItem>
            <ListGroupItem>#2      Stanford University</ListGroupItem>
            <ListGroupItem>#3      Harvard University</ListGroupItem>
            <ListGroupItem>#4      California Institute of Technology (Caltech)</ListGroupItem>
            <ListGroupItem>#5      University of Cambridge</ListGroupItem>
            <ListGroupItem>#6      University of Oxford</ListGroupItem>
            <ListGroupItem>#7      UCL (University College London)</ListGroupItem>
            <ListGroupItem>#8      Imperial College London</ListGroupItem>
            <ListGroupItem>#9      University of Chicago</ListGroupItem>
            <ListGroupItem>#10     ETH Zurich (Swiss Federal Institute of Technology</ListGroupItem>
          </ListGroup>

   </div>


      </div>
       
      
      <div>
        <Footer />
      </div>

      <div className="chatbot">
        <ChatbotDashboard />
      </div>



    </div >
  )
}
}