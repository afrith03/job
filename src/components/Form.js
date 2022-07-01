import React from 'react'

function Form() {
  return (
    <div className="container my-5">
 <form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Place</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Chennai</option>
      <option>Madurai</option>
      <option>Santa Carla</option>
      <option>London</option>
      <option>Tokyo</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  <div className="input-group">
<span className="input-group-text" id="basic-addon1">Email</span>
  <input type="email" className="form-control" placeholder="Enter your mail ID" aria-label="email" aria-describedby="basic-addon1" required/>
</div>

<div className="input-group">
<span className="input-group-text" id="basic-addon1">Password</span>
  <input type="password" className="form-control" placeholder="Enter your Password" aria-label="email" aria-describedby="basic-addon1" required/>
</div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-dark" type="submit">Submit</button>
  </div>
</form>


</div>

  )
}

export default Form