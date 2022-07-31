import React from 'react';
import "./Activities.css";

const Activities = () => {
  return (
    <div class="container">
        <h1 id='h1'>Recent Activities</h1>
        <div class="row">
            <div class="col-xxl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="card-deck">
            <div class="card" id='cd-1'>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Metamorphosis is one the mega events of Walchand Linux Users' Group. This is a two day event comprising of exploring and learning two modern and important technologies. In this year we will be introducing Docker and Blockchain as those two technologies. 📆Date: 19 - 20 March 2022</p>
                    <div id='btn'> <button type="button" class="btn btn-success">View more</button></div>
                </div>
            </div>
            </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="card-deck">
            <div class="card" id='cd-2'>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Metamorphosis is one the mega events of Walchand Linux Users' Group. This is a two day event comprising of exploring and learning two modern and important technologies. In this year we will be introducing Docker and Blockchain as those two technologies. 📆Date: 19 - 20 March 2022</p>
                    <div id='btn'> <button type="button" class="btn btn-success">View more</button></div>                
                </div>
            </div>
            </div>
            </div>
            <div class="col-xxl-4 col-lg-4 col-md-12 col-sm-12">
            <div class="card-deck">
            <div class="card" id='cd-3'>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body" id='crd'>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Metamorphosis is one the mega events of Walchand Linux Users' Group. This is a two day event comprising of exploring and learning two modern and important technologies. In this year we will be introducing Docker and Blockchain as those two technologies. 📆Date: 19 - 20 March 2022</p>
                    <div id='btn'> <button type="button" class="btn btn-success">View more</button></div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Activities