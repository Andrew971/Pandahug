import React from 'react';

export const ModalContactUs = () => {

  return (<div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Book your FREE initial Consultation
    </button>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Book your FREE initial Consultation</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form ref={(self) => {
                this.contactForm = self
              }}>
              <div className="form-row">
                <div className="col-10">
                  <input type="text" className="form-control" placeholder="Name" name="userName"/>
                </div>
                <div className="col-10">
                  <input type="text" className="form-control" placeholder="Age" name="age"/>
                </div>
                <div className="col-10">
                  <input type="text" className="form-control" placeholder="Email" name="email"/>
                </div>
                <div className="col-10">
                  <input type="text" className="form-control" placeholder="Phone Number (including country and area code)" name="phone"/>
                </div>
                <div className="col-10">
                  <input type="text" className="form-control" placeholder="Preferred Language (if you do not speak English)" name="language"/>
                </div>

                <div className="col-10">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Questions/Comments: Where is your dream school? What do you want to be when grow up? The more information you provide us, the better we can be prepared to help." name="comments"></textarea>
                </div>
                <div className="col-11"></div>

              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
                this.props.contactForm(this.contactForm.userName.value, this.contactForm.age.value, this.contactForm.email.value, this.contactForm.phone.value, this.contactForm.language.value, this.contactForm.comments.value)
              }}>Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Thank you!
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>An advisor will reach out to you in two business days.</h5>
            <h5>Check out our chatbots on each page for frequently asked questions and learning games!</h5>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>

  </div>)
}
