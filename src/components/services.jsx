import React from "react";
import CrewImg from "../assets/images/production_crew.png";
import LeadsImg from "../assets/images/production_leads.png";
import DriversImg from "../assets/images/drivers.png";
import LogisticImg from "../assets/images/logistic_manager.png";
import WarehouseImg from "../assets/images/warehouse.png";
import FloristImg from "../assets/images/florist.png";

export const Services = (props) => {
  return (
    <section id="services">
      <h3 class="small-heading">SERVICES</h3>
      <div class="card-container">
        <div class="card">
          <div class="card-img">
            <img src={CrewImg} alt="" />
          </div>
          <div class="card-body">
            <h3>Production crew</h3>
            <p>
              Leave the hard work to our proficient production guys. From unloading furniture to flawlessly managing set up and breakdown,
              they handle it all with efficiency.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={LeadsImg} alt="" />
          </div>
          <div class="card-body">
            <h3>Production leads</h3>
            <p>
              Let our seasoned leads take your event to the next level, our bilingual leads take charge behind the scenes, making smooth workflows and time.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={DriversImg} alt="" />
          </div>
          <div class="card-body">
            <h3>Drivers</h3>
            <p>
              Our team of expert drivers handles various vehicles, including trucks, ensuring seamless transportation for your deliveries and operations.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={LogisticImg} alt="" />
          </div>
          <div class="card-body">
            <h3>Logistic managers</h3>
            <p>
              Our logistic managers are the backbone of event operations. They handle staff scheduling, meticulous check-in/out recording, and ensure adherence to production timelines at every stage of the event.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={WarehouseImg} alt="" />
          </div>
          <div class="card-body">
            <h3>Warehouse support</h3>
            <p>
              Our warehouse staff ensures the organization of event hard goods and furniture, guaranteeing that everything is in place for a seamless post-event operation.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-img">
            <img src={FloristImg} alt="" />
          </div>
          <div class="card-body">
            <h3>Florist services</h3>
            <p>
              Our florist services include talented floral designers who create stunning floral designs for your event. We also provide skilled Floral assistants to provide production support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
